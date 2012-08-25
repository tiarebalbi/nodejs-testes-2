var http = require("http");
var propriedades = require("./config/properties.js");

console.log(propriedades);

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("Testes 2 a b c d e");
}).listen(propriedades.config.port, propriedades.config.server);


process.on("exit", function() {
	console.log("Aplicação finalizada");
});

console.log("Server rodando no endereço x");