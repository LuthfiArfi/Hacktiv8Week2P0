var tanggal = 21;
var bulan = 2;
var tahun = 1992;
var tahunkabisat;
console.log('Input : ');
console.log('   ' + tanggal + '-' + bulan + '-' + tahun);
console.log('Output : ');
//tahun
if (tanggal < 1 || tanggal > 31){
  console.log('   Tanggal salah mas!');
}
else {
  if (tahun < 1900 || tahun > 2200){
    console.log('   Tahun tidak boleh kurang dari 1900 dan lebih dari 2200!');
  }
  else {
    //tahun kabisat
    if (tahun % 4 === 0 && tahun % 100 !== 0) {
      tahunkabisat = true;
    }
    else if (tahun % 4 === 0 && tahun % 100 === 0 && tahun % 400 === 0) {
      tahunkabisat = true;
    }
    else {
      tahunkabisat = false;
    }
    //bulan
    if (bulan >= 1 && bulan <=12){
      switch (bulan) {
        case 1:
          bulan = 'Januari';
          break;
        case 2:
          bulan = 'Februari';
          break;
        case 3:
          bulan = 'Maret';
          break;
        case 4:
          bulan = 'April';
          break;
        case 5:
          bulan = 'Mei';
          break;
        case 6:
          bulan = 'Juni';
          break;
        case 7:
          bulan = 'Juli';
          break;
        case 8:
          bulan = 'Agustus';
          break;
        case 9:
          bulan = 'September';
          break;
        case 10:
          bulan = 'Oktober';
          break;
        case 11:
          bulan = 'November';
          break;
        default:
          bulan = 'Desember';
          break;
      }
    }
    else {
      console.log('   Salah memasukan bulan mas!');
      throw '';
    }
    //tanggal
    if (bulan === 'Februari' && tahunkabisat === false && tanggal > 28 ) {
      console.log('   Tahun ' + tahun + ', bukan tahun kabisat mas! Februari cuma sampai tanggal 28!');
    }
    else if (bulan === 'Februari' && tahunkabisat === true && tanggal > 29) {
      console.log('   Tanggal salah mas! Februari tahun kabisat cuma sampai tanggal 29!');
    }
    else if (bulan == 'April' && tanggal > 30) {
      console.log('   Tanggal salah mas! April cuma sampai tanggal 30!');
    }
    else if (bulan == 'Juni' && tanggal > 30) {
      console.log('   Tanggal salah mas! Juni cuma sampai tanggal 30!');
    }
    else if (bulan == 'September' && tanggal > 30) {
      console.log('   Tanggal salah mas! September cuma sampai tanggal 30!');
    }
    else if (bulan == 'November' && tanggal > 30) {
      console.log('   Tanggal salah mas! November cuma sampai tanggal 30!');
    }
    else {
      console.log('   ' + tanggal + ' ' + bulan + ' ' + tahun);
    }
  }
}
