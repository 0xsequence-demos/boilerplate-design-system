# Boilerplate Design System

[![npm version](https://badge.fury.io/js/@0xsequence-demos%2Fboilerplate-design-system.svg)](https://badge.fury.io/js/@0xsequence-demos%2Fboilerplate-design-system)

A reusable design system built with Tailwind CSS and React, available in two versions: legacy support for React 18 and an latest version for React 19.

## Installation

There are two available packages:

### React 19

```bash
pnpm add @0xsequence-demos/boilerplate-design-system
```

### React 18

```bash
pnpm add @0xsequence-demos/boilerplate-design-system@react-18
```

Ensure you are using the correct version for your React project.

## Tailwind Compatibility

This design system uses **Tailwind CSS v4**. If your project hasn't been upgraded yet, please follow the [Tailwind CSS upgrade guide](https://tailwindcss.com/docs/upgrade-guide) to migrate to version 4.

## Updating Existing Projects

If you're updating from a previous version of the design system:

- **Update your import paths** in both JavaScript/TypeScript files and your `tailwind.config.js` or CSS files to reflect the new module structure.

### Change Imports

**Was**
`import {...} from "boilerplate-design-system"`

**Now**
`import {...} from "@0xsequence-demos/boilerplate-design-system"`

### Include CSS styles

In your global css file, include:

``` css
@import "@0xsequence-demos/boilerplate-design-system/styles/index.css";
@source "../../node_modules/@0xsequence-demos/boilerplate-design-system";
```

If you had previously included the boilerplate-design-system on the old path, you can simply update it to `@0xsequence-demos/boilerplate-design-system
