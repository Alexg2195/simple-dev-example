var express = require(`express`);
var router = express.Router();

// Controllers
var userRoute = require(`../controllers/user`);

// Routes
router.use(`/user`, userRoute);

module.exports = router;