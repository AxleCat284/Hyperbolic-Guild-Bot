
const express = require('express');
const chalk = require ('chalk'); 
const server = express();
server.listen(1439, async () => { console.log(chalk.bgCyanBright.black`[${await getCurrentTime()}] Website >` + ' ' + chalk.cyanBright`Website Ready on port 1439`) })
async function getCurrentTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
}
server.all('/', (req, res) => {
  res.send(` `)

})


var http = require('http');
var fs = require('fs');
const PORT=1382; 
fs.readFile('./src/web/index.html', function (err, html) {
    if (err) throw err;    
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});
 