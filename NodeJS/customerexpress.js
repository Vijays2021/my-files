let customers = [
    {
        "customerName"   : "Vijay",
        "city"          : "Chennai",
        "email"         : "abc@xyz.com",
        "mobile"        : "9876432150"  
    },
    {
        "customerName"   : "Vikram",
        "city"          : "Chennai",
        "email"         : "abc@xyz.com",
        "mobile"        : "9876432150"
    }
];

let addCustomer = (customer) => {
    let addStatus = false;
    if(customer){
        customers.push(customer);
        addStatus = true;
    }
    return addStatus;
}

let getCustomerByName = (customerName) =>{
    let customer = customers.find((customer)=>{
        return customer.customerName === customerName
    });
    return customer;
}

let getAllCustomers = () =>{
    return customers;
}

let updateCustomer = (customerName, newCustomer) => {
    let updateStatus = false;
    let customer = customers.find((customer)=>{
        return customer.customerName === customerName
    });
    if(customer != undefined){
        customer.email = newCustomer.email;
        customer.mobile = newCustomer.mobile;
        updateStatus = true;
    }
    return updateStatus;
}

module.exports = {
    updateCustomer,
    getAllCustomers,
    addCustomer,
    getCustomerByName
}