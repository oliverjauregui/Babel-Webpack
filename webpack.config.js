const path = require('path');

module.exports={
	entry: './src/js/app.js',

	output:{
		path: path.join(__dirname, 'dist'),
		filename:'bundle.js'
	},

	module: {
    loaders : [

      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude:/node_modules/,
        query: {
          presets:['es2015', 'react']
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          },
        ],
 
      },


    ]
  }
}