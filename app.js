var express = require('express');
const shorten = require('./shorten/shorten');
const bodyParser = require('body-parser');
var app = express();

app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({    
    extended: true
}));

app.get('/', function (request, response) {
    /*let responseUrl = ''
    shorten.shorten('http://google.com').then((res) => {
        console.log(res);
        responseUrl = res
    }).catch((err) => {
        console.log(err);
    });
    request.send(responseUrl);*/
});

app.post('/', async function(request, response){
    let responseUrl = {};
    await shorten.shorten(request.body.url).then((res) => {
        responseUrl['url'] = res
        return responseUrl;
    }).catch((err) => {
        console.log(err);
    });
    response.send(responseUrl);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function(request, response) {
    const crypto = require('crypto-js');
    const jwt = require('jsonwebtoken');


    const data = { 
        "id":"oooooxxxxx",
    };

    const key = crypto.SHA256(data.id).toString(crypto.enc.Hex);
    console.log(key)

    const payload = {
        key: key,
        name: "justin"
      };
  
    const token = jwt.sign(payload, 'qwaszxerdfcvtyghbnuijkmolp');
    console.log(token)
});