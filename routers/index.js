var router =  require('express').Router();
var test = require('./test');

router.use('/test', test);

module.exports = router;