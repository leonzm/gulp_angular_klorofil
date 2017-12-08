# Gulp + AngularJs 示例

## 模版
1. [Klorofil](http://www.cssmoban.com/cssthemes/6700.shtml)
2. [Gulp 使用手册](http://www.jianshu.com/p/ac03b3dac85b)

## 构建
1. ```npm install```
2. ```bower install```

## 开发
### 添加组件
1. ```bower.json```中添加依赖
2. ```bower install```

> 注意，index.html不需要添加该组件的依赖，会自动添加

### 新模块开发流程
1. ```src/app```下新建新模版文件夹```xxx```
2. ```src/app/xxx/```下添加```xxx.html```
3. ```src/app/xxx/```下添加```xxx.controller.js```
4. ```src/app/xxx/```下添加```xxx.controller.spec.js```（控制器的测试文件）
5. ```src/app/index.route.js```中添加```xxx.html```的路由

> 注意，index.html不需要添加该组件的依赖，会自动添加

### 控制器中使用 jQuery
1. 使用```angular.element```代替```$```，否则会报错，如：
```
angular.element('#btnShowSidebar').click();
```

### 注意
1. 理论上```index.html```不需要添加第三方组件的依赖，会自动添加
2. 有些不规范的第三方依赖，无法自动添加依赖到```index.html```，需要手动添加依赖，注意要自动注入注释的外部，[参考](http://www.jianshu.com/p/ac03b3dac85b)
