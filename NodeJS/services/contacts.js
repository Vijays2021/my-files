let contacts = [
    {
        "contactName"   : "Vijay",
        "designation"   : "VP",
        "organization"  : "ABC",
        "city"          : "Chennai",
        "email"         : "abc@xyz.com",
        "mobile"        : "9876432150"  
    },
    {
        "contactName"   : "Vikram",
        "designation"   : "Developer",
        "organization"  : "XYZ",
        "city"          : "Chennai",
        "email"         : "abc@xyz.com",
        "mobile"        : "9876432150"
    }
];

let addContact = (contact) => {
    let addStatus = false;
    if(contact){
        contacts.push(contact);
        addStatus = true;
    }
    return addStatus;
}

let getContactByName = (contactName) =>{
    let contact = contacts.find((contact)=>{
        return contact.contactName === contactName
    });
    return contact;
}

let getAllContacts = () =>{
    return contacts;
}

let updateContact = (contactName, newContact) => {
    let updateStatus = false;
    let contact = contacts.find((contact)=>{
        return contact.contactName === contactName
    });
    if(contact != undefined){
        contact.designation = newContact.designation;
        contact.mobile = newContact.mobile;
        updateStatus = true;
    }
    return updateStatus;
}

module.exports = {
    updateContact,
    getAllContacts,
    addContact,
    getContactByName
}
