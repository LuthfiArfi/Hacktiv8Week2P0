/*************************
EXERCISE 6
LOOPING
*************************/

//SOAL 1
console.log('SOAL 1');
console.log('LOOPING PERTAMA')
var initial = 2;
while (initial<=20){
  console.log(initial + ' ' + '- i love coding');
  initial +=2;
}
console.log('LOOPING KEDUA')
var initial2 = 20;
while (initial2>=2){
  console.log(initial2 + ' ' + '- i will become full stack developer');
  initial2 -=2;
}

//SOAL 2
console.log('');
console.log('SOAL 2');
console.log('LOOPING PERTAMA')
for(var i1 = 1;i1<=20;i1++){
  console.log(i1 + ' ' + '- i love coding');
}
console.log('LOOPING KEDUA')
for(var i2 = 20; i2>=1; i2--){
  console.log(i2 + ' ' + '- i will become full stack developer');
}

//SOAL 3
//GANJIL GENAP
console.log('');
console.log('SOAL 3');
console.log('fungsi GANJIL-GENAP');
for(var i1 = 1; i1<=100; i1++){
  if(i1 % 2 === 0){
    console.log(i1 + '. GENAP')
  }
  else{
    console.log(i1 + '. GANJIL')
  }
}

//function Kelipatan
function fungsiKelipatan(initial, limit, increment, multiply){
  for(var i = initial ; i<=limit; i += increment){
    if(i % multiply === 0){
      console.log(i + '. KELIPATAN ' + multiply)
    }
    else{
      console.log(i + '')
    }
  }
}
//pertambahan 2 kelipatan 3
console.log('');
console.log('Pertambahan 2, Kelipatan 3')
fungsiKelipatan(1,100,2,3);
console.log('');
//pertambahan 5 kelipatan 6
console.log('Pertambahan 5, Kelipatan 6');
fungsiKelipatan(1,100,5,6);
console.log('');
//pertambahan 9 kelipatan 10
console.log('Pertambahan 9, Kelipatan 10');
fungsiKelipatan(1,100,9,10);
