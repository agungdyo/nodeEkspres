var express = require('express');
var bodyParse = require('body-parser');
var app = express();


app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());

app.get('/get',function(req,res){
	res.json({name:'Agung Meisd Prasetyo',
				notelpon: '123'});
});

app.post('/post',function(req,res){
	var name = req.body.name;
	var notelpon = req.body.notelpon;
	res.json({name:name,notelpon:notelpon});
});

app.listen(3800);
console.log('node Js Running Port 3800');   