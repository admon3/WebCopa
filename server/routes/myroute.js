module.exports = function(app) {
    app.get('/admin', function(req, res) {
        const path = require('path');
        let mypath= path.join(__dirname, '../..', 'client', 'index.html');
        // res.send(mypath);
        res.sendFile(mypath);
    });
    app.get('/main', function(req, res) {
        const path = require('path');
        let mypath= path.join(__dirname, '../..', 'client', 'index.html');
        // res.send(mypath);
        res.sendFile(mypath);
    });
    var User = app.models.User;
    app.post('/login', function(req, res) {
        User.login({
            email: req.body.email,
            password: req.body.password
        }, 'user', function(err, token) {
        if (err) return res.status(401).send(err);
            res.send(token);
        });
    });
};