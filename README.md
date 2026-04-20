# YAO Blog

基于 Astro 的个人博客，记录学习笔记、技术心得和项目经验。

## 技术栈

- **Astro** - 静态站点框架
- **Tailwind CSS** - 样式设计
- **MDX** - Markdown + 组件
- **Pagefind** - 全文搜索
- **Shiki** - 代码高亮
- **Vercel** - 部署

## 项目结构

```
src/
├── components/     # UI 组件
├── content/blog/   # 博客文章
├── layouts/        # 页面布局
├── pages/           # 路由页面
├── styles/          # 全局样式
└── utils/           # 工具函数
```

## 快速开始

```bash
npm install
npm run dev      # 开发服务器
npm run build    # 构建生产版本
```

## 配置文件

| 文件 | 说明 |
|------|------|
| `src/constants.ts` | 网站信息配置 |
| `src/consts.ts` | 社交链接配置 |
| `astro.config.mjs` | Astro 配置 |

## 自定义

- 网站信息 → `src/constants.ts`
- 社交链接 → `src/consts.ts`
- 首页 → `src/pages/index.astro`
- 关于页 → `src/pages/about.mdx`
- 文章目录 → `src/content/blog/`
