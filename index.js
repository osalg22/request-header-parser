var express = require("express");
var app = express();

app.set('port', (process.env.PORT || 8080));

app.get('/', function(req, res) {
    
    var output = {
        "ipaddress": req.get("x-forwarded-for"),
        "language": req.get("accept-language"),
        "software": req.get("user-agent")
    };
    
    res.json(output);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});