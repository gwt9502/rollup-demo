# rollup+ts前端构建

[说明文档](https://juejin.im/post/5ecf6e0e6fb9a047a64459ba)

前端技术方案：

* 前端构建方式： rollup
* js语言： typeScript 3.9.3

## 文件组织

* `src/`
	* `entry.ts` —— 入口文件
	* `scss` —— 样式
* `index.html` —— 模版文件
* `dist/` —— 构建结果目录（已被 Git 忽略）


## 开发环境配置

1. 把代码库 clone 到本地。

1. 进入本项目的根目录，执行以下命令即可运行开发环境：

```sh
  # 下载依赖
  yarn install

  # 运行
  yarn serve

  # 打包
  yarn build
```

## 构建与部署

#### 前端构建

* 运行 `yarn build`。
* 构建结果在 `dist/` 目录中。

