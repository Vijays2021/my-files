
let customers = [
    { "code": 100, "name": "XYZ Electronics", "phone": "858585858", "city": "chennai" },
    { "code": 101, "name": "ABC Electronics", "phone": "858585858", "city": "chennai" }
];


module.exports.getCustomers = (request, response) => {
    response.writeHead(200, { "Content-type": "application/json" });
    //...........
    response.write(JSON.stringify(customers));
    response.end();
}


module.exports.getCustomer = (request, response, code) => {
    response.writeHead(200, { "Content-type": "application/json" });

    let customerResult = customers.find((customer) => {
        return customer.code == code;
    });

    response.write(JSON.stringify(customerResult));
    response.end();
}


module.exports.addCustomer = (request, response, requestBody) => {
    response.writeHead(200, { "Content-type": "application/json" });
    let inputData = JSON.parse(requestBody);
    console.log(inputData);
    if (inputData) {
        customers.push(inputData);

        response.end();
    }

}