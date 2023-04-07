# 快速使用 Create Next App

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/Yr5ntr?referralCode=ds7amN)

这是一个基于 `Next.js` 的项目模版，可以快速创建 React 项目。预览地址：https://create-next-app.up.railway.app/

主要功能：

- 支持 TypeScript
- 基于 `Next.js` 支持 SSR
- 包管理器替换为 `pnpm`
- 添加了 `husky` `lint-staged` 以 commit 时检查
- 保存时会自动格式化

## 准备工作

> Node.js 版本需要 16+

1. 需要全局安装 `pnpm`

```sh
$ npm install pnpm -g
```

2. 点击 GitHub 的 **Use this template**，基于此模版创建一个新的项目，并将你的项目 `clone` 到本地。或者运行：

```sh
$ npx create-next-app@latest nextjs-blog --use-npm --example "https://github.com/crazyurus/create-next-app"
```

3. 运行 `pnpm install` 安装依赖
4. 运行 `pnpm run start` 启动项目。在 VSCode 中，也可以通过 **运行和调试** 功能通过界面启动，并在 VSCode 中断点调试

## 可用脚本

在这个项目中，你可以使用：

### `pnpm run start`

使用开发模式运行你的项目，可打开 [http://localhost:3000](http://localhost:3000) 在浏览器中查看。当文件修改时页面会自动更新

### `pnpm run build`

使用生产模式构建你的项目，产物在 `dist` 目录下，构建时我们会对产物进行优化以拥有更好的性能，构建产物中的文件名均有 hash 值，并对内容进行了压缩。

构建完成后就可以部署了，可以参考 https://facebook.github.io/create-react-app/docs/deployment

## 目录结构

项目文件均在 `src` 目录下，需要关注的是：

- 公共组件放在 `components` 下
- 页面组件放在 `pages` 下
- 路由遵循 `Next.js` 的约定式路由

## License

[MIT](./LICENSE)
