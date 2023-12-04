import type { StorybookConfig } from "@storybook/nextjs"
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin"

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // @see https://github.com/storybookjs/storybook/issues/3916#issuecomment-871283551
  // @see https://www.kosotudev.com/articles/storybook-webpacker
  webpackFinal(baseConfig) {
    baseConfig.resolve!.alias = {
      ...baseConfig.resolve!.alias,
    }
    baseConfig.resolve!.plugins = [
      ...(baseConfig.resolve!.plugins || []),
      new TsconfigPathsPlugin(),
    ]
    return baseConfig
  },
}
export default config
