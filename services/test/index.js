const TestDAL = require("../../dal/testDAL");


class TestService {
    constructor(){
        this.testDal = new TestDAL();
    }
    addTest = (test) => {
        return this.testDal.createTest(test);
    }

    getTests = () => {
        return this.testDal.getAllTests();
    }
}

module.exports = TestService;