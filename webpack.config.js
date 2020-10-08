const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ENTRY_FILE = path.resolve(__dirname, "src", "assets", "js", "index.js");
const OUTPUT_DIR = path.resolve(__dirname, "src", "static");
const MODE = process.env.WEBPACK_ENV;

module.exports = {
  entry: ["@babel/polyfill", ENTRY_FILE],
  output: {
    filename: "main.js",
    path: OUTPUT_DIR,
  },
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      overrideBrowserslist: ["cover 99.5%"],
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
};
