//Create web server
app.get('/comments/:id', function(req, res) {
    var id = req.params.id;
    var comment = comments[id];
    res.json(comment);
});
