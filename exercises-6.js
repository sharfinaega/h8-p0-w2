var nama1 = 'I love coding'
var angka1 = 0

console.log('LOOPING PERTAMA');
while(angka1 < 20 ) {
    angka1 = angka1 + 2
    console.log(angka1 +' '+'-'+' ' + nama1);
}

var nama2 = 'I will become fullstack developer'
var angka2 = 22
console.log('LOOPING KEDUA');
while(angka2 > 2) {
    angka2 = angka2 - 2
    console.log(angka2 +' '+'-'+' '+ nama2);
}

console.log('LOOPING PERTAMA');
for(angka1 = 1; angka1 < 21; angka1 = angka1 + 1) {
    console.log(angka1 +' '+'-'+' '+ nama1);
}

console.log('LOOPING KEDUA')
for(angka2 = 20; angka2 > 0; angka2 = angka2 - 1) {
    console.log(angka2 +' '+'-'+' '+ nama2);
}


 for(i = 0; i <= 100; i = i + 1) {
    console.log(i);
  if(i % 2 == 0) {
         console.log('genap');
        }
  else if(i % 2 != 0) {
      console.log('ganjil');
    }
 }
 
var number = 0

while(number < 100) {
    number = number + 2
    console.log(number);

if(number % 3 == 0) {
    console.log('kelipatan 3');
}
}
var number2 = 0
while(number2 < 100) {
    number2 = number2 + 5
    console.log(number2);
 
if(number2 % 6 == 0) {
        console.log('kelipatan 6');
    }
    else{
        console.log('');
    }
}
var number3 = 0
while(number3 < 100) {
    number3 = number3 + 9
    console.log(number3);

    if(number3 % 10 == 0) {
        console.log('kelipatan 10');
    }
    else{
        console.log('');
    }
}

 
 
