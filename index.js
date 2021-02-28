const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const backend_inclues = path.join(__dirname,'/views/backend_includes');
//to set view engine 
app.set('view engine','hbs');
hbs.registerPartials(backend_inclues);

// here we are send dynamic data to the view

app.get('/',function(req,res){
	console.log(backend_inclues);
	res.render('admin/index1',{
		'heading':'This is my first dynamic contant'
	});
}).listen(6060);

app.get('/about',function(req,res){
	console.log(backend_inclues);
	res.render('admin/about',{
		'heading':'This is my first dynamic contant'
	});
});
app.get('*',function(req,res){
	//res.writeHead(404, {'Content-Type': 'text/html'}); 
	res.render('404');
});
/*app.get('/',function function_name(req,res) {
	res.send('Hello express');
	console.log('welcome to express js')
}).listen(6000);*/

/*app.get('/about', function (req, res) {
  res.send('Got a get request');
});

app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params);
});
app.use('/birds', birds);*/