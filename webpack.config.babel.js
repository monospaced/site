import CopyWebpackPlugin from "copy-webpack-plugin";
import fs from "fs";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import path from "path";
import reactRouterToArray from "react-router-to-array";
import emoji from "remark-emoji";
import StaticSiteGeneratorPlugin from "static-site-generator-webpack-plugin";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";

class CleanBuildDirectoryPlugin {
  apply(compiler) {
    const cleanBuildDirectory = () => {
      fs.rmSync(path.resolve(__dirname, "build"), {
        force: true,
        recursive: true,
      });
    };

    compiler.hooks.beforeRun.tap(
      "CleanBuildDirectoryPlugin",
      cleanBuildDirectory,
    );
    compiler.hooks.watchRun.tap(
      "CleanBuildDirectoryPlugin",
      cleanBuildDirectory,
    );
  }
}

module.exports = () => {
  // Prevent webpack from trying to process files before loaders are configured
  require.extensions[".css"] = () => {};
  require.extensions[".mdx"] = () => {};

  // Workaround for legacy SSL removal in Node 17+
  const crypto = require("crypto");
  const cryptoOrigCreateHash = crypto.createHash;
  crypto.createHash = algorithm =>
    cryptoOrigCreateHash(algorithm === "md4" ? "sha256" : algorithm);

  const routes = reactRouterToArray(require("./src/v1/routes").default);

  const config = {
    devServer: { inline: false, stats: "minimal" },
    entry: "./src/v1/index.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: "css-loader", options: { importLoaders: 1 } },
            "postcss-loader",
          ],
        },
        {
          test: /\.(ico|png|svg|webmanifest|xml)$/,
          include: [path.resolve(__dirname, "src/v1/assets")],
          loader: "file-loader",
          options: { name: "v1/[name].[ext]" },
        },
        {
          test: /\.(jpg|woff|woff2)$/,
          loader: "file-loader",
          options: { name: "v1/assets/[name].[ext]" },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /.mdx?$/,
          use: [
            "babel-loader",
            {
              loader: "@mdx-js/loader",
              options: { remarkPlugins: [emoji] },
            },
          ],
        },
        {
          test: /\.png$/,
          include: [
            path.resolve(__dirname, "src/v1/@monospaced/modern/assets/images"),
          ],
          loader: "file-loader",
          options: { name: "v1/assets/[name].[ext]" },
        },
      ],
    },
    optimization: {
      minimizer: [
        new OptimizeCSSAssetsPlugin(),
        new UglifyJsPlugin({ cache: true, parallel: true }),
      ],
    },
    output: {
      filename: "v1/bundle.js",
      globalObject: "this",
      libraryTarget: "umd",
      path: `${__dirname}/build`,
      publicPath: "/",
    },
    plugins: [
      new CleanBuildDirectoryPlugin(),
      new CopyWebpackPlugin([
        {
          context: path.resolve(__dirname, "src"),
          from: "index.html",
        },
        {
          context: path.resolve(__dirname, "src"),
          from: "404.html",
        },
        {
          context: path.resolve(__dirname, "src"),
          from: "styles.css",
        },
        {
          context: path.resolve(__dirname, "src"),
          from: "script.js",
        },
      ]),
      new MiniCssExtractPlugin({ filename: "v1/styles.css" }),
      new StaticSiteGeneratorPlugin("v1/bundle.js", routes),
    ],
    stats: "minimal",
  };

  return config;
};
