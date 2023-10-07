// IF ELSE
/**
 * case 1 : Jika usia anda 17 tahun, maka anda bisa membuat sim. Jika umur anda belum 17 tahun, maka tidak dapat membuat sim
*/
const usia = 17;

if(usia >= 17){
    console.log("Anda dapat membuat SIM, silahkan mengisi form pendaftaran");
}else{
    console.log("Maaf, umur anda belum cukup untuk membuat SIM");
}

/**
 * case 2 : Nilai rata-rata mahasiswa
 * 100 - 90 : Nilai A
 * 89 - 80 : Nilai B
 * 79 - 70 : Nilai C
 * nilai kurang dari 70 : Tidak lulus matakuliah
 */
const nilaiMahasiswa = 95;

if(nilaiMahasiswa >= 90 && nilaiMahasiswa <= 100){
    console.log("Anda mendapatkan nilai A");
}else if(nilaiMahasiswa >= 80 && nilaiMahasiswa <= 89){
    console.log("Anda mendapatkan nilai B");
}else if(nilaiMahasiswa >= 70 && nilaiMahasiswa <= 79){
    console.log("Anda mendapatkan nilai C");
}else{
    console.log("Anda tidak lulus matakuliah");
}


// NESTED IF
/**
 * case : Nilai memenuhi syarat untuk calon siswa polri pada tes psikologi dan riwayat kesehatan
 * 
 */
const nilaiRikes = 90;
const nilaiPsikotes = 77;

if(nilaiRikes >= 60){
    if(nilaiPsikotes >= 60){
        console.log("Memenuhi syarat, anda lolos tes rikes dan psikotes");
    }else{
        console.log("Maaf anda tidak memenuhi syarat dan tidak lolos salah satu tes tersebut");
    }
}else{
    console.log("Maaf, anda tidak lolos tes calon siswa polri");
}


//FOR STATEMENT
/**
 * case : Perkalian 2
 * */ 
for(let i = 2; i <= 20; i += 2){
    console.log("2 x " + (i / 2) + " = " + i);
}


// WHILE
/**
 * case : bilangan ganjil dari 1 - 25
 */
let angka = 1;

while(angka <= 25){
    console.log(angka);
    angka += 2;
}


// DO WHILE
/**
 * case : looping tulisan "Saya MSIB di Infine Learning"
 */
let number = 1;

do {
    console.log(number + " Saya MSIB di Infine Learning");
    number++;
} while (number <= 5);


// FUNCTION
/**
 * case : 
 */




// SWITCH CASE
/**
 * case : Nama ikan air tawar
 */
const ikan = prompt("Masukan nama ikan air tawar *e.g : ikan mujair");

switch(ikan){
    case "ikan mujair":
        alert("Hallo Aku Ikan Mujair");
    break;
    case "ikan gurame":
        alert("Hallo Aku Ikan Gurame");
    break;
    case "ikan bawal":
        alert("Hallo Aku Ikan Bawal");
    break;
    case "ikan mas":
        alert("Hallo Aku Ikan Mas");
    break;
    case "ikan cupang":
        alert("Hallo Aku Ikan Cupang");
    break;
    case "ikan mas koki":
        alert("Hallo Aku Ikan Mas Koki");
    break;
    case "ikan aligator":
        alert("Hallo Aku Ikan Aligator");
    break;
    case "ikan lele":
        alert("Hallo Aku Ikan Lele");
    break;
    case "ikan sepat":
        alert("Hallo Aku Ikan sepat");
    break;
    case "ikan patin":
        alert("Hallo Aku Ikan Patin");
    break;
    case "ikan belida":
        alert("Hallo Aku Ikan belida");
    break;
    case "ikan arapaima":
        alert("Hallo Aku Ikan Arapaima");
    break;
    default:
        alert("Ikan tidak terdaftar");
}