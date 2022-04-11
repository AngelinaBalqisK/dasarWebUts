function hasil() {
    var harga=parseInt(document.getElementById('harga').value);
    var jumlah=parseInt(document.getElementById("jumlah").value);
    var total=harga*jumlah;
    var total1;
    document.getElementById("total").innerHTML=total;
    var dis =0.05;
    var diatas5;
    var bayar1;
    var bayar2;
    var bayar3;
    diatas5 = harga*dis;
    total1 = diatas5*jumlah;
    if(jumlah>5){
        total2 = total-total1;
        document.getElementById("bayar").innerHTML=total2;
        document.getElementById("dis").innerHTML="5% Perporsi";
    }else if(jumlah==5){
        bayar1 = total-(total*dis);
        document.getElementById("bayar").innerHTML=bayar1;
        document.getElementById("dis").innerHTML="5%";
    }else if(jumlah==4){
        bayar2 = total-(total*dis);
        document.getElementById("bayar").innerHTML=bayar2;
        document.getElementById("dis").innerHTML="5%";
    }else if(jumlah==3){
        bayar3 = total-(total*dis);
        document.getElementById("bayar").innerHTML=bayar3;
        document.getElementById("dis").innerHTML="5%";
    }else{
        document.getElementById("bayar").innerHTML=total;
        document.getElementById("dis").innerHTML="0%";
    }
}