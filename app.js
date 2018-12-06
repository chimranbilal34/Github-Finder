//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/public'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/public'));
});

// Start the app by listening on the default Heroku port
var port = process.env.PORT || 8000;
app.listen(port);