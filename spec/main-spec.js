const main = require('../main/main');

describe('main()', () => {
    it("works for simple literals and variables", function () {
        let randomNum = '1234';
        let input = '1234'
        let result = main(randomNum,input);
        expect(result).toEqual('4A0B');
    });
    it("works for simple literals and variables", function () {
        let randomNum = '1234';
        let input = '4321'
        let result = main(randomNum,input);
        expect(result).toEqual('0A4B');
    });
});
