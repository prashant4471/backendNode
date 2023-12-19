const TestRouter = require('./test');
const TestElasticRouter = require('./testElastic');

var router =  require('express').Router();

router.use('/test', new TestRouter().getRouter());
router.use('/testElastic', new TestElasticRouter().getRouter());

module.exports = router;