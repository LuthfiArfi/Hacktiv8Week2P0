/*************************
EXERCISE 7
ASTERISK
*************************/
//deklarasi variabel
var rows1 = '3';
var rows2 = '7';
var rows3 = '10' ;
/*
Output :
*****
*/
for(var i = 1; i<=rows1; i++){
  console.log('*');
}

/*
Output :
*****
*****
*****
*****
*****
*/
console.log('');
var hasil1 = '';
for(var j = 1; j<=rows2; j++){
    for(var k = 1; k <=rows2; k++){
  hasil1 += '*';
  }
  console.log(hasil1);
  hasil1='';
}
/*
Output :
*
**
***
****
*****
*/
console.log('');
var hasil2 = '';
for(var l = 1; l <= rows3; l++){
    hasil2 += '*';
  console.log(hasil2);
}
