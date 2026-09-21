import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const sourcePath = path.join(root, "marketplace.json");
const outputPath = path.join(root, ".agents", "plugins", "marketplace.json");

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    throw new Error(`Failed to read JSON at ${filePath}: ${error.message}`);
  }
}

function toCodexSource(plugin) {
  const source = plugin.source;

  if (!source || typeof source !== "object") {
    throw new Error(`Plugin '${plugin.name}' must use an object source`);
  }

  if (source.source === "github" && typeof source.repo === "string" && source.repo.length > 0) {
    return {
      source: "url",
      url: `https://github.com/${source.repo}.git`
    };
  }

  if (source.source === "url" && typeof source.url === "string" && source.url.length > 0) {
    return {
      source: "url",
      url: source.url,
      ...(source.ref ? { ref: source.ref } : {})
    };
  }

  if (
    source.source === "git-subdir" &&
    typeof source.url === "string" &&
    source.url.length > 0 &&
    typeof source.path === "string" &&
    source.path.length > 0
  ) {
    return {
      source: "git-subdir",
      url: source.url,
      path: source.path,
      ...(source.ref ? { ref: source.ref } : {})
    };
  }

  throw new Error(`Plugin '${plugin.name}' has an unsupported source format`);
}

function toCodexCategory(category) {
  if (typeof category !== "string" || category.length === 0) {
    return "Developer Tools";
  }

  const categories = {
    security: "Security",
    productivity: "Productivity",
    communication: "Communication",
    creativity: "Creativity",
    finance: "Finance",
    "developer tools": "Developer Tools",
    "education & research": "Education & Research",
    "business & operations": "Business & Operations",
    "data & analytics": "Data & Analytics",
    "scientific research": "Scientific Research"
  };

  return categories[category.toLowerCase()] ?? category;
}

function toCodexPlugin(plugin) {
  if (!plugin || typeof plugin !== "object" || typeof plugin.name !== "string" || plugin.name.length === 0) {
    throw new Error("Every plugin must have a non-empty name");
  }

  const codexPlugin = {
    name: plugin.name,
    source: toCodexSource(plugin),
    policy: {
      installation: "AVAILABLE",
      authentication: "ON_INSTALL"
    },
    category: toCodexCategory(plugin.category)
  };

  if (typeof plugin.displayName === "string" && plugin.displayName.length > 0) {
    codexPlugin.interface = {
      displayName: plugin.displayName
    };
  }

  return codexPlugin;
}

const marketplace = readJson(sourcePath);

if (!Array.isArray(marketplace.plugins)) {
  throw new Error("marketplace.json must contain a plugins array");
}

const codexMarketplace = {
  name: marketplace.name,
  interface: {
    displayName: marketplace.interface?.displayName
      ?? (marketplace.owner?.name ? `${marketplace.owner.name} Plugins` : marketplace.name)
  },
  plugins: marketplace.plugins.map(toCodexPlugin)
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(codexMarketplace, null, 2)}\n`);
console.log(`Generated ${path.relative(root, outputPath)} from ${path.relative(root, sourcePath)}.`);
