###事件
######beforeExit：事件循环数组为空，并且没有额外的工作被添加进来，会触发
######disconnect:Node.js 进程是由 IPC 通道的方式创建的（详见子进程和集群文档），当 IPC 通道关闭时，会触发disconnect事件
######exit:进程退出时候触发
######message:如果 Node.js 进程是由 IPC 通道的方式创建的（详见子进程和集群文档），当子进程收到父进程发送的消息时(消息通过 childprocess.send() 发送），会触发 'message' 事件
######rejectionHandled:如果有 Promise 被 rejected，并且此 Promise在 Node.js 事件循环的下次轮询及之后期间，被绑定了一个错误处理器（例如使用 promise.catch()），会触发 'rejectionHandled' 事件
######uncaughtException:如果 Javascript 未捕获的异常，沿着代码调用路径反向传递回事件循环，会触发 'uncaughtException' 事件。 Node.js 默认情况下会将这些异常堆栈打印到 stderr 然后进程退出。 为 'uncaughtException' 事件增加监听器会覆盖上述默认行为。
######unhandledRejection:如果在事件循环的一次轮询中，一个 Promise 被 rejected，并且此 Promise 没有绑定错误处理器，'unhandledRejection 事件会被触发。
######warning:任何时候Node.js发出进程告警，都会触发'warning'事件。

###方法属性
######process.abort()：会使Node.js进程立即结束，并生成一个core文件。
######process.arch:返回一个表示操作系统CPU架构的字符串 eg:x64
######process.argv:返回一个数组，这个数组包含了启动Node.js进程时的命令行参数。第一个元素为process.execPath。如果需要获取argv[0]的值请参见  process.argv0。第二个元素为当前执行的JavaScript文件路径。剩余的元素为其他命令行参数。
######process.argv0:保存Node.js启动时传入的argv[0]参数值的一份只读副本。
######process.channel:如果Node.js进程是由IPC channel(请看 Child Process 文档) 方式创建的，process.channel属性保存IPC channel的引用。 如果IPC channel不存在，此属性值为undefined。
######process.chdir()方法:变更Node.js进程的当前工作目录，如果变更目录失败会抛出异常(例如，如果指定的目录不存在)。
######process.config 属性返回一个Javascript对象。此对象描述了用于编译当前Node.js执行程序时涉及的配置项信息。 这与执行./configure脚本生成的config.gypi文件结果是一样的。
######process.connected如果Node.js进程是由IPC channel方式创建的(请看Child Process子进程 和 Cluster集群 文档)， 只要IPC channel保持连接，process.connected属性就会返回true。 process.disconnect()被调用后，此属性会返回false。
######process.cpuUsage()方法返回包含当前进程的用户CPU时间和系统CPU时间的对象。此对象包含user和system属性，属性值的单位都是微秒(百万分之一秒)。 user和system属性值分别计算了执行用户程序和系统程序的时间，如果此进程在执行任务时是基于多核CPU，值可能比实际花费的时间要大。
######process cwd() 方法返回 Node.js 进程当前工作的目录。
######process.debugPort返回node.js debug占用端口
######process.env属性返回一个包含用户环境信息的对象
######process.execArgv 属性返回当Node.js进程被启动时，Node.js特定的命令行选项。 这些选项在process.argv属性返回的数组中不会出现，并且这些选项中不会包括Node.js的可执行脚本名称或者任何在脚本名称后面出现的选项。 这些选项在创建子进程时是有用的，因为他们包含了与父进程一样的执行环境信息。
######process.execPath 属性，返回启动Node.js进程的可执行文件所在的绝对路径。
######process.exit()方法以结束状态码code指示Node.js同步终止进程。 如果code未提供，此exit方法要么使用'success' 状态码 0，要么使用process.exitCode属性值，前提是此属性已被设置。 Node.js在所有'exit'事件监听器都被调用了以后，才会终止进程。
######当进程正常结束，或通过process.exit()结束但未传递参数时，此数值标识进程结束的状态码。
######process.pid返回进程pid。
######process.version 当前node的版本号
######process.installPrefix
######process.mainModule属性提供了一种获取require.main的替代方式。 区别在于，若主模块在运行时中发生改变， require.main可能仍然指向变化之前所依赖的模块 一般来说，假定require.main和process.mainModule引用相同的模块是安全的。就像require.main一样，如果没有入口脚本，process.mainModule的值是undefined。
######process.memoryUsage()方法返回Node.js进程的内存使用情况的对象，该对象每个属性值的单位为字节。
######process.nextTick()方法将 callback 添加到"next tick 队列"。 一旦当前事件轮询队列的任务全部完成，在next tick队列中的所有callbacks会被依次调用。这种方式不是setTimeout(fn, 0)的别名。它更加有效率。事件轮询随后的ticks 调用，会在任何I/O事件（包括定时器）之前运行。
