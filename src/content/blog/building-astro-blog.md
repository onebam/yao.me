---
title: "基于 Astro 搭建个人博客"
description: "使用 Astro、Tailwind CSS 和 Pagefind 从零搭建高性能个人博客网站，支持 MDX、SEO 和全文搜索。"
pubDatetime: 2026-04-20
tags: ["Astro", "前端", "博客"]
featured: true
draft: false
---

# 从零搭建个人博客：Astro + Vercel + 自定义域名完整指南

> 这篇文章将带你完整走一遍个人博客的搭建、部署、域名申请和绑定流程。我的博客 [yao997.cn](https://yao997.cn) 就是这样一步步做出来的，看完你也能拥有一个属于自己的、高速且完全可控的博客站点。

## 为什么要自己搭博客？

- **完全掌控**：内容、样式、评论、数据都属于你。
- **学习技术**：顺便掌握现代前端工具链（Astro、Git、Vercel）。
- **极低成本**：除了域名年费（几十块），托管完全免费。
- **写作体验**：用 Markdown + 代码高亮，舒服。

## 技术选型

| 项目 | 选择 | 理由 |
|------|------|------|
| 框架 | [Astro](https://astro.build) | 静态站点生成，默认零 JS，性能极佳，支持 MDX |
| 样式 | Tailwind CSS | 原子化 CSS，易定制 |
| 部署 | [Vercel](https://vercel.com) | 与 GitHub 集成，自动构建，全球 CDN |
| 域名 | Namesilo / Cloudflare | 价格透明，免费隐私保护 |
| 搜索 | Pagefind | 静态全文搜索，无需服务器 |

## 第一步：环境准备

确保你已安装：

- **Node.js** (v18 或以上) → [下载](https://nodejs.org)
- **Git** → [下载](https://git-scm.com)
- 一个 **GitHub** 账号
- 一个 **Vercel** 账号（可用 GitHub 登录）

检查版本：

```bash
node -v   # v18.x 或更高
git --version
```

## 第二步：创建 Astro 项目

有两种方式，推荐使用第二种：

### 方式一：克隆参考项目（推荐）

```bash
# 克隆我的博客作为起点
git clone https://github.com/steipete/steipete.me.git my-blog
cd my-blog

# 删除原有 git 历史，重新初始化
rm -rf .git
git init
```

### 方式二：从零创建

```bash
# 使用 Astro 官方 CLI
npm create astro@latest my-blog -- --template minimal
cd my-blog
npm install
```

然后手动添加所需依赖：

```bash
npm install @astrojs/mdx @astrojs/sitemap tailwindcss @tailwindcss/vite pagefind
```

## 第三步：项目结构

项目主要结构如下：

```
my-blog/
├── public/
│   ├── assets/          # 静态图片资源
│   └── fonts/           # Web 字体
├── src/
│   ├── components/      # 可复用 UI 组件
│   ├── content/
│   │   └── blog/        # 博客文章（Markdown/MDX）
│   ├── layouts/         # 页面布局模板
│   ├── pages/           # 路由和页面
│   ├── styles/          # 全局样式
│   ├── utils/           # 工具函数
│   ├── consts.ts        # 站点配置
│   └── config.ts        # 配置重导出
├── astro.config.mjs     # Astro 配置
├── tailwind.config.mjs  # Tailwind 配置
└── package.json
```

## 第四步：个性化配置

### 4.1 修改站点信息

编辑 `src/consts.ts`：

```ts
interface Site {
  website: string;       // 你的网站 URL
  author: string;        // 作者名称
  profile: string;        // 关于页面 URL
  desc: string;           // 网站描述
  title: string;         // 网站标题
  // ... 其他配置
}

export const SITE: Site = {
  website: "https://yao997.cn/",
  author: "YAO",
  profile: "https://yao997.cn/about",
  desc: "工业自动化出身，正在用 AI 工具链把想法更快变成软件。",
  title: "YAO",
  // ...
};
```

同时更新 `astro.config.mjs` 中的 site 字段：

```js
export default defineConfig({
  site: "https://yao997.cn/",  // 与 consts.ts 保持一致
  // ...
});
```

### 4.2 修改个人信息

- `src/pages/about.mdx` — 关于页面
- `src/pages/index.astro` — 首页
- `public/` 下的静态资源

### 4.3 写第一篇文章

在 `src/content/blog/` 下新建 `.md` 或 `.mdx` 文件：

```markdown
---
title: "Hello World"
pubDatetime: 2025-01-01
description: "我的第一篇博客"
author: "YAO"
tags: ["随笔"]
---

欢迎来到我的博客！这里会记录技术成长之路...
```

## 第五步：本地构建测试

```bash
npm run build
```

Astro 会调用 Pagefind 自动生成搜索索引。构建产物在 `dist/` 目录。

预览生产环境：

```bash
npm run preview
```

确认所有链接、图片、样式正常。

## 第六步：推送到 GitHub

在 GitHub 上新建一个仓库（不要加 README/.gitignore，因为本地已有）。

```bash
git add .
git commit -m "Initial blog setup"
git remote add origin https://github.com/你的用户名/你的仓库名.git
git branch -M main
git push -u origin main
```

## 第七步：部署到 Vercel

1. 登录 Vercel，点击 **Add New** → **Project**
2. 导入刚才的 GitHub 仓库
3. Vercel 会自动识别为 Astro 项目
4. 构建命令：`npm run build`（输出目录 `dist`）
5. 点击 **Deploy**

几十秒后，你会得到一个 `xxxx.vercel.app` 的临时域名，博客已经上线了！

## 第八步：申请自定义域名

### 8.1 购买域名

推荐（国内访问友好且便宜）：

- **Namesilo**：免费隐私保护，支持支付宝
- **Cloudflare Registrar**：成本价，无加价
- **阿里云/腾讯云**：国内备案麻烦，但速度快

### 8.2 在 Vercel 上绑定域名

1. 进入你的 Vercel 项目 → **Settings** → **Domains**
2. 输入你的域名，例如 `yao997.cn`，点击 **Add**
3. Vercel 会给出需要配置的 DNS 记录

### 8.3 在域名注册商处配置 DNS

以 Namesilo 为例：

进入域名管理 → DNS 设置，添加以下记录：

| 类型   | 名称 | 值                      |
| ------ | ---- | ----------------------- |
| A      | @    | 76.76.21.21             |
| CNAME  | www  | cname.vercel-dns.com   |

> 注意：Vercel 的 IP 可能会变，推荐直接用 CNAME 方式指向 `cname.vercel-dns.com`。

保存后等待 DNS 生效（通常几分钟到几小时）。

### 8.4 启用 SSL 证书

Vercel 会自动为你的域名申请 Let's Encrypt 证书，无需手动操作。

## 第九步：自动部署与后续更新

从此以后，每次你执行 `git push` 到 GitHub 主分支，Vercel 都会自动重新构建并部署。

日常写博客流程：

1. 在本地 `src/content/blog/` 下新建 Markdown 文件
2. `npm run dev` 实时预览
3. 写完执行：

```bash
git add .
git commit -m "新文章：xxx"
git push
```

4. 等待 Vercel 自动部署 → 线上更新

## 常见问题

### Q1：Empty reply from server 无法 push 到 GitHub？

- 检查代理：`git config --global --unset http.proxy`
- 改用 SSH：`git remote set-url origin git@github.com:用户名/仓库名.git`
- 或者换手机热点试试

### Q2：Vercel 构建失败？

- 检查 Node 版本是否匹配（在项目根目录创建 `.nvmrc` 写入 `v18`）
- 本地先运行 `npm run build` 确保无报错
- 查看 Vercel 构建日志

### Q3：自定义域名访问不了？

- 确认 DNS 记录已添加且 TTL 较低
- 在 Vercel 的 Domains 页面点击 "Refresh" 或 "Renew" 证书
- 等待最长 48 小时（通常 10 分钟内）

### Q4：如何添加评论系统？

- 推荐使用 **Giscus**（基于 GitHub Discussions）
- 在文章布局组件中添加 Giscus 脚本即可

## 总结

现在你已经拥有了一条完整的博客生产线：

| 环节 | 工具 | 说明 |
| ---- | ---- | ---- |
| 写   | Markdown | 本地编辑 |
| 管   | Git + GitHub | 版本控制 |
| 建   | Astro | 极速生成静态页 |
| 发   | Vercel | 自动部署 + CDN |
| 搜   | Pagefind | 静态全文搜索 |
| 域   | 自定义域名 | 免费 HTTPS |

整个过程除了域名年费（约 10-15 美元/年），其余全部免费。

欢迎访问我的博客 [yao997.cn](https://yao997.cn) 交流讨论。

**Happy Blogging!** 🚀
