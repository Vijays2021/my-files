let addContact = (contact, connection, processResult)=>{

    connection.query('INSERT INTO contacts SET ?',[contact],(error,result)=>{
        if(error){
            processResult({'error':'Connection error'}, null);
        }
        if(result.affecctedRows == 1){
            processResult(null, true);
        }
    });

}

let getAllContact = (connection,processResult)=>{

    connection.query({
        sql:'SELECT * FROM contact',
        timeout : 20000
    },(err,result)=>{
        if(err)
            processResult(err,null);
        else
            processResult(null,result);
    });
}

let getContactByContactName = (contactName, connection, processResult)=>{

    connection.query({
        sql:'SELECT * FROM contact WHERE contactname = ?',
        timeout : 20000,
        values : [contactName]
    },(err,result)=>{
        if(err)
            processResult(err,null);
        else
            processResult(null,result[0]);
    });
}

module.exports = {
    addContact,
    getAllContact,
    getContactByContactName
}