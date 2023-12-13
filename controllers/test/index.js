const TestService = require ('../../services/test');

class TestController {
    constructor() {
        this.testService = new TestService();
    }

    createTest = async (req,res) => {
        return res.status(200).send(await this.testService.addTest(req.body));
    }

    getAllTests = async (req, res) => {
        return res.status(200).send(await this.testService.getTests());
    }
}

module.exports = TestController;