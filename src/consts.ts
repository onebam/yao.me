// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

interface SocialLink {
  href: string;
  label: string;
}

interface Site {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  showArchives: boolean;
  showBackButton: boolean;
  editPost: {
    enabled: boolean;
    text: string;
    url: string;
  };
  dynamicOgImage: boolean;
  lang: string;
  timezone: string;
}

// Site configuration
export const SITE: Site = {
  website: "https://yao997.cn/",
  author: "YAO",
  profile: "https://yao997.cn/about",
  desc: "工业自动化出身，正在用 AI 工具链把想法更快变成软件。",
  title: "YAO",
  ogImage: "",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: false,
  showBackButton: false,
  editPost: {
    enabled: false,
    text: "Edit on GitHub",
    url: "",
  },
  dynamicOgImage: false,
  lang: "zh-CN",
  timezone: "Asia/Shanghai",
};

export const SITE_TITLE = SITE.title;
export const SITE_DESCRIPTION = SITE.desc;

// Navigation links
export const NAV_LINKS: SocialLink[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
];

// Social media links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/onebam",
    label: "GitHub",
  },
  {
    href: "https://gitee.com/ddup_yao",
    label: "Gitee",
  },
  {
    href: "https://blog.csdn.net/m0_57445579",
    label: "CSDN",
  },
  {
    href: "mailto:hello@yao997.cn",
    label: "Email",
  },
  {
    href: "/rss.xml",
    label: "RSS",
  },
];

// Icon map for social media
export const ICON_MAP: Record<string, string> = {
  GitHub: "github",
  Twitter: "twitter",
  BlueSky: "bsky",
  RSS: "rss",
  Email: "mail",
};
