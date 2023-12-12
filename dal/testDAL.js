const Test = require('../models/test');

class TestDAL {
    createTest = async(test) => {
        try{
            let createdTest = await Test.create(test);
            return {
                    status: 200,
                    createdTest: createdTest,
                    msg: "Successfully created"
            }
        } catch(err) {
            return {
                status : 500,
                msg: err.message
            }
        }
    }
    
    getAllTests = async() => {
        try{
            const allTests = await Test.find();
            return {
                status: 200,
                res: allTests
            }
        } catch(err) {
            return {
                res: [],
                status: 500,
                msg: err.message
            }
        }
    }
}

module.exports = TestDAL;