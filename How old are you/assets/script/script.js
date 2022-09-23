let age = prompt("Скільки тобі років?");

if (age < 18){
    document.getElementById("img").style.display = "none";
    alert("Замало");
}else {
    document.getElementById("img").style.display = "block";
}
