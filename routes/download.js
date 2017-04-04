var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)
{
  res.render('download', { title: 'Download' });
});

router.get('/pdf', function(req, res, next)
{
	res.download('files/Cloud\ Computing.pdf', 'Cloud\ Computing.pdf');
});
router.get('/word', function(req, res, next)
{
	res.download('files/Cloud\ Computing.docx', 'Cloud\ Computing.docx');
});

module.exports = router;
