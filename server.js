const express = require('express');
const app = express();
const https = require('https')
const fs = require('fs');
const port = 3000;

let options = {
    key : fs.readFileSync('sslcert/server.key'),
    cert : fs.readFileSync('sslcert/server.cert')
}


app.use(express.static('public'));

https.createServer(options, app).listen(port, () => {
    console.log(`Server is running on port ${port}`);
})



// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// })