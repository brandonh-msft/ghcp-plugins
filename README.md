# GitHub Copilot Plugin Marketplace

This repository is a marketplace-style catalog for GitHub Copilot plugins.

## Repository Layout

- `plugins/`: one folder per plugin
- `marketplace.json`: catalog index of all published plugins in this repo
- `scripts/validate-marketplace.mjs`: local and CI validation script

## Plugin Packaging Contract

Each plugin must live at `plugins/<plugin-id>/` and include:

- `plugin.json`
- `README.md`
- any plugin-specific assets such as `agents/` and `skills/`

## Quick Start

1. Install Node.js 20+.
2. Run validation:

    ```bash
    npm run validate
    ```

3. Add or update plugins by editing `marketplace.json` and plugin folders under `plugins/`.

## Current Plugins

- `informed-captain`
