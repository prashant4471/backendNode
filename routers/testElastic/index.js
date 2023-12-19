const express = require('express');
const TestElasticController = require("../../controllers/testElastic");

class TestElasticRouter {
    constructor(){
        this.testElasticController = new TestElasticController();
    }

    getRouter = () => {
        const router = express.Router();
        router.post('/createIndex', this.testElasticController.createIndex);
        router.post('/createDocument', this.testElasticController.createDocument);
        router.get('/getDocument', this.testElasticController.getDocument);
        return router;
    }
}

module.exports = TestElasticRouter;