//parse function
//input:  num:number
//output: string
//effect: If it is an integer, convert input to the string representing the phonetic equivalent.
//        Else throw an exception.
function parse_num(num) {
    var text = "";
    do {
        switch (num%10) {
            case 0:
                text = "Zero" + text;
                break;
            case 1:
                text = "One" + text;
                break;
            case 2:
                text = "Two" + text;
                break;
            case 3:
                text = "Three" + text;
                break;
            case 4:
                text = "Four" + text;
                break;
            case 5:
                text = "Five" + text;
                break;
            case 6:
                text = "Six" + text;
                break;
            case 7:
                text = "Seven" + text;
                break;
            case 8:
                text = "Eight" + text;
                break;
            case 9:
                text = "Nine" + text;
                break;
            default: 
                throw "Invalid Input";
        }
        num = (num - num%10)/10;

    } while (num > 0);
    return text;
}

//input:  num_array:string array
//output: string
//effect: Convert input to the string representing the phonetic equivalent
function parse(num_array){
    var text = "";
    for (var i = 0; i<num_array.length; i++){      
        try {
            text += parse_num(Number(num_array[i]));
        }
        catch(err){
            text += err;
        }
        if (i != num_array.length - 1){
            text += ",";
        }
    }
    return text;
}
//parse command line argument and store in an array
var input_array = process.argv.slice(2);
//parse input and output to stdout
console.log(parse(input_array));
