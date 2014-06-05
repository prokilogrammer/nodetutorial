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
             '<input type="Submit" value="Submit">';

  return html;
}

function add(data)
{
  var num1 = parseFloat(data[num1ParamName]);
  var num2 = parseFloat(data[num2ParamName]);

  if (!isNaN(num1) && !isNaN(num2))
  {
    return num1 + num2;
  }

  throw "Invalid input";
}

exports.getForm = getForm;
exports.add = add;
