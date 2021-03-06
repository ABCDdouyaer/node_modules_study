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




在开发环境下，往往需要一个工具来自动重启项目工程，之前接触过 python 的 supervisor，现在写 node 的时候发现 supervisior 在很多地方都有他的身影，node 也有一个 npm 模块 [supervisior](https://github.com/petruisfan/node-supervisor) 也是用来监控进程的，不过除了 supervisior 外，还有很多其他的工具，从 github 的评分上看，比较热门的有 forever，nodemon，node-dev，具体这些工具的区别可以参考这篇文章  [Comparison: Tools to Automate Restarting Node.js Server After Code Changes](https://strongloop.com/strongblog/comparison-tools-to-automate-restarting-node-js-server-after-code-changes-forever-nodemon-nodesupervisor-nodedev/) ，个人觉得在开发环境还是用 nodemon，因为配置比较方便，文档也很清晰。所以这里先主要讲 nodemon。

nodemon 的安装：

npm install -g nodemon 

安装完 nodemon 后，就可以用 nodemon 来代替 node 来启动应用：

nodemon \[your node app\]（相当于 node \[your node app\]） 

如果没有在应用中指定端口，可以在命令中指定：

nodemon ./server.js localhost 8080 

可以运行 debug 模式：

nodemon --debug ./server.js 80 

查看帮助，帮助里面有很多选项都是一目了然：

nodemon -h 或者 nodemon -help 

nodemon 比较流行的原因之一就是它的可配置性比较高，下面是官网给出的配置文件  [nodemon.json](https://github.com/remy/nodemon/blob/master/doc/sample-nodemon.md)  的例子，加上我自己了解到的有用的一些配置，开发环境建议可以把每个参数都写上备用，生产环境就把没有必要的参数去掉，有些字段是可以在命令行模式以参数形式给出的，可以通过 -h 查看，下面逐个解释：

 1 {
 2     "restartable": "rs",
 3     "ignore": \[
 4         ".git",
 5         "node\_modules/**/node\_modules"
 6     \],
 7     "verbose": true,
 8     "execMap": {
 9         "": "node"
10         "js": "node --harmony"
11     },
12     "events": {
13         "restart": "osascript -e 'display notification \\"App restarted due to:\\n'$FILENAME'\" with title \\"nodemon\"'"
14     },
15     "watch": \[
16         "test/fixtures/",
17         "test/samples/"
18     \],
19     "env": {
20         "NODE_ENV": "development",
21         "PORT": "3000"
22     },
23     "ext": "js json",
24     "legacy-watch": false
25 }

View Code

<span><span style="font-family: verdana, Arial, Helvetica, sans-serif; line-height: 1.5;"><strong>restartable</strong>：重启的命令，默认是 rs ，可以改成你自己喜欢的字符串。当用 nodemon 启动应用时，可以直接键入 rs 直接重启服务。除了字符串值外，还可以设置 false 值，这个值的意思是当 nodemon 影响了你自己的终端命令时，设置为 false 则不会在 nodemon 运行期间监听 rs 的重启命令。</span></span>

ignore：忽略的文件后缀名或者文件夹，文件路径的书写用相对于 nodemon.json 所在位置的相对路径，下同。nodemon 会默认忽略一些文件，默认忽略的文件有：.git, node\_modules, bower\_components, .sass-cache，如果这些文件想要加入监控，需要重写默认忽略参数字段 ignoreRoot，比如加入："ignoreRoot": \[".git", "bower\_components", ".sass-cache"\]，然后在 watch 中将 node\_modules 文件路径加入监控，那么 node_modules 内的文件也加入了监控了。

verbose：true 表示输出详细启动与重启信息，如下图：

![](http://img2.tuicool.com/fERfuu.png!web)

false 表示不输出这些运行信息，如下图：

![](http://img1.tuicool.com/uEJJZfv.png!web)

execMap：运行服务的后缀名和对应的运行命令，"js": "node --harmony" 表示用 nodemon 代替 node  --harmony 运行 js 后缀文件；"" 指 www 这些没有后缀名的文件；默认的 defaults.js 配置文件会识别一些文件：py: 'python',rb: 'ruby'。

events：这个字段表示 nodemon 运行到某些状态时的一些触发事件，总共有五个状态：

*   start - 子进程（即监控的应用）启动
    
*   crash - 子进程崩溃，不会触发 exit
    
*   exit - 子进程完全退出，不是非正常的崩溃
    
*   restart - 子进程重启
    
*   config:update - nodemon 的 config 文件改变
    

状态后面可以带标准输入输出语句，比如 mac 系统下设置： "start": "echo 'app start'"，那么启动应用时会输出 app start 信息，其他类似命令如 ls，ps 等等标准命令都可以在这里定义。除此之外，也可以写js来监控，github 上有介绍： [events.md](https://github.com/remy/nodemon/blob/master/doc/events.md) ，不过我试过之后没有成功，如果有懂的朋友，记得在评论不吝赐教。^_^

watch：监控的文件夹路径或者文件路径。

env：运行环境 development 是开发环境，production 是生产环境。port 是端口号。

ext：监控指定后缀名的文件，用空格间隔。默认监控的后缀文件：.js, .coffee, .litcoffee, .json。但是对于没有文件后缀的文件，比如 www 文件，我暂时找不到怎么用 nodemon 去监控，就算在 watch 中包含了，nodemon 也会忽略掉。

注：关于监控以及忽略文件修改有个顺序的问题，或者说优先级，首先 nodemon 会先读取 watch 里面需要监控的文件或文件路径，再从文件中选择监控 ext 中指定的后缀名，最后去掉从 ignore 中指定的忽略文件或文件路径。

legacy-watch：nodemon 使用  [Chokidar](https://www.npmjs.com/package/chokidar) 作为底层监控系统，但是如果监控失效，或者提示没有需要监控的文件时，就需要使用轮询模式（polling mode），即设置 legacy-watch 为 true，也可以在命令行中指定：

$ nodemon --legacy-watch 
$ nodemon -L \# 简写 

<span><span style="font-family: verdana, Arial, Helvetica, sans-serif; line-height: 1.5;">下面贴出 nodemon 的默认配置文件&nbsp;</span><a style="font-family: verdana, Arial, Helvetica, sans-serif; line-height: 1.5;" href="https://github.com/remy/nodemon/blob/master/lib/config/defaults.js">default.js</a><span style="font-family: verdana, Arial, Helvetica, sans-serif; line-height: 1.5;">：</span></span>

 1 // default options for config.options
 2 module.exports = {
 3     restartable: 'rs',
 4     colours: true,
 5     execMap: {
 6         py: 'python',
 7         rb: 'ruby',
 8         // more can be added here such as ls: lsc - but please ensure it's cross
 9         // compatible with linux, mac and windows, or make the default.js
10         // dynamically append the `.cmd` for node based utilities
11     },
12     ignoreRoot: \['.git', 'node_modules', 'bower_components', '.sass-cache'\],
13     watch: \['*.*'\],
14     stdin: true,
15     runOnChangeOnly: false,
16     verbose: false,
17     // 'stdout' refers to the default behaviour of a required nodemon's child,
18     // but also includes stderr. If this is false, data is still dispatched via
19     // nodemon.on('stdout/stderr')
20     stdout: true,
21 };

View Code

有几个比较少用到的配置字段：

1） **colous** ：输出信息颜色标示。

2） **runOnChangeOnly** ：true 时运行 nodemon www 项目不会启动，只保持对文件的监控，当监控的文件有修改并保存时才会启动应用，其他没有影响。默认是 false 即一开始就启动应用并监控文件改动。

3） **stdin，stdout** ：这个是关于标准输入输出的设置，上文提到 nodemon.json 文件中的 events 字段可以为状态设置标准输入输出语句，如果这里设置了 false，标准输入输入语句就会实效。

github 上给出了一个 [ faq.js](https://github.com/remy/nodemon/blob/master/faq.md) 解答了一些常见的问题，有的上文已经提到，还有一些比较常见的列举如下：

1）当自己的应用启动服务带的参数和 nodemon 冲突时，可以利用下面的方法来解决冲突：

$ nodemon app.js \-\- -L -opt2 -opt3 

以 \-\- 为分隔，nodemon 不会去读取 -- 后面的参数，而是传给 app.js。

2）当应用因为某些原因奔溃时，nodemon 不会自动重启，会输出以下信息：

\[nodemon\] app crashed - waiting for file changes before starting... 

这个时需要修改文件并保存后 nodemon 才会重启应用，这在开发环境没什么关系，但是如果想把 nodemon 放在线上时，我们往往希望 nodemon 能够自动重启崩溃的应用，这个时候就需要 forever 来辅助了，有一个 [ issue](https://github.com/remy/nodemon/issues/30) 专门讲这个问题。使用 forever 来重启 nodemon 时，在 nodemon 启动时需要加个参数 --exitcrash：

nodemon www --exitcrash 

这样当应用崩溃后，nodemon 会自动中断退出，forever 检测到 nodemon 退出后就会重启 nodemon，nodemon 又会重启应用。其他就是 forever 的配置了，因为这里只讲 nodemon，所以就不涉及 forever，到时候总结 forever 的时候再讲，感兴趣的看 [这里](https://github.com/remy/nodemon/blob/master/faq.md#using-nodemon-with-forever) 。

3）如果想通过 npm start 命令来启动应用同时又想用 nodemon 来监控文件改动，可以修改 npm 的 package.js 文件中的 scripts.start：

1 "scripts": {
2     "start": "nodemon ./bin/www"
3 } 

那么用 npm start 启动后就是执行 nodemon ./bin/www。

参考文档：

[github remy/nodemon](https://github.com/remy/nodemon) .  [README.md](https://github.com/remy/nodemon)

[github remy/nodemon](https://github.com/remy/nodemon) . [faq.md](https://github.com/remy/nodemon/blob/master/faq.md#overriding-the-underlying-default-ignore-rules)

[github remy/nodemon](https://github.com/remy/nodemon) . [events.md](https://github.com/remy/nodemon/blob/master/doc/events.md)

[codeplex](https://www.codeplex.com/) . [nodemon](https://nodemon.codeplex.com/)

[bubkoo](http://bubkoo.com/) .  [在 Express 开发中使用 nodemon](http://bubkoo.com/2014/12/02/use-nodemon-with-node-applications/)






