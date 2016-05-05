/**
 * @author: @AngularClass
 */

const webpack = require('webpack');
const helpers = require('./helpers');

/*
 * Webpack Plugins
 */
<<<<<<< HEAD
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
=======
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
>>>>>>> upstream/master

/*
 * Webpack Constants
 */
const METADATA = {
<<<<<<< HEAD
    title: 'Angular2 Webpack Starter by @gdi2990 from @AngularClass',
=======
    title: 'Angular2 Webpack Starter by @gdi2290 from @AngularClass',
>>>>>>> upstream/master
    baseUrl: '/'
};

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = {

<<<<<<< HEAD
    // Static metadata for index.html
    //
    // See: (custom attribute)
    metadata: METADATA,

    // Cache generated modules and chunks to improve performance for multiple incremental builds.
    // This is enabled by default in watch mode.
    // You can pass false to disable it.
    //
    // See: http://webpack.github.io/docs/configuration.html#cache
    // cache: false,

    // The entry point for the bundle
    // Our Angular.js app
    //
    // See: http://webpack.github.io/docs/configuration.html#entry
    entry: {

        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'main': './src/main.browser.ts',

    },

    // Options affecting the resolving of modules.
    //
    // See: http://webpack.github.io/docs/configuration.html#resolve
    resolve: {

        // An array of extensions that should be used to resolve modules.
        //
        // See: http://webpack.github.io/docs/configuration.html#resolve-extensions
=======
    /*
     * Static metadata for index.html
     *
     * See: (custom attribute)
     */
    metadata: METADATA,

    /*
     * Cache generated modules and chunks to improve performance for multiple incremental builds.
     * This is enabled by default in watch mode.
     * You can pass false to disable it.
     *
     * See: http://webpack.github.io/docs/configuration.html#cache
     * cache: false,
     *
     * The entry point for the bundle
     * Our Angular.js app
     *
     * See: http://webpack.github.io/docs/configuration.html#entry
     */
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'main': './src/main.browser.ts'
    },

    /*
     * Options affecting the resolving of modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#resolve
     */
    resolve: {

        /*
         * An array of extensions that should be used to resolve modules.
         *
         * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
         */
>>>>>>> upstream/master
        extensions: ['', '.ts', '.js'],

        // Make sure root is src
        root: helpers.root('src'),

        // remove other default values
        modulesDirectories: ['node_modules'],
<<<<<<< HEAD

    },

    // Options affecting the normal modules.
    //
    // See: http://webpack.github.io/docs/configuration.html#module
    module: {

        // An array of applied pre and post loaders.
        //
        // See: http://webpack.github.io/docs/configuration.html#module-preloaders-module-postloaders
        preLoaders: [

            // Tslint loader support for *.ts files
            //
            // See: https://github.com/wbuchwalter/tslint-loader
            // { test: /\.ts$/, loader: 'tslint-loader', exclude: [ helpers.root('node_modules') ] },

            // Source map loader support for *.js files
            // Extracts SourceMaps for source files that as added as sourceMappingURL comment.
            //
            // See: https://github.com/webpack/source-map-loader
=======
    },

    /*
     * Options affecting the normal modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#module
     */
    module: {

        /*
         * An array of applied pre and post loaders.
         *
         * See: http://webpack.github.io/docs/configuration.html#module-preloaders-module-postloaders
         */
        preLoaders: [
            /*
             * Source map loader support for *.js files
             * Extracts SourceMaps for source files that as added as sourceMappingURL comment.
             *
             * See: https://github.com/webpack/source-map-loader
             */
>>>>>>> upstream/master
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    // these packages have problems with their sourcemaps
                    helpers.root('node_modules/rxjs'),
<<<<<<< HEAD
                    helpers.root('node_modules/@angular2-material')
=======
                    helpers.root('node_modules/@angular2-material'),
                    helpers.root('node_modules/@angular'),
>>>>>>> upstream/master
                ]
            }

        ],

<<<<<<< HEAD
        // An array of automatically applied loaders.
        //
        // IMPORTANT: The loaders here are resolved relative to the resource which they are applied to.
        // This means they are not resolved relative to the configuration file.
        //
        // See: http://webpack.github.io/docs/configuration.html#module-loaders
        loaders: [

            // Typescript loader support for .ts and Angular 2 async routes via .async.ts
            //
            // See: https://github.com/s-panferov/awesome-typescript-loader
=======
        /*
         * An array of automatically applied loaders.
         *
         * IMPORTANT: The loaders here are resolved relative to the resource which they are applied to.
         * This means they are not resolved relative to the configuration file.
         *
         * See: http://webpack.github.io/docs/configuration.html#module-loaders
         */
        loaders: [

            /*
             * Typescript loader support for .ts and Angular 2 async routes via .async.ts
             *
             * See: https://github.com/s-panferov/awesome-typescript-loader
             */
>>>>>>> upstream/master
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: [/\.(spec|e2e)\.ts$/]
            },

<<<<<<< HEAD
            // Json loader support for *.json files.
            //
            // See: https://github.com/webpack/json-loader
=======
            /*
             * Json loader support for *.json files.
             *
             * See: https://github.com/webpack/json-loader
             */
>>>>>>> upstream/master
            {
                test: /\.json$/,
                loader: 'json-loader'
            },

<<<<<<< HEAD
            // Raw loader support for *.css files
            // Returns file content as string
            //
            // See: https://github.com/webpack/raw-loader
            {
                test: /\.css$/,
                loaders: [
                    'to-string-loader',
                    'raw-loader',
                    'css-loader',
                ]
            },

            {
                test: /\.scss$/,
                loaders: [
                    'to-string-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },

            // Raw loader support for *.html
            // Returns file content as string
            //
            // See: https://github.com/webpack/raw-loader
            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: [helpers.root('src/index.html')],
            },

            {
                test: /\.(jpeg|jpg|png|gif)$/,
                loader: 'file-loader',
            },

        ]
=======
            /*
             * See: https://github.com/webpack/raw-loader
             */
            {
                test: /\.css$/,
                loaders: [
                    'to-string',
                    'css',
                ]
            },

            /*
             * See: https://github.com/webpack/raw-loader
             */
            {
                test: /\.scss$/,
                loaders: [
                    'to-string',
                    'css',
                    'sass',
                ]
            },

            /* Raw loader support for *.html
             * Returns file content as string
             *
             * See: https://github.com/webpack/raw-loader
             */
            {
                test: /\.html$/,
                loader: 'html',
                exclude: [helpers.root('src/index.html')]
            },

            /* Raw loader support for *.html
             * Returns file content as string
             *
             * See: https://github.com/webpack/raw-loader
             */
            {
                test: /\.(jpg|jpeg|png|gif|svg)/,
                loader: 'file',
            },

        ]

    },

    /*
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: [

        /*
         * Plugin: ForkCheckerPlugin
         * Description: Do type checking in a separate process, so webpack don't need to wait.
         *
         * See: https://github.com/s-panferov/awesome-typescript-loader#forkchecker-boolean-defaultfalse
         */
        new ForkCheckerPlugin(),

        /*
         * Plugin: OccurenceOrderPlugin
         * Description: Varies the distribution of the ids to get the smallest id length
         * for often used ids.
         *
         * See: https://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin
         * See: https://github.com/webpack/docs/wiki/optimization#minimize
         */
        new webpack.optimize.OccurenceOrderPlugin(true),

        /*
         * Plugin: CommonsChunkPlugin
         * Description: Shares common code between the pages.
         * It identifies common modules and put them into a commons chunk.
         *
         * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
         * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
         */
        new webpack.optimize.CommonsChunkPlugin({
            name: helpers.reverse(['polyfills', 'vendor'])
        }),

        /*
         * Plugin: CopyWebpackPlugin
         * Description: Copy files and directories in webpack.
         *
         * Copies project static assets.
         *
         * See: https://www.npmjs.com/package/copy-webpack-plugin
         */
        /*new CopyWebpackPlugin([{
            from: 'src/assets',
            to: 'assets'
        }]),*/

        /*
         * Plugin: HtmlWebpackPlugin
         * Description: Simplifies creation of HTML files to serve your webpack bundles.
         * This is especially useful for webpack bundles that include a hash in the filename
         * which changes every compilation.
         *
         * See: https://github.com/ampedandwired/html-webpack-plugin
         */
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: helpers.packageSort(['polyfills', 'vendor', 'main'])
        })
