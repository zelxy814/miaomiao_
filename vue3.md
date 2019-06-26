## 升级vue-cli
npm install -g @vue/cli
## vue3创建项目 vue create <projectName>
 ``` 
 选择默认配置或自定义配置
  ? Please pick a preset:
  default (babel, eslint)
  > Manually select features
```
``` 
选择自己需要的
? Please pick a preset: Manually select features
? Check the features needed for your project: (Press <space> to select, <
a> to toggle all, <i> to invert selection)
 (*) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support
>(*) Router
 (*) Vuex
 (*) CSS Pre-processors
 ( ) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing
```
``` 
是否添加history模式的路由 Y ，路由hash和history两种
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, CSS Pre-
processors
? Use history mode for router? (Requires proper server setup for index fall
back in production) (Y/n)
```
```
预编译的css选择哪个
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are suppo
rted by default): (Use arrow keys)
> Sass/SCSS (with dart-sass)
  Sass/SCSS (with node-sass)
  Less
  Stylus
```
```
把文件写入到package.json中
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Use
 arrow keys)
> In dedicated config files
  In package.json
```
```
是否做预设 N
? Save this as a preset for future projects? (y/N)
```
## vue3与vue2的区别
- 3.0：vue create 进入工程文件夹，创建项目。
- 2.0：vue init webpack 
