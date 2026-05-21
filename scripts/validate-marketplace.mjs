import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const marketplacePath = path.join(root, "marketplace.json");

function readJson(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    return JSON.parse(content);
  } catch (error) {
    throw new Error(`Failed to read JSON at ${filePath}: ${error.message}`);
  }
}

function assert(condition, message, errors) {
  if (!condition) {
    errors.push(message);
  }
}

function validatePluginManifestShape(manifest, manifestPath, errors) {
  const required = [
    "name",
    "version",
    "description",
    "author",
    "license",
    "homepage",
    "repository",
    "keywords",
    "category"
  ];

  for (const key of required) {
    assert(Object.hasOwn(manifest, key), `${manifestPath}: missing required field '${key}'`, errors);
  }

  if (Object.hasOwn(manifest, "keywords")) {
    assert(Array.isArray(manifest.keywords), `${manifestPath}: 'keywords' must be an array`, errors);
    if (Array.isArray(manifest.keywords)) {
      assert(manifest.keywords.length > 0, `${manifestPath}: 'keywords' must contain at least one entry`, errors);
    }
  }
}

function main() {
  const errors = [];

  assert(fs.existsSync(marketplacePath), `Missing marketplace catalog: ${marketplacePath}`, errors);
  if (errors.length > 0) {
    return errors;
  }

  const marketplace = readJson(marketplacePath);

  assert(typeof marketplace.name === "string" && marketplace.name.length > 0, "marketplace.json: 'name' is required", errors);
  assert(
    marketplace.owner && typeof marketplace.owner === "object" && typeof marketplace.owner.name === "string" && marketplace.owner.name.length > 0,
    "marketplace.json: 'owner.name' is required",
    errors
  );
  assert(Array.isArray(marketplace.plugins), "marketplace.json: 'plugins' must be an array", errors);

  if (!Array.isArray(marketplace.plugins)) {
    return errors;
  }

  const seenPluginNames = new Set();

  for (const plugin of marketplace.plugins) {
    if (!plugin || typeof plugin !== "object") {
      errors.push("marketplace.json: each plugin entry must be an object");
      continue;
    }

    const pluginName = plugin.name;
    const pluginSource = plugin.source;

    assert(typeof pluginName === "string" && pluginName.length > 0, "marketplace.json: plugin.name is required", errors);
    assert(pluginSource !== undefined, `marketplace.json: plugin '${pluginName ?? "<unknown>"}' requires 'source'`, errors);

    if (typeof pluginName === "string") {
      assert(!seenPluginNames.has(pluginName), `marketplace.json: duplicate plugin name '${pluginName}'`, errors);
      seenPluginNames.add(pluginName);
    }

    if (typeof pluginSource === "string") {
      const resolvedPluginPath = path.join(root, pluginSource);
      assert(fs.existsSync(resolvedPluginPath), `Missing plugin source path: ${pluginSource}`, errors);

      const resolvedManifestPath = path.join(resolvedPluginPath, "plugin.json");
      assert(fs.existsSync(resolvedManifestPath), `Missing plugin manifest at source path: ${pluginSource}/plugin.json`, errors);

      if (fs.existsSync(resolvedManifestPath)) {
        const manifest = readJson(resolvedManifestPath);
        validatePluginManifestShape(manifest, `${pluginSource}/plugin.json`, errors);

        if (typeof pluginName === "string" && typeof manifest.name === "string") {
          assert(manifest.name === pluginName, `${pluginSource}/plugin.json: 'name' must equal marketplace plugin name '${pluginName}'`, errors);
        }
      }
    } else if (pluginSource && typeof pluginSource === "object") {
      assert(Object.keys(pluginSource).length > 0, `marketplace.json: plugin '${pluginName ?? "<unknown>"}' has an empty source object`, errors);
    } else {
      errors.push(`marketplace.json: plugin '${pluginName ?? "<unknown>"}' has invalid 'source'`);
    }
  }

  return errors;
}

const validationErrors = main();

if (validationErrors.length > 0) {
  console.error("Marketplace validation failed:\n");
  for (const error of validationErrors) {
    console.error(`- ${error}`);
  }
  process.exitCode = 1;
} else {
  console.log("Marketplace validation succeeded.");
}
