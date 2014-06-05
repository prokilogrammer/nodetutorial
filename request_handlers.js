/*
 * This module has functions to handle requests to various URLs
 */

var addModule = require('./add.js');

// This is the homepage
function home(response, data)
{
  response.writeHead(200, {"Content-Type": "text/html"}); 
  response.write(addModule.getForm());
  response.end();
}


// Endpoint to add two numbers
function add(response, data)
{
  response.writeHead(200, {"Content-Type": "text/html"});

  try
  {
    var result = addModule.add(data);
    response.write("Result of addition is: " + result);
  }
  catch(ex)
  {
    response.write(ex);
  }

  response.write("<br/> <br/> <a href='/'> Go Home </a>");
  response.end();
}

exports.home = home;
exports.add = add;
