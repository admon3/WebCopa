module.exports = function(app) {
    app.get('/admin', function(req, res) {
        const path = require('path');
        let mypath= path.join(__dirname, '../..', 'client', 'index.html');
        // res.send(mypath);
        res.sendFile(mypath);
    });
};