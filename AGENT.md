# AGENT.md

Repository guidance for AI coding agents working in this project.

## Project Overview

This repository is a Vue 3 + TypeScript + Vite demo that runs on Cloudflare Workers.

- Framework: Vue 3 with `<script setup lang="ts">`
- Build tool: Vite 8
- Runtime target: Cloudflare Workers via `@cloudflare/vite-plugin`
- Package manager: pnpm only
- Node.js: 22.13.0 or later

## Common Commands

```bash
pnpm dev
pnpm build
pnpm lint
```

- `pnpm dev` starts the Vite dev server.
- `pnpm build` runs type checking and the production build.
- `pnpm lint` runs ESLint and Prettier.

## Code Rules

- Use `@/` for internal imports.
- Prefer `type` over `interface` for object shapes.
- Keep Vue components in `<script setup lang="ts">` SFCs.
- Use self-closing tags for void elements such as `<img />` and `<input />`.
- Keep `<style scoped>` unless there is a strong reason not to.

## Vue Rules

- Use type-based `defineProps` and `defineEmits` declarations.
- Follow the existing import order: Vue core, external packages, then internal aliases.
- Use accessible markup for interactive elements.

## Working Notes

- Update [README.md](README.md) if user-facing behavior or setup changes.
- Keep changes small and focused.
- Prefer fixes at the source rather than local workarounds.

## Validation

Run the relevant checks after editing:

```bash
pnpm lint
pnpm build
```
