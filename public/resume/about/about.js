document.addEventListener('DOMContentLoaded', () => {
    const portrait = document.querySelector('.portrait-card');
    if (!portrait) return;

    portrait.addEventListener('pointermove', (event) => {
        const rect = portrait.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        portrait.style.transform = `perspective(900px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
    });

    portrait.addEventListener('pointerleave', () => {
        portrait.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
    });
});
