const router = require('express').Router();

router.get('/*', function(req, res) {
  console.log('triggered')
  res.render('index.html')
});

router.get('/who-are-we/*', function(req, res) {
  console.log('triggered who')
  res.render('index.html')
});

module.exports = router;