var bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())

app.get('/',function(req, res) {
	res.send('Hellos World!')
	})
app.post('/readings',function(req, res){
    console.log(req.body.test);
    res.send(req.body.test.level2 +'Hello');
})
app.listen(process.env.PORT,function () {
	console.log('Example app listening on port 3000!')
	})