const express = require('express');
const app = express();
var mysql = require('mysql');

var con = mysql.createConnection({host:'localhost',user:'root',password:'1234',database:'react1'});

const bodyParser = require('body-parser');
const PORT =4200;
var cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.post('/register',function(req,res){
	var name = req.body.name;
    var password=req.body.password;
    var email=req.body.email;
	var mobileno=req.body.mobileno;
	var statename=req.body.statename;
    console.log(name +" "+password);
	var sql="insert into users  values ('"+name+"','"+password+"','"+email+"','"+mobileno+"','"+statename+"')";
	con.query(sql,function(err,rows){
		if (err) throw err;
		console.log("Record Added");
	});
});

app.post('/login',function(req,res){
	var name = req.body.name;
    var password=req.body.password;
	var sql="select * from  users where name='"+name+"' and password='"+password+"';"
	con.query(sql,function(err,rows){
		if (err) throw err;
		if(rows.length){console.log("login successful");}
		else{console.log("try again");}
		res.json(rows);
	});
});

app.get('/getstates/:id',function(req,res){
	
	var sql="select * from states where countryid='"+req.params.id+"' ";
	con.query(sql,function(err,rows){
		if (err) throw err;
		console.log(rows);
		res.json(rows);
	});
});

app.get('/getcountries',function(req,res){
	
	var sql="select * from countries ";
	con.query(sql,function(err,rows){
		if (err) throw err;
		console.log(rows);
		res.json(rows);
	});
});

app.get('/getcities/:id',function(req,res){
	
	var sql="select * from cities where stateid='"+req.params.id+"' ";
	con.query(sql,function(err,rows){
		if (err) throw err;
		console.log(rows);
		res.json(rows);
	});
});
app.listen(PORT,function(){
	
	console.log('server running on port: ',PORT);
});
