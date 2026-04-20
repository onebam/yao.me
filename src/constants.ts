import { SITE } from "./consts";

export const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/onebam",
    linkTitle: `${SITE.title} on GitHub`,
    icon: "github",
    active: true,
  },
  {
    name: "Gitee",
    href: "https://gitee.com/ddup_yao",
    linkTitle: `${SITE.title} on Gitee`,
    icon: "gitee",
    active: true,
  },
  {
    name: "CSDN",
    href: "https://blog.csdn.net/m0_57445579",
    linkTitle: `${SITE.title} on CSDN`,
    icon: "csdn",
    active: true,
  },
  {
    name: "Email",
    href: "mailto:hello@yao997.cn",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: "mail",
    active: true,
  },
  {
    name: "RSS",
    href: "/rss.xml",
    linkTitle: `${SITE.title} RSS feed`,
    icon: "rss",
    active: true,
  },
] as const;
