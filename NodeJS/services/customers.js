let customers =  [
    {"code": 100, "name":"123 Enterprises", "phone": "909090909"},
    {"code": 101, "name":"456 Enterprises", "phone": "898989898"}
];

module.exports.getCustomers = (request,response) =>{
    // writeHead is an in-built property of http module
    response.writeHead(200,{"Content-type":"application/json"}); // status code, status msg
    response.write(JSON.stringify(customers));
    response.end();
}

module.exports.getCustomer = (request,response, code) =>{
    response.writeHead(200,{"Content-type":"application/json"});

    let customerResult = customers.find((customer)=>{
        return customer.code == code;
    });

    response.write(JSON.stringify(customerResult));
    response.end();
}

module.exports.addCustomer = (request,response, requestBody) =>{
    response.writeHead(200,{"Content-type":"application/json"});

    let inputData = JSON.parse(requestBody);
    console.log(inputData);
    if(inputData){
        customers.push(inputData);
        
        response.end();
    }
    
}
