var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: "./src/index.js",
    devtool: "source-map",
	output: {
		path: __dirname,
		filename: "./dist/react-dropzone.js",
		libraryTarget: "umd",
		library: "Dropzone"
	},
    module: {
        loaders: [
            {
                include: [
                    path.resolve(__dirname,"src"),
                ],
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react','stage-0'],
                    plugins: ['add-module-exports']
                }
            }
        ]  
    },
    resolve: {
        // Can require('file') instead of require('file.js') etc.
        extensions: ['','.js','.json']
    },
	externals: {
		"react": "React"
	},
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // does this actually do anything?
                warnings: false
            }
        }),
    ]
};
