
for(var i = 0; i < 5; i++) {
    console.log('*')
}

for(var i = 0; i < 5; i++) {
    var star = '';
        for(var j = 0; j < 5; j++) {
            star = star + '*';
        }
        console.log(star);
    }

for(var i = 0; i < 5; i++) {
    var star = '';
    for(var j = 0; j <= i; j++) {
        star = star + '*';
    }
    console.log(star);
}







