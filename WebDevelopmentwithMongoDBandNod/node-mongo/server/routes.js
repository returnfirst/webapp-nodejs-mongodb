const express = require('express');
const router = express.Router();
const home = require('../controllers/home');
const auth = require('../controllers/auth');
const user = require('../controllers/user');
const ssam = require('../controllers/ssam');

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

    router.get('/ssam', function(req, res) {
        res.send('격투기 까페 전체 게시판 보기');
    });

    router.get('/ssam/:bbs', function(req, res) {
        const kindOfBbs = req.params.bbs; 
        if (kindOfBbs === 'kisul') {
            res.send('격투기 기술 보기 게시판 화면')
        } else if (kindOfBbs === 'dong') {
            res.send('동영상 보기 게시판 화면')
        } else {
            res.send('해당 게시판 없음');
        }
    });

    router.get('/ssam/:bbs/:articleNo', function(req, res) {
        const kindOfBbs = req.params.bbs;
        const articleNo = req.params.articleNo;

        const detail = getArticleDetailFromBbsAndArticleNo(kindOfBbs, articleNo);
    });

    app.use(router);

}