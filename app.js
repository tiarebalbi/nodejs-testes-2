var http = require("http");
var propriedades = require("./config/properties.js");

console.log(propriedades);
var i = 0;
var stop = false;

var db = require("mongojs").connect(propriedades.config.databaseUrl, propriedades.config.collections);


var aa = function(tempo) {
	var memoria = process.memoryUsage();
	db.memoria.save(memoria, function(erro, salvo) {
		if( erro || !salvo ) console.log("User not saved");
  		else console.log("User saved" + salvo);
	});
	console.log();
	
	setTimeout(function() {
		i = i +1;	

		if(stop == false) {
			aa();	
		}
		
		if(i == 10) {
			console.log("cheguei a 10")	;
			stop = true;
			db.memoria.find(function(erro, valores) {
				console.log(valores);

			});
		}
	}, 1000);
}

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("Testes 2 a b c d e");

	aa();

}).listen(propriedades.config.port, propriedades.config.server);

console.log("Server rodando no endereço: http://" + propriedades.config.server + ":" + propriedades.config.port);