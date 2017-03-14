var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)
{
  res.render('download', { title: 'download' });
});

router.get('/pdf', function(req, res, next)
{
	res.download('files/EmpiricalStudies.pdf', 'EmpiricalStudies.pdf');
});
router.get('/word', function(req, res, next)
{
	res.download('files/EmpiricalStudies.docx', 'EmpiricalStudies.docx');
});

module.exports = router;
