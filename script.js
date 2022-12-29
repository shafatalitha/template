var tambah = document.getElementById('tambah');
var kurang = document.getElementById('kurang');
var jumlah = document.getElementById('hasil');
var no = 0;
tambah.onclick = function(){
jumlah.innerHTML = no++;
}
kurang.onclick = function(){
jumlah.innerHTML = no--;
}

var plus = document.getElementById('plus');
var min= document.getElementById('min');
var total = document.getElementById('total');
var no = 0;
plus.onclick = function(){
total.innerHTML = no++;
}
min.onclick = function(){
total.innerHTML = no--;
}
