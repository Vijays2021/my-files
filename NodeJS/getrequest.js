const http = require('http');
const https = require('https');

//making http get request using native http module request() method.

const httpOptions = {
    hostname : 'jsonplaceholder.typicode.com',
    path : '/users/1',
    method : 'GET'
}

http.request(httpOptions , (response) => {

    let data = "";
    response.on("data",(resPart)=>{

        data += resPart;
    })

    response.on("end", ()=>{
        console.log(data);
        data = JSON.parse(data);
        console.log(data.name + "," + data.email);
    })
}).end();