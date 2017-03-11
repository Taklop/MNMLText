var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('download', { title: 'download' });
});

router.get('/pdf', function(req, res, next) 
{
	res.download('files/pdfSummary.pdf', 'pdfSummary.pdf');
});
router.get('/word', function(req, res, next) 
{
	res.download('files/wordSummary.docx', 'wordSummary.docx');
});

module.exports = router;
