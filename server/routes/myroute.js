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
    app.get('/HomeAtractivos', function(req, res) {
        const path = require('path');
        let mypath= path.join(__dirname, '../..', 'client', 'index.html');
        // res.send(mypath);
        res.sendFile(mypath);
    });
    app.get('/HomeAtractivo/:id', function(req, res) {
        const path = require('path');
        let mypath= path.join(__dirname, '../..', 'client', 'index.html');
        // res.send(mypath);
        res.sendFile(mypath);
    });
    app.get('/SiteNoticias', function(req, res) {
        const path = require('path');
        let mypath= path.join(__dirname, '../..', 'client', 'index.html');
        // res.send(mypath);
        res.sendFile(mypath);
    });
    app.get('/SiteNoticia/:id', function(req, res) {
        const path = require('path');
        let mypath= path.join(__dirname, '../..', 'client', 'index.html');
        // res.send(mypath);
        res.sendFile(mypath);
    });
    app.get('/SiteHospedajes', function(req, res) {
        const path = require('path');
        let mypath= path.join(__dirname, '../..', 'client', 'index.html');
        // res.send(mypath);
        res.sendFile(mypath);
    });
    app.get('/SiteHospedaje/:id', function(req, res) {
        const path = require('path');
        let mypath= path.join(__dirname, '../..', 'client', 'index.html');
        // res.send(mypath);
        res.sendFile(mypath);
    });
    app.get('/HomeResenas', function(req, res) {
        const path = require('path');
        let mypath= path.join(__dirname, '../..', 'client', 'index.html');
        // res.send(mypath);
        res.sendFile(mypath);
    });
    app.get('/HomeComoLlegar', function(req, res) {
        const path = require('path');
        let mypath= path.join(__dirname, '../..', 'client', 'index.html');
        // res.send(mypath);
        res.sendFile(mypath);
    });
    app.get('/HomeConociendoCopacabana', function(req, res) {
        const path = require('path');
        let mypath= path.join(__dirname, '../..', 'client', 'index.html');
        // res.send(mypath);
        res.sendFile(mypath);
    });
    app.get('/resenas', function(req, res) {
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