const express = require('express');
const router = express.Router();
const home = require('../controllers/home');
const auth = require('../controllers/auth');
const user = require('../controllers/user');
const ssam = require('../controllers/ssam');
const movie = require('../controllers/movie');

module.exports = function (app) {

    // URL 설계 (중요하다.)
    // '/'(get) .. 메인 페이지를 보내준다.
    // '/login'(get) .. 로그인 페이지를 보내준다.

    router.get('/', home.index);

    router.get('/login', auth.login);

    router.get('/logon', auth.logon);

    router.post('/users', user.registUser);

    router.post('/users/json', user.registUserWithJson);

    // (GET) '/users' : 회원목록을 보내준다.
    router.get('/users', user.viewUsers);

    router.get('/ssam', ssam.viewSsams);

    router.get('/ssam/:bbs', ssam.bbs);

    router.get('/ssam/:bbs/:articleNo', ssam.article);

    router.get('/movie/starwars', movie.viewAll);

    app.use(router);

}