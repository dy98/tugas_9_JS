// Buat Object
let motor = {
	// beri nilai properti object
	bahanBakar: 'Bensin',
	harga: 23000000,
	roda: 'bybre',
	mesin: 'SOHC',
	tahun: 2018
}
// tampilkan menggunakan for in
for (let i in motor) {
	console.log(motor[i]);
}