var express = require(`express`);
var router = express.Router();

// Home Route
router.get(`*`, function(req, res) {
  res.send(`Hello!`);
});

module.exports = router;
