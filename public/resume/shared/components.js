class GlobalHeader extends HTMLElement {
    connectedCallback() {
        const basePath = this.getAttribute('base-path') || '../';
        const currentPath = window.location.pathname;
        const links = [
            { href: `${basePath}home/home.html`, label: '首页', match: '/home/' },
            { href: `${basePath}case/case.html`, label: '项目案例', match: '/case/' },
            { href: `${basePath}about/about.html`, label: '关于我', match: '/about/' }
        ];

        this.innerHTML = `
            <header class="global-header">
                <div class="header-container">
                    <a class="brand" href="${basePath}home/home.html" aria-label="返回首页">
                        <span class="brand-mark">Y</span>
                        <span class="brand-copy">
                            <strong>YAO</strong>
                            <small>AI Toolchain Developer</small>
                        </span>
                    </a>
                    <button class="nav-toggle" type="button" aria-expanded="false" aria-label="打开导航">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <nav class="main-nav" aria-label="主导航">
                        <ul>
                            ${links.map((link) => `
                                <li>
                                    <a class="${currentPath.includes(link.match) ? 'active' : ''}" href="${link.href}">
                                        ${link.label}
                                    </a>
                                </li>
                            `).join('')}
                        </ul>
                    </nav>
                </div>
            </header>
        `;

        const toggle = this.querySelector('.nav-toggle');
        const nav = this.querySelector('.main-nav');

        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!expanded));
            nav.classList.toggle('open');
        });
    }
}

class GlobalFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="global-footer">
                <div class="footer-container">
                    <div>
                        <p class="footer-title">把现场经验写进系统，把 AI 工具链落到真实交付。</p>
                        <p class="footer-subtitle">AI Vibe Coding / C# / Industrial Software / Automation Workflow</p>
                    </div>
                    <div class="footer-links">
                        <a href="https://github.com/onebam" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://gitee.com/ddup_yao" target="_blank" rel="noreferrer">Gitee</a>
                        <a href="https://blog.csdn.net/m0_57445579" target="_blank" rel="noreferrer">CSDN</a>
                    </div>
                    <p class="footer-copyright">
                        &copy; 2026 YAO. All rights reserved.
                        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">ICP备案</a>
                    </p>
                </div>
            </footer>
        `;
    }
}

customElements.define('global-header', GlobalHeader);
customElements.define('global-footer', GlobalFooter);
