# GitHub Copilot Plugin Marketplace

This repository is a marketplace-style catalog for GitHub Copilot plugins.

## Repository Layout

- `plugins/`: one folder per plugin
- `marketplace.json`: catalog index of all published plugins in this repo
- `.claude-plugin/marketplace.json`: Claude-compatible marketplace catalog (automatically generated)
- `scripts/validate-marketplace.mjs`: local and CI validation script

## Plugin Packaging Contract

Each plugin must live at `plugins/<plugin-id>/` and include:

- `plugin.json`
- `README.md`
- any plugin-specific assets such as `agents/` and `skills/`

## Workflows

- `.github/workflows/validate-marketplace.yml`: Validates marketplace catalog on pull requests and pushes to main
- `.github/workflows/generate-claude-marketplace.yml`: Generates Claude-compatible marketplace catalog on pushes to main and commits it back

## Quick Start

1. Install Node.js 20+.
2. Run validation:

    ```bash
    npm run validate
    ```

3. Add or update plugins by editing `marketplace.json` and plugin folders under `plugins/`.
4. The Claude marketplace file is automatically generated and committed back to the repo by the CI process

## Current Plugins

- `informed-captain`