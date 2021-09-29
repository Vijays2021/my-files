const axios = require('axios');
let promiseObject = axios.get('https://jsonplaceholder.typicode.com/posts/1');

promiseObject.then((response)=>{
    console.log(response.data);
})
.catch((error)=>{
    if(error.response)
        console.log(error.response.statusCode+" "+error.response.statusText);
    else if(error.request)
        console.log(error.request.statusCode+" "+error.request.statusText);
    else
        console.log(error.message);    
})
.finally(()=>{
    console.log("Data fetched");
})