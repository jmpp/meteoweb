import $ from 'jquery';
import Router from 'vanilla-router';

import Home from './controllers/Home.js';
import Previsions from './controllers/Previsions.js';

const router = new Router({
    mode: 'hash'
});

router.add('/',           () => dispatchRoute(new Home()));       // http://localhost:8080/#/home
router.add('/previsions', () => dispatchRoute(new Previsions())); // http://localhost:8080/#/previsions

router.addUriListener();
router.check();

const $main = $('main');
function dispatchRoute(controller) {
    return fetch(`views/${controller.view}`)
            .then(res => res.text())
            .then(htmlContent => {
                $main.html(htmlContent);
                controller.init();
            });
}