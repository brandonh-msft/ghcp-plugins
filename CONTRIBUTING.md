# Contributing Plugins

## Add a New Plugin

1. Create a plugin folder at `plugins/<plugin-id>/`.
2. Add a valid `plugin.json` and `README.md`.
3. Ensure `plugin.json.name` matches `<plugin-id>`.
4. Add an entry to `marketplace.json` with at least `name` and `source`.
5. Run `npm run validate`.

## Marketplace Manifest Requirements

A `marketplace.json` file must include:

- `name`
- `owner` (with `owner.name`)
- `plugins` array

Each plugin entry must include:

- `name`
- `source`

## Plugin Manifest Requirements

A plugin manifest must include at least these fields:

- `name`
- `version`
- `description`
- `author`
- `license`
- `homepage`
- `repository`
- `keywords`
- `category`

Optional capability roots:

- `skills`
- `agents`

## Validation Policy

Validation fails if:

- `marketplace.json` is missing required top-level fields (`name`, `owner`, `plugins`)
- plugin entry is missing required fields (`name`, `source`)
- plugin source path lacks `plugin.json` (for string-based local sources)
- plugin manifest is invalid JSON
- plugin `name` does not match marketplace plugin entry `name`
- duplicate plugin names exist in the catalog
