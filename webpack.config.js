//webpack.config.js
// 1.import Node's path module
// 2.Helps Webpack create correct file paths
const path = require("path");
//3.Imports a plugin that creates index.html automatically and injects the bundle.
const HtmlWebpackPlugin = require("html-webpack-plugin");
//4.Exports the Webpack configuration so Webpack can read it.
module.exports = {
    mode: "development", // if you are not adding you will get warning
    entry: "./src/index.js",// starting point of your app 
    // webpack begins bundling from this file.

    output: {
        path: path.resolve(__dirname, "dist"),
        // where to put the final bundled files( like /dist folder)

        filename: "bundle.js",
        //Name of the output file ( the bundle containing all JS)

        clean: true, // clears old builds
        //Automatically deletes old builds inside /dist
    },

    // modules.rules tells webpack how to handle different file types
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //React files ending with .js / .jsx
                exclude: /node_modules/, //Skip the node_modules folder (important for speed)
                use: "babel-loader",// Tells Webpack to use Babel to convert .JSX/ES6 -> normal JavaScript

            },
            {
                test: /\.css$/, // CSS files
                use: ["style-loader", "css-loader"]
                // css-loader -> understands CSS imports
                // style-loader -> injects CSS into the browser <style> tag

            },
        ],
    },
    // This plugins generates a final index.html and injects bundle.js automatically.
    // Uses your HTML template
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        })
    ],
    // Lets you import files without writinf the extension.
    // import App from "./App"; instead of "./App.jsx"
    resolve: {
        extensions: [".js", ".jsx"],
    },
    // Runs development server at localhost:3000
    // automatically opens the browser when you run npm run dev.
    devServer: {
        port: 3000,
        open: true
    },
};