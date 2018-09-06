# Gulp + AngularJs 示例

## 参考
1. [Klorofil](http://www.cssmoban.com/cssthemes/6700.shtml)
2. [Gulp 使用手册](http://www.jianshu.com/p/ac03b3dac85b)
3. [gulp-useref使用小结](https://love-yoyo.github.io/blog/2016/07/24/gulp-useref%E4%BD%BF%E7%94%A8%E5%B0%8F%E7%BB%93/)

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

### 字符串转 json
```
angular.element.parseJSON(str);
```

### 注意
1. 理论上```index.html```不需要添加第三方组件的依赖，会自动添加
2. 但有些不规范的第三方依赖，无法自动添加依赖到```index.html```，需要手动添加依赖，而且涉及到打包，必须让```useref()```找到并构建

### 效果
![jvm](https://github.com/leonzm/gulp_angular_klorofil/blob/master/document/klorofil_elements.png)
