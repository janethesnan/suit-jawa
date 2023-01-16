tanya=true;
while(tanya){
    //menangkap pilihan player
    var p= prompt('pilih salah satu : gajah, semut, orang');
    //membuat pilihan komputer
    //membangkitkan bilangan random
    var comp = Math.random();
    if (comp <0.34){
        comp='gajah';
    }else if(comp >= 0.34 && comp < 0.67){
        comp = 'orang';
    }else{
        comp = 'semut';
    }
    //menentukan rules
    var hasil= '';
    if (p==comp){
        hasil= 'SERI';
    }else if(p=='gajah'){
        hasil=(comp=='orang') ? 'MENANG' : 'KALAH';
    }else if(p=='orang'){
        hasil=(comp=='semut') ? 'MENANG' : 'KALAH';
    }else if(p=='semut'){
        hasil=(comp=='gajah') ? 'MENANG' : 'KALAH';
    }else{
        hasil='Kamu salah menginputkan pilihan! Silahkan coba lagi';
    }
    //tampilkan hasil
    alert('Kamu memilih '+ p + ' dan komputer memilih '+ comp+ '. Maka hasilnya kamu '+hasil);

    tanya=confirm('bermain lagi?');
}

alert('Terima kasih telah bermain');