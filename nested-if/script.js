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