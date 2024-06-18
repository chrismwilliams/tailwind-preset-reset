import type { Config } from "tailwindcss";

/**
 * @see https://github.com/chrismwilliams/tailwind-preset-reset/blob/main/README.md for usage
 */
const basePreset: Config = {
  content: [],
  corePlugins: {
    // Disables Tailwind's reset
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
  },
};

export default basePreset;