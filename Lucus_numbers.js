
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





