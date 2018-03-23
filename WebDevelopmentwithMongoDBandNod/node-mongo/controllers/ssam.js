module.exports = {
    viewSsams (req, res) {
        res.send('격투기 까페 전체 게시판 보기');
    },
    bbs (req, res) {
        const kindOfBbs = req.params.bbs; 
        if (kindOfBbs === 'kisul') {
            res.send('격투기 기술 보기 게시판 화면')
        } else if (kindOfBbs === 'dong') {
            res.send('동영상 보기 게시판 화면')
        } else {
            res.send('해당 게시판 없음');
        }
    },
    article (req, res) {
        const kindOfBbs = req.params.bbs;
        const articleNo = req.params.articleNo;

        const detail = getArticleDetailFromBbsAndArticleNo(kindOfBbs, articleNo);
    }
};

