const http = require('http');
const books = require('./library.js');

const portno = 8080;

const httpServer = http.createServer((request, response)=>{

    switch(request.method) {
        /*case "GET":
            if(request.url == "/books") {
                response.writeHead(200);
                books.fetchAll(request, response);
            }
            break;*/

        case "GET":
            if(request.url == '/books/abc'){
                response.writeHead(200);
                books.getByAuthor(request,response,'abc')
            }  
            break;



        case "POST":
            if(request.url =="/books") {
                let data = "";
                request.on("data", (dataPart)=>{
                    data = data + dataPart;
                });
                request.on("end", ()=>{
                    books.addBook(request, response, data);
                });
            }
            break;
    }
});

httpServer.listen(portno, (error)=>{
    if(error) 
        console.log("Error connecting to server.");

    console.log("Listening to incoming request:"+ portno);
})