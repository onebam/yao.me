document.addEventListener('DOMContentLoaded', () => {
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    document.body.appendChild(cursorGlow);

    window.addEventListener('pointermove', (event) => {
        cursorGlow.style.left = `${event.clientX}px`;
        cursorGlow.style.top = `${event.clientY}px`;
    });

    const revealItems = document.querySelectorAll('.reveal, .fade-in-scroll, .timeline-item, .about-card, .project-item, .case-section');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.14 });

    revealItems.forEach((item, index) => {
        item.style.transitionDelay = `${Math.min(index * 45, 360)}ms`;
        revealObserver.observe(item);
    });

    document.querySelectorAll('[data-count]').forEach((counter) => {
        const target = Number(counter.dataset.count);
        if (!Number.isFinite(target)) return;

        const suffix = counter.dataset.suffix || '';
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const start = performance.now();
                const duration = 1000;

                const tick = (now) => {
                    const progress = Math.min((now - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    counter.textContent = `${Math.round(target * eased)}${suffix}`;
                    if (progress < 1) requestAnimationFrame(tick);
                };

                requestAnimationFrame(tick);
                counterObserver.disconnect();
            });
        }, { threshold: 0.7 });

        counterObserver.observe(counter);
    });
});
