var tambah = document.getElementById('plus1');
var kurang = document.getElementById('min1');
var jumlah = document.getElementById('total1');
var no = 0;
tambah.onclick = function(){
jumlah.innerHTML = no++;
}
kurang.onclick = function(){
jumlah.innerHTML = no--;
}

var plus = document.getElementById('plus2');
var min= document.getElementById('min2');
var total = document.getElementById('total2');
var no = 0;
plus.onclick = function(){
total.innerHTML = no++;
}
min.onclick = function(){
total.innerHTML = no--;
}

// Add code here