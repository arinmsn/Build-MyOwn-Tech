const assert = require("assert");
const { sumSquareDifference } = require("./sumSquareDifference");


// Test cases
describe('Calculate sum square difference correctly', function () {
   
    it('should return a number', function () {
        const result = sumSquareDifference(10);
        assert.strictEqual(typeof result, 'number');
    });

    it('should handle small positive numbers properly', function () {
        assert.strictEqual(sumSquareDifference(1),0);
        assert.strictEqual(sumSquareDifference(5),170);
        assert.strictEqual(sumSquareDifference(3),22);
        assert.strictEqual(sumSquareDifference(7),644);
        assert.strictEqual(sumSquareDifference(10), 2640);
    });

    it('should handle larger positive numbers properly', function () {
        assert.strictEqual(sumSquareDifference(20),41230);
        assert.strictEqual(sumSquareDifference(100), 25164150);
        assert.strictEqual(sumSquareDifference(500),15645770750);
    });

});
