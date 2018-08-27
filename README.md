# helloworld

> hello world

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report 
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
---
log at the begin
```
localhost:vue2.0-video@20180819 aryan$ vue init webpack helloworld/

? Target directory exists. Continue? Yes
? Project name helloworld
? Project description hello world
? Author aryan86_2014@163.com
? Vue build standalone
? Install vue-router? No
? Use ESLint to lint your code? No
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) npm

   vue-cli · Generated "helloworld/".
added 1199 packages in 59.951s

# Project initialization finished!
# ========================

To get started:

  cd helloworld/
  npm run dev

Documentation can be found at https://vuejs-templates.github.io/webpack
```
---
finished git init and vue webpack init @20180819
# Then,let's go to start!

目录树结构：
```
helloworld
├── README.md
├── build
│   ├── build.js                    //生产构建脚本；打包时，要引入的配置信息
│   ├── check-versions.js
│   ├── logo.png
│   ├── utils.js                    //vue开发环境的wepack相关配置文件
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js        //wabpack基础配置
│   ├── webpack.dev.conf.js         //在webpack.base.conf的基础上,增加了开发环境的配置
│   └── webpack.prod.conf.js        //webpack生产环境的核心配置文件
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── index.html
├── node_modules
├── package-lock.json
├── package.json
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   └── HelloWorld.vue
│   └── main.js
└── static
```
---
### 参考文档：

[1.vue基于webpack 模板的目录结构以及目录作用的解析](https://blog.csdn.net/qq_34645412/article/details/78818245)

[2.入门 Webpack，看这篇就够了](https://segmentfault.com/a/1190000006178770)

```
1. build
这个是我们最终发布的时候会把代码发布在这里

1.1 build.js
    生产环境构建脚本，也就是打包的时候需要的一些包的引入配置信息
1.2 check-versions.js  
    用来检测node和npm版本的
1.3 logo.png  就是项目的logo
1.4 utils.js  
    此配置文件是vue开发环境的wepack相关配置文件，主要用来处理css-loader和vue-style-loader
1.5 vue-loader.conf.js
    处理.vue文件的配置文件

1.6 webpack.base.conf.js
    wabpack基础配置
1.7 webpack.dev.conf.js
    webpack.dev.conf.js 在webpack.base.conf的基础上,增加完善了开发环境下面的配置，
主要包括下面几件事情：
    a.将webpack的热重载客户端代码添加到每个entry对应的应用
    b.合并基础的webpack配置
    c.配置样式文件的处理规则，styleLoaders
    d.配置Source Maps
    e.配置webpack插件
1.8 webpack.prod.conf.js        webpack生产环境的核心配置文件

2.config
2.1 dev.env.js
2.2 index.js
2.3 prod.env.js
    作用很明显，就是导出一个对象，NODE_ENV是一个环境变量，指定production环境
3.node_modules
    用来存放项目依赖的各种包
4.src
    用来存放项目代码

5. static
    静态资源目录 如图片、字体等
6. babelrc
    babelrc文件是babel的配置文件
 主要适用于编译es6转义为es5
    一般用2个插件es2015,stage-2,transfer-runtime
    "comments": false,表示不生成注释，反之就是生成注释

7.editorconfig 编辑代码风格

8.eslintignore  忽略ESLint语法检查的文件目录配置
9.eslintrc.js  eslint的配置文件

10.gitignore
    表示这里面的内容再提交到git仓库的时候忽略

11.postcssrc.js
    应该是你用到的css的前or后处理器的配置吧

12.data.json
    在没用后台数据的时候模拟的数据集合

13.index.html
    首页

14.package.json
    整个项目的一个启动入口和依赖包安装指南（npm install会安装的包基本都在这里配了）

15.package_lock.json
    对于npm修改node_modules树或package.json的任何操作，将自动生成package-lock.json。 
它描述了生成的确切树，以便后续安装能够生成相同的树，而不管中间依赖性更新如何。
    该文件旨在被提交到源存储库，并提供各种用途：描述依赖关系树的单一表示形式，
以确保队友，部署和持续集成确保安装完全相同的依赖关系。
    就比如说你安装了  node1.0版本，你队友安装的时候自动会安装1.0版本的，不会再装一个2.0版本的最后提交代码产生冲突
```
---

### Update Log:
1. edit makedown file.
2. Add a component: Hi.vue
    