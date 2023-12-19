const DALElastic = require("../../dal/elasticsearch");

class TestElasticServices {
    constructor(){
        this.dalElastic = new DALElastic();
    }

    createIndex = (indexName) => {
        return this.dalElastic.createIndex(indexName);
    }

    createDocument = (indexName, document) => {
        return this.dalElastic.createDocument(indexName, document);
    }

    getDocument = (indexName, id) => {
        return this.dalElastic.getDocument(indexName, id);
    }
}

module.exports = TestElasticServices;