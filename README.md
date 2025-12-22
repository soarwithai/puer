# 普洱茶典籍

一部数字化的普洱茶典籍，收录了从号级茶、印级茶到现代班章孔雀的珍稀茶品资料。

## 在线访问

访问 GitHub Pages: `https://your-username.github.io/puer/`

## 本地运行

**前置要求:** Node.js

1. 安装依赖:
   ```bash
   npm install
   ```

2. 运行开发服务器:
   ```bash
   npm run dev
   ```

3. 在浏览器中打开 `http://localhost:3000`

## 构建部署

构建生产版本:
```bash
npm run build
```

构建后的文件将输出到 `dist` 目录。

## GitHub Pages 部署

项目已配置 GitHub Actions 自动部署。推送到 `main` 分支后会自动构建并部署到 GitHub Pages。

手动部署步骤：
1. Fork 或克隆此仓库
2. 在仓库设置中启用 GitHub Pages，选择 GitHub Actions 作为构建源
3. 修改 `vite.config.ts` 中的 `base` 为你的仓库名
4. 推送代码到 GitHub
5. 等待 GitHub Actions 自动构建部署

## 技术栈

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React Icons

## 许可证

MIT
