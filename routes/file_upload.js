var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('file_upload', { title: 'File Upload Redirect test' });
});

module.exports = router;
