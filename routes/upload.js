var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)
{
  res.render('upload', { title: 'Upload Your Notes' });
});

router.post('/file_upload', function(req, res, next) {
	console.log(req.body);
	console.log(req.files);
    //res.send('Username: ' + req.body.username);
});

module.exports = router;
