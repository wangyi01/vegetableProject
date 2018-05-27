const webpack=require('webpack');
const path=require('path');
module.exports={
  entry:'./www/js/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].js'
  },
  resolve:{
    extensions:['.js','.json']
  },
  devtool:'inline-source-map',
  //webpack-dev-server(自动刷新及热更新)
  devServer:{
    //在端口号为222建立本地服务,
    contentBase:'./www',
    /**首先devServer的publicPath路径是指向内存生产的路径，不在物理硬盘上，所以我的index.html里面引用的js路径，应该相对于publicPath地址。
    注意：publicPath地址默认不写会读取output的publicPath路径，publicPath总是以‘/’开头。**/
    // publicPath:'./dist',
    port:2222,
    open:true,
    hot:true,
    host:'localhost',
    // host:'192.168.1.108',
    historyApiFallback:true,
    inline:true,
    // progress:true,
    proxy:{},
    headers:{}
  },
}