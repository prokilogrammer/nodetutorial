/*
 * This module has functions to handle requests to various URLs
 */

var addModule = require('./add.js');

// This is the homepage
function home(response, data)
{
  response.writeHead(200, {"Content-Type": "text/html"}); 
  response.write("Please input the numbers to be added: <br/>");
  response.write(addModule.getForm());
  response.end();
}


// Endpoint to add two numbers
function add(response, data)
{
  response.writeHead(200, {"Content-Type": "text/html"});

  try
  {
    num1 = addModule.extractNumber1(data);
    num2 = addModule.extractNumber2(data);

    var result = addModule.add(num1, num2);
    response.write("Result of addition is: " + result);
  }
  catch(ex)
  {
    response.write(ex.name + ": " + ex.message);
  }

  response.write("<br/> <br/> <a href='/'> Go Home </a>");
  response.end();
}

exports.home = home;
exports.add = add;
