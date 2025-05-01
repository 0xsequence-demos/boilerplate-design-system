# Boilerplate Design System

A reusable design system built with Tailwind CSS and React, available in two versions: legacy support for React 18 and an updated version for React 19.

## Installation

### 1. Create `.npmrc`

To install the design system package, create a `.npmrc` file in your project root and add the following (replace with actual token or URL as needed):

``` plain
@0xsequence-demos:registry=https://npm.pkg.github.com/
```

> [!WARNING]
> You'll need to commit `.npmrc` to Github so anyone cloning the repo has access to the boilerplate-design-system package. Do not include any secrets or private data (ie Github tokens) in this file.

### 2. Install the Package

There are two available packages:

### React 19

```bash
pnpm add @0xsequence-demos/boilerplate-design-system@0.1.0-react19.0
```

### React 18

```bash
pnpm add @0xsequence-demos/boilerplate-design-system@v0.1.0-react18.1
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
