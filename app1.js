var http = require('http');
var dt = require('./moduleSatu.js');
var fb = require('./modulDua.js');
var url = require('url');
var fs = require ('fs');

var a = ('1', '1', '2', '3' ,'5', '8');


http.createServer(function(req,res){
	fs.readFile('demofile.html',function(err,data){

	res.writeHead(999,{'Content-Type':'text/html'});
	
	res.write("The date time are currently: "+dt.myDateTime());
	res.write("<br>The fibonacci are : "+fb.fibonacci(a));

	res.write("<br> so this is the url :"+req.url)+"<br>";
	res.write(data);

	var q = url.parse(req.url,true).query;
	var txt = q.year +" "+q.month ;
	res.end("<br> and result = "+txt);
	

	fs.appendFile('moduleTiga.html','<html>coba lagi</html>',function(ft){
		if(ft) throw ft;
		console.log('Saved!');
	});

});



	//res.end("<br><br>SUccess!");
}).listen(3800);
console.log('Port 3800 Online!');