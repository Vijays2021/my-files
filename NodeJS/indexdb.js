const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const contactList = require('./services/contact.db.services');
const schema = require('./schema/contactSchema');
const tokenModule = require('./jwtconfig/token');


const app = express();

app.use(express.json());//express.json() => built-in middleware => parses incoming request with json payload
//app.use(tokenModule.verifyToken());
app.use(cookieParser());


app.get("/login",(request,response)=>{

    if(request.query.username === "htcuser" && request.query.password === "123Welcome"){
        
        const token = tokenModule.tokenGenerator({username:request.query.username});
        response.cookie("jwt",token,{httpOnly:true});
        response.status(200).send({"Auth":"Authorized", "token":token});
    }
    else{
        response.status(400).send({"Auth":"Access denied"});
    }

})

app.get('/contacts',tokenModule.verifyToken, (request,response)=>{

    response.header({"content-type":"application/json"});
    response.status(200);
    response.send(contactList.getAllContact());
});

app.get('/contacts/:contactName',(request,response)=>{
    response.header({"content-type":"application/json"});
    //console.log(request.params.contactName);
    if(request.params.contactName){
        let contact = contactList.getContactByContactName(request.params.contactName);
        response.status(200);
        response.send(contact);
    }
    else{
        response.status(400);
        response.send({"status":"not found"});
    }
});

app.post("/contacts",(request,response)=>{

    const contactValidation = schema.contactSchema.validate(request.body);
    console.log(contactValidation);
    if(contactValidation.error){
        response.status(400);
        let errorMessages = response.send(contactValidation.error.details.map((err)=>{
            return err.message;
        }));
        response.send(errorMessages);
        return;
    }
        
    
    let contact = contactList.addContact(request.body, (err,data)=>{
        if(err){
            response.status(500);
            response.send({"status" : "error"});
            return;
        }
        else{
            response.status(200);
            response.send({"status" : data});
        }

    });
});

app.put('/contacts/:contactName',(request,response)=>{
    console.log(request.params.contactName);
    console.log(request.body);
    let contact = contactList.updateContact(request.params.contactName,request.body);
    if(contact){
        response.status(200);
        response.send({"status":"Updated"});
    }
    else{
        response.status(400);
        response.send({"status":"Not Found"});
    }
});

app.delete('/contacts/:contactName',(request,response)=>{

    let contact = contactList.deleteContact(request.params.contactName);
    response.send(contact);

});

const PORT = process.env.PORT || 8080;
app.listen(PORT , (error)=>{
    if(error)
        throw error;
    console.log("Listening on port 8080");
})