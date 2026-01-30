// function declaration


// direct using the variable
function greet1 (a){
    console.log("Hi agrima ", a);
}
greet1(19);    //output => Hi agrima  19



// direct using arguments
function greet2 (a){
    console.log("Hi agrima ", arguments);
}
greet2("Gupta", 19, "dummy text");   //output => Hi agrima  [Arguments] { '0': 'Gupta', '1': 19, '2': 'dummy text' }



//direct using arguments[index]
function greet3 (a){
    console.log("Hi agrima ", arguments[1]);
}
greet3("Gupta", 19, "dummy text");   //output => Hi agrima  19



//using no. of arguments
function greet4 (a){
    console.log("Hi agrima ", arguments.length);
}
greet4("Gupta", 19, "dummy text");   //output => Hi agrima  3


function noOfArgs(){
    console.log("No. of arguments passed: ", arguments.length);
}
noOfArgs(1, 2, 3, 4, 5);  //output => No. of arguments passed:  5


//using REST OPERATOR
function findArgs(a,b,...Args){ // to do this we need exactly 3 dots before the last parameter
    //...Args is rest operator which takes all the remaining arguments as an array
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("Args: ", Args);
    console.log(a, b, ...Args);
}
findArgs(1, 2, 3, 4, 5, 6, "agrima gupta"); 
//output =>
// a:  1
// b:  2
// Args:  [ 3, 4, 5, 6, 'agrima gupta' ]
// 1 2 3 4 5 6 'agrima gupta'