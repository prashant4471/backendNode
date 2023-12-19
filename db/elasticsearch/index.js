var elasticsearch = require('@elastic/elasticsearch');

var client = new elasticsearch.Client({
    node: 'http://localhost:9200/'
});

var connectElastic = () => {
    client.ping().then(res => {
        if(res === true){
            console.log("ElasticSearch successfully connected !!");
        }
    }).catch(err => {
        console.log("Error in connecting to Elasticsearch");
    })
}

module.exports = {
    client : client,
    connectElastic : connectElastic
}