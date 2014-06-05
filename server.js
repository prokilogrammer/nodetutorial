/*
 * This module has functions to start and manage a basic HTTP webserver.
 */

var http = require("http");
var url  = require("url");

// Function to Start HTTP server
function start(route, handle) 
{

  // Callback to process incoming requests
	function onRequest (request, response) 
  {
    // Extract URL and parameters 
    var URLData = url.parse(request.url, true);
    var pathname = URLData.pathname;
    var GETData = URLData.query;

    // Pass on the request to the appropriate implementation through the router
    route(handle, pathname, response, GETData);
	}

  // Heroku passes the port as an environment variable. If it is not present,
  // default to port #5000
  var port = Number(process.env.PORT || 5000);
  console.log("Starting server at port: " + port);
	http.createServer(onRequest).listen(port);
}

exports.start = start;
