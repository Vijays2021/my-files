let products = [
    {"productId":"p001", "productName":"Pen", "unitPrice": "40", "quantity":"20","category":"stationary"},
    {"productId":"p002", "productName":"Pencil", "unitPrice": "40", "quantity":"20","category":"stationary"},
     {"productId":"p003", "productName":"Eraser", "unitPrice": "40", "quantity":"20","category":"stationary"}
];

module.exports.fetchAllProduct = (request,response) =>{

    response.writeHead(200,{"Content-type":"application/json"});
    response.write(JSON.stringify(products));
    response.end();
}

module.exports.getProduct = (request,response,productId)=>{
    response.writeHead(200);
    let productResult = products.find((product)=>{
        return product.productId == productId;
    })
    response.write(JSON.stringify(productResult));
    response.end();
}


