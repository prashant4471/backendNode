const TestRouter = require('./test');

var router =  require('express').Router();

router.use('/test', new TestRouter().getRouter());

module.exports = router;