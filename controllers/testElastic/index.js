const TestElasticServices = require("../../services/testElastic");

class TestElasticController {
    constructor() {
        this.testElasticService = new TestElasticServices();
    }

    createIndex = async(req, res) => {
        return res.status(200).send(await this.testElasticService.createIndex(req.body.indexName));
    }

    createDocument = async(req, res) => {
        return res.status(200).send(await this.testElasticService.createDocument(req.body.indexName, req.body.document));
    }

    getDocument = async(req, res) => {
        return res.status(200).send(await this.testElasticService.getDocument(req.query.indexName, req.query.id));
    }
}

module.exports = TestElasticController;