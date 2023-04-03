module.exports = function(app) {
    app.get('/perfil', function(req, res) {
        const path = require('path');
        let mypath= path.join(__dirname, '../..', 'client', 'index.html');
        // res.send(mypath);
        res.sendFile(mypath);
    });
    app.get('/noticias', function(req, res) {
        const path = require('path');
        let mypath= path.join(__dirname, '../..', 'client', 'index.html');
        // res.send(mypath);
        res.sendFile(mypath);
    });
    app.get('/noticia/:id', function(req, res) {
        const path = require('path');
        let mypath= path.join(__dirname, '../..', 'client', 'index.html');
        // res.send(mypath);
        res.sendFile(mypath);
    });
    app.get('/eventos', function(req, res) {
        const path = require('path');
        let mypath= path.join(__dirname, '../..', 'client', 'index.html');
        // res.send(mypath);
        res.sendFile(mypath);
    });
    app.get('/evento/:id', function(req, res) {
        const path = require('path');
        let mypath= path.join(__dirname, '../..', 'client', 'index.html');
        // res.send(mypath);
        res.sendFile(mypath);
    });
    app.get('/hospedaje/:id', function(req, res) {
        const path = require('path');
        let mypath= path.join(__dirname, '../..', 'client', 'index.html');
        // res.send(mypath);
        res.sendFile(mypath);
    });
    app.get('/hospedajes', function(req, res) {
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
    app.get('/atractivo/:id', function(req, res) {
        const path = require('path');
        let mypath= path.join(__dirname, '../..', 'client', 'index.html');
        // res.send(mypath);
        res.sendFile(mypath);
    });
    app.get('/atractivos', function(req, res) {
        const path = require('path');
        let mypath= path.join(__dirname, '../..', 'client', 'index.html');
        // res.send(mypath);
        res.sendFile(mypath);
    });
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