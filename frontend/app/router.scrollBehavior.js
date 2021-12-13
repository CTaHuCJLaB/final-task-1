export default to => {
    if (to.hash) {
        const targetElement = document.querySelector(to.hash);
        if (targetElement) {
            return window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    }
    return window.scrollTo(
        { top: 0, behavior: 'smooth' },
    );
};
