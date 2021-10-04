const express = require('express');
const contacts = require('./services/contacts.js');
const contactSchema = require('./schema/contactschema.js');
const app = express();
app.use(express.json());

app.get('/contacts',(request, response) =>{
    response.header({"content-type" : "application/json"});
    response.status(200);
    response.send(contacts.getAllContacts());
});

app.get('/contacts/:contactName',(request,response) =>{
    response.header({"content-type" : "application/json"});
    console.log(request.params);
    if(request.params.contactName){
        let contact = contacts.getContactByName(request.params.contactName);
        response.status(200);
        response.send(contact);
    }
    else{
        response.status(404);
        response.send({"status" : "not found"});
    }    
})

app.post('/contacts', (request,response)=>{
    console.log(request.body);
    const schemaValidationResult = contactSchema.contactSchema.validate(request.body);
    if(schemaValidationResult.error){
        response.status(400);
        response.send({"status" : "error"});
    }
    let addStatus = contacts.addContact(request.body);
    if(addStatus){
        response.status(200);
        response.send({"status" : "Success"});
    }
    else {
        response.status(500);
        response.send({"status" : "Error"});
    }
});

app.put("/contacts/:contactName", (request,response)=>{
    console.log(request.params.contactName);

    const schemaValidationResult = contactSchema.contactSchema.validate(request.body);
    if(schemaValidationResult.error){
        response.status(400);
        response.send(schemaValidationResult.error);
    }


    let updateStatus = contacts.updateContact(request.params.contactName, request.body);
    if(updateStatus){
        response.status(200);
        response.send({"status" : "Success"});
    }
    else{
        response.status(500);
        response.send({"status" : "Error"});
    }
});

app.listen(8080,(err)=>{
    if(err){
        throw err;
    }
    console.log("listening to the port");
});