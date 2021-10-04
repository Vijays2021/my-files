const fs = require('fs');

fs.readFile('./input1.txt',
		{encoding:'utf8'},
		function(err, data) {
	if(err)
		console.log(err);
	else
		console.log(data);
});

const data = fs.readFileSync('./input2.txt',
			{encoding:'utf8'});

console.log(data);
