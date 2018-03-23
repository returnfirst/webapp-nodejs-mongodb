module.exports = {
    registUser (req, res) {
            res.send(`${req.body.userid}님 ${req.body.age}대 사용자님 가입 되었습니다.`);
    },
    registUserWithJson (req, res) {
        const userObj = req.body;

        res.send(`
            <html>
                <body>
                    <ul>
                        <li>${userObj.habby[0]}</li>
                        <li>${userObj.habby[1]}</li>
                        <li>${userObj.habby[2]}</li>
                    </ul>
                </body>
            </html>
        `);
    },
    viewUsers (req, res) {

        res.send(req.query.id);

        // 회원목록을 DB로 부터 가져온다.
        const users = {
            list: [
                {
                    userid: 'kim',
                    name: 'hong'
                },
                {
                    userid: 'lee',
                    name: 'soonsin'
                },
                {
                    userid: 'park',
                    name: 'chanho'
                }
            ]
        };
        res.json(users); // send + json 포맷
    }
};