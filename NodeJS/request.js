const request = require('request');

const options = {
    url: 'https://jsonplaceholder.typicode.com/users' ,
    method: 'GET'
}

request.get(options,(response,error)=>{
    if (error){
        console.log(error);

    }
    console.log(response);
});