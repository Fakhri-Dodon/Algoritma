// memasukan nlai panjang dan lebar
let panjang = 150;
let lebar = 40;

// menghitung rumus
let hasil = 2 * panjang + 2 * lebar;

// menampilkan hasil

console.log("keliling persegi panjang adalah: " + hasil);

// 2. luas lingkaran

// tentukan phi dan r
const phi = 3.14;
const r = 10;

const hasil2 = phi * r * r;

// tampilkan
console.log("Hasil nya: " + hasil2);



// 3
let Lp = 64;
let sisi = Math.sqrt(Lp);

let hasil3 = 4 * sisi;

console.log ("Hasilnya: " + hasil3);



// membuat KTP
let umur = 17;

// proses
if (umur >= 17){
	result = "membuat KTP";
}else {
	result = "belum boleh";
}

// tampilkan
console.log(result);


let pabp = 86;
let mtk = 62;
let dpk = 77;

let proses = pabp + mtk + dpk;
let rata = proses / 3; 

if(rata >= 80 && rata < 100){
	grade = "A"; 
}else if (rata >=75 && rata < 80){
	grade = "B";
}else{
	grade = "C";
}
	
console.log(rata);
console.log(grade)