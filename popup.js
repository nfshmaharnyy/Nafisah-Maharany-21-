yakin = confirm("Tuliski nama ta' nah?");
nama = prompt("Siapa nama ta' cinta?", "");
alert('Klik ceffat browww!')
document.write("<p>aloo "+ nama +"</p>");
document.write("<p>aloo "+ nama +"</p>");
document.write("<p>aloo "+ nama +"</p>");
var ulangi = confirm("Apakah anda mau mengulang?");
var counter = 0;

while(ulangi){
    var jawab = confirm("Apakah anda mau mengulang?")
    counter++;
    if(jawab == false){
        ulangi = false;
    }
}

document.write("Perulangan sudah dilakukan sebanyak "+ counter +" kali");