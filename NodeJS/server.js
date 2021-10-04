const http = require('http');

const portno =2200;

const httpServer = http.createServer((request,response)=>{
   // console.log(request.method);
   // console.log(request.url);

   switch(request.method){
       case "GET":
           if(request.url=="/employees"){
               //contact database from here and fetch the employee records
               //elastic search...
           
           response.writeHead(200);
           response.write(JSON.stringify({id:12, name:"Vijay",city:"Chennai",contact:"000000"}));
           response.end();
           }
       case "POST":
       case "PUT":
       case "DELETE":
   }

});

httpServer.listen(2200,(error)=>{
    if(error)
        console.log("Error connecting to the server");
    console.log("Listening to incoming request");    
})