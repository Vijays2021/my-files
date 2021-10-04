const http = require('http');

const customers = require('./services/customers.js');

const portno =2200;

const httpServer = http.createServer((request,response)=>{

   switch(request.method){
       case "GET":
           if(request.url=="/customers"){
           response.writeHead(200);
           customers.getCustomers(request,response);
           }
           break;
       case "POST":
           if(request.url == "/customers"){
                let data = "";
                request.on("data", (dataPart)=>{
                     data = data + dataPart;            
                });
                request.on("end",()=>{
                    customers.addCustomer(request,response,data);
                });            
           }
           break;
   }

});

httpServer.listen(2200,(error)=>{
    if(error)
        console.log("Error connecting to the server");
    console.log("Listening to incoming request");    
})