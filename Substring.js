/*Write a C program to find the length of the longest substring of a given string without repeating characters. Go to the editor
Expected Output:
 Original String: xyzxyzyy  
 Length of the longest substring without repeating characters: 3*/

function stringHasOnlyUniqueCharacters(string) {
    var result = true; // boolean
    for (var j = 0; j < string.length; j++) {
        var character = string[j];
        for (var i = j + 1; i < string.length; i++) 
        {
            var anotherCharacter = string[i];
            if (character == anotherCharacter) {
                result = false;
                break;
            }
        }
    }
    return result;
}

function subStrings(string) {
    var check;
    var biggestUnique = ' ';
    var substring = ' ';
    var unique = ' ';
    for (var j = 0; j < string.length; j++) {
        for (var i = j + 1; i <= string.length; i++) {
            substring = string.slice(j, i);
            //console.log(substringCurrent);
            check = stringHasOnlyUniqueCharacters(substring);
            if (check == true) {
                unique = substring; // output of a unique string 
                // console.log(current);
                if (unique.length > biggestUnique.length) {
                    biggestUnique = unique;
                }
            }
        }
    }
    console.log(biggestUnique);
    return biggestUnique;
}
subStrings('абвгллдежз');

