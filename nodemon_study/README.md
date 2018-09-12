#### nodemon用来监视node.js应用程序中的任何更改并自动重启服务,非常适合用在开发环境中。

#### nodemon将监视启动目录中的文件，如果有任何文件更改，nodemon将自动重新启动node应用程序。

#### nodemon不需要对代码或开发方式进行任何更改。 nodemon只是简单的包装你的node应用程序，并监控任何已经改变的文件。nodemon只是node的替换包，只是在运行脚本时将其替换命令行上的node。


##### nodemon命令和node命令一样
##### nodemon 文件名 【启用该文件】
##### nodemon 文件名 localhost 8080 【给应用指定端口号】
##### nodemon --debug 文件名 80 【运行debug模式】

##### nodemon配置nodemon.json放在启动文件根目录下面     
##### nodemon处于运行的时候，你要重启服务可以按回车 输入rs手动重启 


##### nodemon的配置文件也可以写在package.json中
{
  "name": "nodemon",
  "homepage": "http://nodemon.io",
  "...": "... other standard package.json values",
  "nodemonConfig": {
    "ignore": ["test/*", "docs/*"],
    "delay": "2500"
  }
}




restartable-设置重启模式 
ignore-设置忽略文件 
verbose-设置日志输出模式，true 详细模式 
execMap-设置运行服务的后缀名与对应的命令 
{ 
“js”: “node –harmony” 
} 
表示使用 nodemon 代替 node 
watch-监听哪些文件的变化，当变化的时候自动重启 
ext-监控指定的后缀文件名


模块方式：查看例子index.js文件










