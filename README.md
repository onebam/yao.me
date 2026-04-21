## YAO的个人网站

这是我个人网站的源代码仓库，网站托管在 **[yao997.cn](https://yao997.cn)**。网站基于 **Astro** 框架搭建，使用 **Tailwind CSS** 进行样式设计，并集成了 **Pagefind** 全文搜索功能。

### 关于我

工业自动化背景，专注 AI 编程工具与项目交付。熟悉 PLC/HMI、C#/.NET 上位机，目前重点关注 AI Coding、模型 API 及自动化工作流。

> 若想详细了解我，欢迎点击博客首页左下角的 [Learn more about me](https://www.yao997.cn/resume/index.html)。

### 核心能力

- **工业自动化现场经验** — 理解设备、节拍、异常和交付压力。
- **C# / .NET 上位机开发** — 能把业务需求落到可运行系统。
- **AI Coding 工具链实践** — 使用 Codex、Cursor 等工具进行开发协作。
- **多模型 API 与自动化工作流** — 关注从需求到交付的完整闭环。
- **PMP 项目管理意识** — 重视拆解、推进、风险和复盘。

### 技术栈

- **框架**：Astro（静态站点生成器，支持 MDX 内容格式）
- **样式**：Tailwind CSS
- **搜索**：Pagefind（全站静态搜索）
- **SEO**：内置 SEO 优化
- **RSS**：自动生成的 RSS Feed

### 项目结构
├── public/ # 静态资源（图片、字体、favicon）
├── src/
│ ├── assets/ # 组件使用的图标与图片
│ ├── components/ # 可复用 UI 组件
│ ├── content/ # 内容集合（博客文章，MDX 格式）
│ ├── layouts/ # 页面布局模板
│ ├── pages/ # 路由与页面
│ ├── styles/ # 全局样式与 CSS
│ └── utils/ # 工具函数
├── astro.config.mjs # Astro 配置
├── tailwind.config.mjs # Tailwind CSS 配置
└── package.json # 依赖与脚本

### 常用命令

| 命令 | 说明 |
| :--- | :--- |
| `npm install` | 安装依赖 |
| `npm run dev` | 启动本地开发服务器（默认 `localhost:4321`） |
| `npm run build` | 构建生产环境站点到 `./dist/` |
| `npm run preview` | 本地预览构建结果 |

### 部署

本网站通过 **Vercel** 进行自动部署，与 GitHub 仓库关联。推送代码到主分支后，Vercel 会自动检测变更、运行 `npm run build` 并将生成的静态站点发布到全球 CDN 上，域名 `yao997.cn` 已绑定至 Vercel 项目。

### 许可证

本仓库采用双许可证：

- **文档与博客内容**：采用 [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/) 许可证
- **代码部分**：采用 [MIT License](https://opensource.org/licenses/MIT) 许可证

### 致谢

特别感谢 [Sat Naing](https://github.com/satnaing) 提供的 [AstroPaper](https://astro-paper.pages.dev/) 主题，其出色的设计和清晰的架构为本网站提供了坚实的基础。同时也感谢Peter Steinberger（openclaw之父）的开源精神与启发，他的[个人网站](https://github.com/steipete/steipete.me)是我学习和参考的重要资源。

### 访问网站

欢迎访问我的个人网站：[yao997.cn](https://yao997.cn)

关注方向：AI Coding / Industrial Software / Automation Workflow / C# / .NET / Project Delivery