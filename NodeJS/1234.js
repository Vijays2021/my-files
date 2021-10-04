const express = require('express');
const customers = require('./services/customerexpress.js');
const customerSchema = require('./schema/customerschema.js');
const app = express();
app.use(express.json());

app.post('/customers', (request,response)=>{
    console.log(request.body);
    /*const schemaValidationResult = customerSchema.customerSchema.validate(request.body);
    if(schemaValidationResult.error){
        response.status(400);
        response.send({"status" : "error"});
    }*/
    
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



app.listen(3000,(err)=>{
    if(err){
        throw err;
    }
    console.log("listening to the port");
});