>>>>>>> upstream/master

    },

<<<<<<< HEAD
    // Add additional plugins to the compiler.
    //
    // See: http://webpack.github.io/docs/configuration.html#plugins
    plugins: [

        // Plugin: ForkCheckerPlugin
        // Description: Do type checking in a separate process, so webpack don't need to wait.
        //
        // See: https://github.com/s-panferov/awesome-typescript-loader#forkchecker-boolean-defaultfalse
        new ForkCheckerPlugin(),

        // Plugin: OccurenceOrderPlugin
        // Description: Varies the distribution of the ids to get the smallest id length
        // for often used ids.
        //
        // See: https://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin
        // See: https://github.com/webpack/docs/wiki/optimization#minimize
        new webpack.optimize.OccurenceOrderPlugin(true),

        // Plugin: CommonsChunkPlugin
        // Description: Shares common code between the pages.
        // It identifies common modules and put them into a commons chunk.
        //
        // See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
        // See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
        new webpack.optimize.CommonsChunkPlugin({
            name: helpers.reverse(['polyfills', 'vendor', 'main']),
            minChunks: Infinity
        }),

        // Plugin: HtmlWebpackPlugin
        // Description: Simplifies creation of HTML files to serve your webpack bundles.
        // This is especially useful for webpack bundles that include a hash in the filename
        // which changes every compilation.
        //
        // See: https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: helpers.packageSort(['polyfills', 'vendor', 'main'])
        })

    ],

    // Include polyfills or mocks for various node stuff
    // Description: Node configuration
    //
    // See: https://webpack.github.io/docs/configuration.html#node
=======
    /*
     * Include polyfills or mocks for various node stuff
     * Description: Node configuration
     *
     * See: https://webpack.github.io/docs/configuration.html#node
     */
>>>>>>> upstream/master
    node: {
        global: 'window',
        crypto: 'empty',
        module: false,
        clearImmediate: false,
        setImmediate: false
<<<<<<< HEAD
    },
=======
    }

>>>>>>> upstream/master
};
