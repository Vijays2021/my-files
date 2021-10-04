const http = require('http');
const products =require('./product.js');

const httpServer = http.createServer((request,response)=>{
    switch(request.method){
        /*case "GET":
            if (request.url == '/products'){
                response.writeHead(200);
                products.fetchAllProduct(request,response);
            }
            break;*/
        case "GET":
            if(request.url == '/products/p001'){
                response.writeHead(200);
                products.getProduct(request,response,'p001')
            }  
            break; 
    }
});

httpServer.listen(8000,(error)=>{
    if(error){
        console.log("Error occurs!!!");
    }
    console.log("Waiting for request");

})