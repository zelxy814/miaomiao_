# miaomiao

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 开发项目流程 -产品立项
- 客户的需求分析
- 整理需求文档
- 项目成立会
## 开发项目流程 -产品原型
- 设计产品原型图  --Axure RP工具等
- UI设计 --PS工具、AI工具等

## 开发项目流程 -项目开发
- 项目需求分析
- 项目工期评估
- 项目责任划分
-前端
    - 静态页面制作
    - 前端框架选型
    - 前端页面架构
- 后端
    - 数据库开发
    - API接口文档
    - API接口实现
## 开发项目流程 -项目测试
- 开发测试
- 灰度测试
- 线上测试 
## 开发项目流程 -项目上线
- 打包前端模块
- 远程服务器部署
- 监控异常

## 项目接口文件 
  | 接口名称 | 请求方式 | 请求示列 |
  | --- | ---- | ---- |
  | 正在热映 | get | http://39.97.33.178/api/movieOnInfoList?cityId=10 |
  | 即将上映 | get | http://39.97.33.178/api/movieComingList?cityId=10 |
  | 搜索 | get | http://39.97.33.178/api/searchList?cityId=10&kw=a |
  | 城市 | get | http://39.97.33.178/api/cityList |
  | 电影详情 | get | http://39.97.33.178/api/detailmovie?movieId=345808 |
  | 影院 | get | http://39.97.33.178/api/cinemaList?cityId=10 |
  | 城市定位 | get | http://39.97.33.178/api/getLocation |
