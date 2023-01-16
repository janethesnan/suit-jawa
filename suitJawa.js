//menangkap pilihan player
var p= prompt('pilih salah satu : gajah, semut, orang');
//membuat pilihan komputer
//membangkitkan bilangan random
var comp = Math.random();
if (comp <0.34){
    comp='gajah';
}else if(comp >= 0.34 && <=0.67){
    comp = 'orang';
}else{
    comp = 'semut';
}
//menentukan rules
var hasil= '';
if (p==comp){
    hasil= 'SERI';
}else if(p='gajah'){
    hasil=(comp=='orang') ? 'MENANG' : 'KALAH';
}else if(p='orang'){
    hasil=(comp=='semut') ? 'MENANG' : 'KALAH';
}else if(p='semut'){
    hasil=(comp=='gajah') ? 'MNANG' : 'KALAH';
}
//tampilkan hasil
alert('Kamu memilih '+ p + ' dan komputer memilih '+ comp+ '. Maka hasilnya kamu '+hasil);