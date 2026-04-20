document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-href]').forEach((item) => {
        item.addEventListener('click', () => {
            window.location.href = item.dataset.href;
        });

        item.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                window.location.href = item.dataset.href;
            }
        });

        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'link');
    });
});
