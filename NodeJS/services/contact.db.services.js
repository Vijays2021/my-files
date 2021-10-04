const dbconnectconfig = require('../dbconfig/poolconfig.js');
const contactdb = require('../dbconfig/contact.db.js');

let addContact = (contact, processResult)=>{

    dbconnectconfig.getConnection((error,connection)=>{
        if(error){
            console.log(error);
            throw error;
        }
        else{
            contactdb.addContact(contact,connection,(error,result)=>{
                if(error){
                    processResult(error,null);
                }
                else{
                    processResult(null,result);
                    connection.release();
                }
            })
        }
    });
}

let getAllContact = (processResult)=>{

    dbconnectconfig.getConnection((error,connection)=>{
        if(error){
            processResult(error,null);
        }
        else{
            contactdb.getAllContact(connection,(error,result)=>{
                if(error){
                    processResult(error,null);
                }
                else{
                    processResult(null,result);
                    connection.release();
                }
            })
        }
    });    
}

let getContactByContactName = (contactName, processResult)=>{

    dbconnectconfig.getConnection((error,connection)=>{
        if(error){
            processResult(error,null);
        }
        else{
            contactdb.getContactByContactName(contactName, connection,(error,result)=>{
                if(error){
                    processResult(error,null);
                }
                else{
                    processResult(null,result);
                    connection.release();
                }
            })
        }
    });    
}


module.exports = {
    addContact,
    getAllContact,
    getContactByContactName
}