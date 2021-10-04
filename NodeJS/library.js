let books=[
	{
		"bookName" 	: "HTML CSS JS", "author"		: "xyz", "published date" 	: "10/08/1999", "edition"		: "first", "availableStatus"	: "NS"		
	},
	{
		"bookName" 	: "NodeJS", "author"		: "abc", "published date" 	: "10/08/1999", "edition"		: "first", "availableStatus"	: "Yes"
	}
];


module.exports.fetchAll = (request,response) =>{
    // Fetch all book records
    response.writeHead(200,{"Content-type":"application/json"}); // status code, response content type
    response.write(JSON.stringify(books));
    response.end();
}

// Fetch book details by author

module.exports.getByAuthor = (request,response, author) =>{
    response.writeHead(200,{"Content-type":"application/json"});

    let bookResult = books.find((book)=>{
        return book.author == author;
    });

    response.write(JSON.stringify(bookResult));
    response.end();
}

module.exports.addBook = (request,response, requestBody) =>{
    response.writeHead(200,{"Content-type":"application/json"});

    let inputData = JSON.parse(requestBody);
    console.log(inputData);
    if(inputData){
        books.push(inputData);
        
        response.end();
    }
    
}
