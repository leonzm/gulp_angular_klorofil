# Gulp + AngularJs 示例

## 模版
1. [Klorofil](http://www.cssmoban.com/cssthemes/6700.shtml)

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
