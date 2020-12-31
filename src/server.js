const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(__dirname + '/public'));
// app.get('/', function (req, res) {
//     res.sendFile('..'); 
// });

// app.post('/submit-student-data', function (req, res) {
//     var name = req.body.firstName + ' ' + req.body.lastName;
    
//     res.send(name + ' Submitted Successfully!');
// });

app.listen(PORT, function () {
    console.log(`Servidor rodando na porta ${PORT} ...`);
});