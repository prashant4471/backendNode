const { client } = require("../../db/elasticsearch");

class DALElastic {
    constructor(){
        this.client = client;
    }

    createIndex = (indexName) => {
        return this.client.indices.create({index: indexName});
    }

    createDocument = (indexName, doc) => {
        return this.client.index({
            index: indexName,
            id: doc.id,
            document: doc
        });
    }

    getDocument = (indexName, id) => {
        return this.client.get({ index: indexName, id: id});
    }
}

module.exports = DALElastic;