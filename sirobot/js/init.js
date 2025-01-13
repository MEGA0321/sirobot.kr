document.addEventListener('DOMContentLoaded', function() {
    Object.values(window.APP.init).forEach(initFn => {
        try {
            initFn();
        } catch (e) {
            console.error('Error initializing module:', e);
        }
    });
});