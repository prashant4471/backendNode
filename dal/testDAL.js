const Test = require('../models/test');

const createTest = async(test) => {
    try{
        await Test.create(test)
        .then(() => {
            return {
                status: 200,
                msg: "Successfully created"
            }
        })
        .catch((err) => {
            return {
                status: 404,
                msg: err.message
            }
        })

    } catch(err) {
        return {
            status : 500,
            msg: err.message
        }
    }
}

const getAllTests = async() => {
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

module.exports = {
    createTest: createTest,
    getAllTests: getAllTests
}