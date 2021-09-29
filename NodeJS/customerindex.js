const express = require('express');
const customers = require('./services/customerexpress.js');
const schema = require('./schema/customerschema.js');
const app = express();
app.use(express.json());

app.get('/customers',(request, response) =>{
    response.header({"content-type" : "application/json"});
    response.status(200);
    response.send(customers.getAllCustomers());
});

app.get('/customers/:customerName',(request,response) =>{
    response.header({"content-type" : "application/json"});
    if(request.params.customerName){
        let customer = customers.getCustomerByName(request.params.customerName);
        response.status(200);
        response.send(customer);
    }
    else{
        response.status(404);
        response.send({"status" : "not found"});
    }    
})

app.post('/customers', (request,response)=>{
    response.header({"content-type" : "application/json"});
    console.log(request.body);
    const schemaValidationResult = schema.customerSchema.validate(request.body);
    if(schemaValidationResult.error){
        response.status(400);
        response.send(schemaValidationResult.error.details.map((err)=>{
            return err.message;
        }));
        return;
    }
    let addStatus = customers.addCustomer(request.body);
    if(addStatus){
        response.status(200);
        response.send({"status" : "Success"});
    }
    else {
        response.status(500);
        response.send({"status" : "Error"});
    }
});

app.put("/customers/:customerName", (request,response)=>{

    const schemaValidationResult = customerSchema.customerSchema.validate(request.body);
    if(schemaValidationResult.error){
        response.status(400);
        response.send(schemaValidationResult.error);
        return;
    }


    let updateStatus = customers.updateCustomer(request.params.customerName, request.body);
    if(updateStatus){
        response.status(200);
        response.send({"status" : "Success"});
    }
    else{
        response.status(500);
        response.send({"status" : "Error"});
    }
});

app.listen(3000,(err)=>{
    if(err){
        throw err;
    }
    console.log("listening to the port");
});