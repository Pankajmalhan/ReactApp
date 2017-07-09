var path=require("path");

var srcPath=path.resolve(__dirname,"src");
var distPath=path.resolve(__dirname,"dist");

var config={
    entry: srcPath+"/app/app.js",
    output:{
        path:srcPath+"/app",
        filename:"bundle.js",
        publicPath:"/app/"
    },
    devServer: {
      inline: true,
      port: 4600
   },
   resolve: {
    extensions: [ '.js', '.jsx']
  },
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                exclude: /node_modules/,
                include: /src/,
                loader:"babel-loader",
                query: {
               presets: ['es2015','stage-2','react']
            }
            
            }
        ]
    }
}

module.exports=config;