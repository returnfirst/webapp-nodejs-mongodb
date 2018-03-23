module.exports = {
    login (req, res) {
        res.send('/login request...');
    },
    logon (req, res) {
        res.redirect('/login');
    }
};