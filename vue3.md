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
 
 ## 移动端点击事件touch、tap、swipe
 + 1. click事件  
单击事件，类似于PC端的click，但在移动端中，连续click的触发有200ms ~ 300ms的延迟，可以通过使用fastclick.js解决  
 + 2. touch类事件  
触摸事件:  
有touchstart touchmove touchend touchcancel 四种之分    
  touchstart：手指触摸到屏幕会触发  
  touchmove：当手指在屏幕上移动时，会触发  
  touchEnd：当手指离开屏幕时，会触发  
  touchcancel：可由系统进行的触发，比如手指触摸屏幕的时候，突然alert了一下，或者系统中其他打断了touch的行为，则可以触发该事件  
 + 3. tap类事件  
触碰事件，我目前还不知道它和touch的区别，一般用于代替click事件，有tap longTap singleTap doubleTap四种之分  
tap: 手指碰一下屏幕会触发    
longTap: 手指长按屏幕会触发  
singleTap: 手指碰一下屏幕会触发  
doubleTap: 手指双击屏幕会触发  
+ 4. swipe类事件  
滑动事件，有swipe swipeLeft swipeRight swipeUp swipeDown 五种之分  
swipe：手指在屏幕上滑动时会触发  
swipeLeft：手指在屏幕上向左滑动时会触发  
swipeRight：手指在屏幕上向右滑动时会触发  
swipeUp：手指在屏幕上向上滑动时会触发  
swipeDown：手指在屏幕上向下滑动时会触发  
