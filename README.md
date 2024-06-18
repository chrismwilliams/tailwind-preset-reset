# Tailwind Preset Reset

## About

This is a Tailwind CSS preset that removes **a lot** of Tailwind's core plugins, inc. preflight.

## Installation

```bash
# pnpm
pnpm dlx jsr add @chriswilliams/tailwind-preset-reset

#npm
npx jsr add @chriswilliams/tailwind-preset-reset
```

## Usage

```js
// tailwind.config.js
module.exports = {
  presets: [require("@chriswilliams/tailwind-preset-reset")],
};
```

## Core plugins removed

```js
corePlugins: {
  preflight: false,
  borderColor: false,
  borderOpacity: false,
  borderSpacing: false,
  boxShadow: false,
  display: false,
  filter: false,
  fontVariantNumeric: false,
  backdropFilter: false,
  ringWidth: false,
  ringColor: false,
  ringOffsetWidth: false,
  ringOffsetColor: false,
  textOpacity: false,
  transform: false,
  touchAction: false,
  scrollSnapType: false,
}
```
