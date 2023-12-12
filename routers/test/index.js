var express = require('express');
var TestController = require('../../controllers/test');

class TestRouter {
    constructor(){
        this.testController = new TestController();
    }

    getRouter = () => {
        const router = express.Router();
        router.get("/", this.testController.getAllTests);
        router.post("/", this.testController.createTest);
        return router;
    }
}

module.exports = TestRouter;