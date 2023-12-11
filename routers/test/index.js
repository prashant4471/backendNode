const { getAllTests } = require('../../dal/testDAL');

var router = require('express').Router();

router.get('/getDummy', async function(req,res){
    const data = await getAllTests();
    return res.status(200).send(data);
});

module.exports = router;