document.addEventListener('DOMContentLoaded', () => {
    const visual = document.querySelector('.hero-visual');
    if (!visual) return;

    visual.addEventListener('pointermove', (event) => {
        const rect = visual.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        visual.style.transform = `perspective(900px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
    });

    visual.addEventListener('pointerleave', () => {
        visual.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
    });
});
