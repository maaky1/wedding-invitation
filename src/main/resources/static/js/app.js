import { theme } from './theme.js';

document.addEventListener('DOMContentLoaded', () => {
    theme.check();

    window.theme = theme;
});
