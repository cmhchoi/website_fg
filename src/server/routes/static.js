const router = require('express').Router();

router.get('/*', function(req, res) {
  console.log('triggered')
  res.render('index.html')
});

module.exports = router;