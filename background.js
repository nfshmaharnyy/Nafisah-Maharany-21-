var dialog = document.querySelector("dialog");

document.querySelector("#open-popup").onclick = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username && password) {
        dialog.showModal();
    } 
};

{
document.querySelector(".slebew-btn").onclick = function() {
    dialog.close();
    window.location.href = 'kelompok1.html'; 
};

document.querySelector("#lopyu-btn").onclick = function() {
    dialog.close();
    alert("nda bisa login ki cess");}
};