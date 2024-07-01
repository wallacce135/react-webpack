import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

let mode = 'development'
if(process.env.NODE_ENV === 'production') {
    mode = "production";
}

const plugins = [
    
    new CopyWebpackPlugin({
        patterns: [{from: "public"}],
    }),

    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    }),

    new HtmlWebpackPlugin({
        meta: {
            charset: "utf-8",
        },
        templateContent: `<div id="root"></div>`,
    })
]

type MyConfiguration = Configuration & { devServer: unknown }


const config: MyConfiguration = {
    mode: mode == 'development' ? 'development' : 'production',
    plugins,
    devServer: {
        hot: true
    },
    entry: "./src/app/index.tsx",
    devtool: 'source-map',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            { 
                test: /\.(html)$/, 
                use: ['html-loader'] 
            },
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"]
    },

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ]
    }

}

export default config