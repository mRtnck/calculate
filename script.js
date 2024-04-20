var nst = Number(document.getElementById('st').value);
var nnd = Number(document.getElementById('nd').value);
var rsl = document.getElementById('Resuilt');

var resuilt;

var sum = document.getElementById('sum');
var minus = document.getElementById('minus');
var chek = document.getElementById('chek');
var kun = document.getElementById('kun');
var roy = document.getElementById('person');


sum.onclick = function(){
    var nst = Number(document.getElementById('st').value);
    var nnd = Number(document.getElementById('nd').value);
    resuilt = nst + nnd;
    rsl.innerHTML = (resuilt);
}
minus.onclick = function(){
    var nst = Number(document.getElementById('st').value);
    var nnd = Number(document.getElementById('nd').value);
    resuilt = nst - nnd;
    rsl.innerHTML = (resuilt);
}
chek.onclick = function(){
    var nst = Number(document.getElementById('st').value);
    var nnd = Number(document.getElementById('nd').value);
    resuilt = nst / nnd;
    rsl.innerHTML = (resuilt);
}
kun.onclick = function(){
    var nst = Number(document.getElementById('st').value);
    var nnd = Number(document.getElementById('nd').value);
    resuilt = nst * nnd;
    rsl.innerHTML = (resuilt);
}
roy.onclick = function(){
    var nst = Number(document.getElementById('st').value);
    var nnd = Number(document.getElementById('nd').value);
    resuilt = nst % nnd;
    rsl.innerHTML = (resuilt);
}