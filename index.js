var server = require("./server");
var router = require("./router");
var request_handlers = require("./request_handlers");

var handle = {}
handle["/"] = request_handlers.home;
handle["/add"] = request_handlers.add;

server.start(router.route, handle);
