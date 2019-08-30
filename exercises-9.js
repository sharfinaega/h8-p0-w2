function shoutOut() {
    return "Halo Function"
}
console.log(shoutOut());
  
var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply(num1, num2);

 function calculateMultiply(num1, num2) {
     return num1 * num2
 }
   console.log(calculateMultiply(num1, num2));

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";
var fullSentence = processSentence(name,age,address,hobby)

function processSentence(name,age,address,hobby) {
    return ('Nama saya '+ name +','+'Umur saya '+ age +','+'Alamat saya'+" "+address+ ' '+'dan saya punya hobi yaitu'+' '+hobby)

}

console.log(processSentence(name,age,address,hobby))
