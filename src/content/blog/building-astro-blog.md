---
title: "基于 Astro 搭建个人博客"
description: "使用 Astro、Tailwind CSS 和 Pagefind 从零搭建高性能个人博客网站，支持 MDX、SEO 和全文搜索。"
pubDatetime: 2026-04-20
tags: ["Astro", "前端", "博客"]
featured: true
draft: false
---

之前一直想搭建一个个人博客，用于记录学习笔记和技术心得。尝试过 Hexo、Hugo 等静态博客框架，最终选择了 **Astro**。

## 为什么选择 Astro

Astro 是一个专注于内容驱动的静态站点生成器，具有以下优势：

- ** Islands Architecture** - 按需 hydration，减少 JavaScript 体积
- ** Markdown/MDX 支持** - 可以直接在文章中使用 React/Vue 组件
- ** 丰富的集成生态** - 与 Tailwind、Pagefind 等工具无缝集成
- ** 部署简单** - 静态输出，可部署到 Vercel、Netlify 等平台

## 技术栈

本次博客搭建使用的主要技术：

| 技术 | 用途 |
|------|------|
| Astro 5.x | 核心框架 |
| Tailwind CSS 4.x | 样式设计 |
| @astrojs/mdx | Markdown 扩展 |
| @astrojs/sitemap | SEO sitemap |
| Pagefind | 全文搜索 |
| Shiki | 代码高亮 |
| Biome | 代码规范 |

## 博客功能

搭建完成的博客具备以下功能：

- ** 文章管理** - 基于 Astro Content Collections，支持 MDX 格式
- ** 标签系统** - 自动聚合文章标签，支持标签筛选
- ** 搜索功能** - Pagefind 提供的静态全文搜索
- ** 暗色模式** - 支持明暗主题切换
- ** RSS 订阅** - 自动生成 RSS feed
- ** SEO 优化** - 自动生成 sitemap，支持 Open Graph

## 快速开始

如果你也想基于 Astro 搭建个人博客，可以参考以下步骤：

```bash
# 创建新项目
npm create astro@latest

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 写在最后

博客搭建只是第一步，后续会陆续分享一些技术笔记和项目经验。

如果你对这个博客的主题感兴趣，可以查看项目的 [GitHub 仓库](https://github.com/onebam/yao.me)。
