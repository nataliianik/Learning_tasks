
/*Write a program in C to display the first 10 lucus numbers. Go to the editor
Expected Output :
The first 10 Lucus numbers are:
2 1 3 4 7 11 18 29 47 76*/
'use strict';

function lucusNumbers() {
    var number1 = 2;
    var number2 = 1;
    var number3;

    for (var i = 1; i <= 10; i++) {

        number3 = number1 + number2;
        number1 = number2;
        number2 = number3;
        console.log(number3)
    }
}

lucusNumbers()

/*console.log(number3)
var number4 = number2 + number3;
console.log(number4)
var number5 = number3 + number4;
console.log(number5)
var number6 = number4 + number5;
console.log(number6)
var number7 = number5 + number6;
console.log(number7)
var number8 = number6 + number7;
console.log(number8)
var number9 = number7 + number8;
console.log(number9)
var number10 = number8 + number9;
console.log(number10)

}*/



