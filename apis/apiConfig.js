const before = function (app, server) {
    app.get('/some/path', function (req, res) {
        res.json({ custom: 'response' });
    })
}

module.exports = before