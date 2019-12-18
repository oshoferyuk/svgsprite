const path = require('path');

const SvgStorePlugin = require('external-svg-sprite-loader');

module.exports = {
	mode: 'development',
	module: {
    rules: [
      {
        loader: SvgStorePlugin.loader,
        options: {
          name: 'test66666.svg'
        },
        test: /\.svg$/,
      },
    ],
  },
 entry: __dirname + "/app/src/page.js",
 output: {
   path: path.join(__dirname, 'public'),
    publicPath: '/',
 },
 plugins: [
    new SvgStorePlugin({
      sprite: {
        startX: 10,
        startY: 10,
        deltaX: 20,
        deltaY: 20,
        iconHeight: 20,
      },
    }),
  ],
}