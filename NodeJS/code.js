function validateOnlyTextField(element) {
    var str = element.value;
    if(!(/^[a-zA-Z, ]+$/.test(str))){
        // console.log('String contain number characters');
        str = str.substr(0,  str.length -1);
        element.value = str;
        console.log(str);
    }
}
validateOnlyTextField('Vijay');