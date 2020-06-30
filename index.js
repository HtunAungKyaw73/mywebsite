const fs = require('fs');

const path = require('path');

const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
            fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
                if(err) throw err;
                res.writeHead(200, { 'Content-Type':'text/html'});
                res.write(content);
                res.end();
            })
    }
});

const PORT = process.env.PORT || 4004;

server.listen(PORT , () =>{
    console.log("Server running on PORT -> " + PORT);
})

