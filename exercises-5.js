var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

word = word +' '+ second +' '+ third +' '+ fourth +' '+ fifth +' '+ sixth +' '+ seventh;
console.log(word);


var word = 'wow JavaScript is so cool'
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[3] + word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
var thirdWord = word[15] + word[16];
var fourthWord = word[17] + word[18] + word[19] + word[20];
var fifthWord = word[21] + word[22] + word[23] + word[24];

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word.substring(0, 3);
var secondWord3 = word.substring(3, 13);
var thirdWord3 = word.substring(15, 17);
var forthWord3 = word.substring(17, 20);
var fifthWord3 = word.substring(21, 25);


console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);


var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word.substring(0, 3);
var secondWord4 = word.substring(3, 13);
var thirdWord4 = word.substring(15, 17);
var fourthWord4 = word.substring(17, 19);
var fifthWord4 = word.substring(21, 25);


var firstWordLength = exampleFirstWord4.length;
var secondWordLength = secondWord4.length;
var thirdWordLength = thirdWord4.length;
var fourthWordLength = fourthWord4.length;
var fifthWordLength = fifthWord4.length;


console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);

