var router = require('express').Router();

router.get('/getDummy', function(req,res){
    res.status(200).send("Hello !!!");
});

module.exports = router;