var addModule = require('../add.js');

function testAdd(test)
{
  // Test the simplest case where both numbers are valid
  test.equal(4, addModule.add(2, 2));
  test.equal(5, addModule.add(6, -1));
  test.equal(6, addModule.add(4, 2));

  // Test with invalid inputs. Must throw an exception
  test.throws(function() {addModule.add("hi", "World");});
  test.throws(function() {addModule.add(1, "World");});

  test.done();
}

function testExtractNumbers(test)
{
  // Test the happy case first
  var data = {}
  data[addModule.num1ParamName] = "1";
  data[addModule.num2ParamName] = "2";
  test.equals("1", addModule.extractNumber1(data));
  test.equals("2", addModule.extractNumber2(data));

  // Test with missing parameters
  var noNum1 = {}
  noNum1[addModule.num2ParamName] = "2";
  test.throws(function() {addModule.extractNumber1(noNum1); });
  test.equals("2", addModule.extractNumber2(noNum1));

  var noNum2 = {}
  noNum2[addModule.num1ParamName] = "1";
  test.equals("1", addModule.extractNumber1(noNum2));
  test.throws(function() {addModule.extractNumber2(noNum2);});

  test.done();
}

exports.testAdd = testAdd;
exports.testExtractNumbers = testExtractNumbers
