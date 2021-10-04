let myPromise = function() {
    return new Promise((resolve, reject) =>{
        let status = false;

        if (!status){
            resolve("Success");
        }
        else {
            reject("Error");
        }
    })
} 
let promised = myPromise();
let promisedResult = promised.then();