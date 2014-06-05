/*
 * This module has functions to display the Add page, perform the addition and 
 * return results back to the user
 */

var num1ParamName = "number1"
var num2ParamName = "number2"

function getForm()
{
  var html = '<form name="add" action="/add" method="GET">' +
             'Number 1: <input type="text" name="' + num1ParamName + '"/> <br/>' +
             'Number 2: <input type="text" name="' + num2ParamName + '"/> <br/>' +
             '<input type="Submit" value="Add">';

  return html;
}

function extractNumber1(urldata)
{
  if (num1ParamName in urldata)
  {
    return urldata[num1ParamName];
  }

  throw new Error("Missing " + num1ParamName);
}

function extractNumber2(urldata)
{
  if (num2ParamName in urldata)
  {
    return urldata[num2ParamName];
  }

  throw new Error("Missing " + num2ParamName);
}

function add(num1, num2)
{
  // Make sure we are dealing with numbers
  var num1 = parseFloat(num1);
  var num2 = parseFloat(num2);

  if (!isNaN(num1) && !isNaN(num2))
  {
    return num1 + num2;
  }

  throw new Error("Invalid input");
}

// Export param names for testing
exports.num1ParamName = num1ParamName;
exports.num2ParamName = num2ParamName;

// Export methods
exports.getForm = getForm;
exports.extractNumber1 = extractNumber1;
exports.extractNumber2 = extractNumber2;
exports.add = add;

