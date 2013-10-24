var express = require('express'),
	path = require('path'),
	fs = require('fs');

//Express Setup
var app = express();
app.set('port', process.env.NODE_HTTP_PORT || 3000);
app.use(express.bodyParser());
app.use(express.static(path.resolve(__dirname, 'public')));
app.listen(app.get('port'), function(){
console.log("website is running on port %s", app.get('port'));
});




