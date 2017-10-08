module.exports={
	entry: './src/js/app.js',

	output:{
		path:__dirname,
		filename:'dist/bundle.js'
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
      }


    ]
  }
}