### 问题
1. 如何用原生js写双向数据绑定
	1. 手动绑定
	2. 数据劫持 
    3. 脏检查机制
	https://blog.csdn.net/liaodehong/article/details/53764011
2. vue数据如何驱动视图更新，视图如何驱动数据更新

3. 什么情况下数据改变了，视图没有更新 
	1. 数据变动不是响应性质的，vue监听不到变动，可以采用Vue.$set
		1. 数组用索引设置项
		2. 直接修改数组长度
		3. vue不能检测对象属性的的添加和删除 Vue.set(object, key, value)
	https://blog.csdn.net/lian_bingbing/article/details/98212125
4. vue指令放置顺序，如何自定义指令

5. 页面刷新，vuex数据丢失，如何防止丢失，缓存数据的时机是什么
	1. vuex-along
	2. 缓存Storage
6. 前端四种常用环境(开发、测试、体验、生产)的域名如何配置？

7. vuex实现状态管理的底层原理是什么

8. 如何一键自动引入依赖的全部js文件，或者说路由直接跳转到相应的页面

9. webpack热更新原理是什么

10. 前端性能优化的手段有哪些

11. webpack如何实现分包，如何实现拆包

12. 如何合并前端请求

    > 同时发送多个请求，再将多个请求的结果进行
    > **请求耗时 = 最慢的那个请求时间**
    > js使用事件系统进行回调，单线程，事件系统是异步的，不会阻塞主线程，当事件被触发时，主线程才会唤醒事件系统进行回调
    > <https://blog.csdn.net/weixin_33913377/article/details/93736323>
    > <https://www.jianshu.com/p/9a3f0e84c2b0>

13. 两个非同域的页面之间如何传值

    > 页面之间的跨域参数传递
    >
    > <https://www.jianshu.com/p/557d51253698>

14. 如何实际减少重绘和回流

15. js.ddl和dom.ddl 浏览器底层实现原理 信息孤岛

16. vue生命周中只执行一次的钩子有哪些

    > 注意：mounted在整个实例生命内只执行一次 

17. vue的优势在哪里

18. jquery封装插件的步骤

19. vue封装组件的步骤

20. 一般什么情况下使用vuex

21. ES6新增的API的应用场景有哪些，比如Proxy对象
	1. ES6之Proxy 的巧用
		https://www.jianshu.com/p/a831f76e5e71
	2. ES6新增的API
        > 数组： 
        1. 转化 from/of
        2. 查找具体值 find
        3. 填充 fill
        4. 遍历 for...of + entries/keys/values(返回迭代器对象，for...of遍历)
        5. 包含 includes
        6. 打平 flat
        > 函数：
        1. 剩余参数
        2. name属性
        3. 箭头函数
        > 对象：
        1. 属性的简洁表示法
        2. 属性名表达式[Sybol()]
        3. 方法的 name 属性
        4. 属性的遍历
            1. for...in
            2. Object.keys(obj)
            3. Object.getOwnPropertyNames(obj)
            4. Object.getOwnPropertySymbols(obj)
            5. Reflect.ownKeys(obj)
        5. 对象的扩展运算符
        6. *新增方法*
            1. Object.keys()，Object.values()，Object.entries()
            2. Object.fromEntries()
            3. Object.getOwnPropertyDescriptors()
                1. 数据属性
                2. 访问器属性
            4. Object.assign()
            5. Object.is()
            6. __proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()
        7. class语法和继承
        8. Module加载实现
		
	
22. js异步编程的方法有哪些
	1. 回调函数
	2. 事件监听
	3. 发布/订阅
	4. Promise 对象
	5. Generator 函数

23. <<用户体验的要素>>
    1. 可用性
    2. 易用性
    3. 美观
       

24. 搜索： npm dadge

    1. git reset --hard 提交的版本号 **小心会删磁盘**

          2. parcel 打包
             3. mochajs.org/#running-in-the-brower
             4. karma自动打开浏览器 karma juint report beauty