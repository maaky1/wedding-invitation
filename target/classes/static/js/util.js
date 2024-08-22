//import { audio } from './audio.js';
//import { theme } from './theme.js';
//import { comment } from './comment.js';
//import { storage } from './storage.js';
//import { confetti } from './confetti.js';
//import { progress } from './progress.js';
//import { bootstrap } from './bootstrap.js';
//import { request, HTTP_GET } from './request.js';

export const util = (() => {
    const open = (button) => {
        button.disabled = true;
        confetti({
            origin: { y: 1 },
            zIndex: 1057
        });

        document.body.style.overflowY = 'scroll';
        document.body.scrollIntoView({ behavior: 'instant' });
        opacity('welcome', 0.025);

        audio.play();
        audio.showButton();

        theme.showButtonChangeTheme();
        setTimeout(animation, 1500);
    };

    const close = () => {
        storage('information').set('info', true);
    };

    const init = () => {
//            countDownDate();

//            const session = storage('session');
//            if (session.get('token')?.split('.').length === 3) {
//                storage('user').clear();
//                storage('owns').clear();
//                storage('likes').clear();
//                storage('comment').clear();
//                storage('tracker').clear();
//            }
//
//            if (storage('information').get('info')) {
//                document.getElementById('information')?.remove();
//            }
//
//            const token = document.querySelector('body').getAttribute('data-key');
//            if (!token || token.length === 0) {
//                document.getElementById('comment')?.remove();
//                document.querySelector('a.nav-link[href="#comment"]')?.closest('li.nav-item')?.remove();
//                return;
//            }
//
//            session.set('token', token);
//            progress.add();
//            request(HTTP_GET, '/api/config')
//                .token(token)
//                .then((res) => {
//                    progress.complete('request');
//                    const config = storage('config');
//
//                    for (let [key, value] of Object.entries(res.data)) {
//                        config.set(key, value);
//                    }
//
//                    comment.comment();
//                }).catch(() => {
//                    progress.invalid('request')
//                });
        };

    return {
//        init,
        open,
//        copy,
        close,
//        modal,
//        guest,
//        opacity,
//        animate,
//        animation,
//        escapeHtml,
//        extractUUIDs,
//        countDownDate,
//        disableButton,
    }
})();