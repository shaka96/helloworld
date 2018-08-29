

### store cateloge tree
可以使用全局actions, getter和mutations
聊天module的所有actions， getters和mutations将通过聊天目录内的索引导入。
该module将被导入到全局store。应该在模块内设置命名空间选项，以便你拥有适当的命名空间。
这是在store /index.js文件中完成的：
[1.](https://www.imooc.com/article/35364)

>在这个store里面，我们有两个module：chat和product。 
>两个模块都包含actions，getters和mutations，并被导入到module的主module文件index.js中，然后再次导出。 
>store最后，导出的数据可以被store module使用。
(./storeModules.png)

"组件应该只呈现数据，不处理数据。"