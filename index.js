module.exports = {
  trailingComma: "none",
  tabWidth: 2,
  useTabs: true,
  semi: true,
  singleQuote: true,
  arrowParens: "always",
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderParsesPlugins: [
    "classProperties",
    "decorators-legacy",
    "typescript"
  ],
  importOrder: ["<THIRD_PARTY_MODULES>", "^@/(.*)$", "^../(.*)", "^./(.*)"],
  plugins: ["@trivago/prettier-plugin-sort-imports"]
}