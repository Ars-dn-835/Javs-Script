var textLine = " text  text text text text text text text text text" +
    " text text text text text text text text text text text text text" +
    " text text text text text text text text text text text text text";  //текст на кнопці

var timerID = 0;
var timerRunning = false;
var charNo = 0;
var charMax = 0;

function startShow() {
   stopShow(); //зупиняє час прокрутки
   showLine(); //виводить текст
   timerRunning = true; //даєм дозвіл на цикл прокрутки
}

function stopShow() {
   if (timerRunning) {
      clearTimeout(timerID); //
      timerRunning = falses;
   }
}






function showLine() {
   charMax = textLine.length;
   if (charNo <= charMax) {
      document.animationbutton.but.value = textLine.substring(0, charNo); //готовий метод document.animationbutton.but.value вміє зробити анімацію по символу
      //функція substring розділяє строку посимвольно
      document.animationbutton.but.style.color = "#0bada8";
      document.animationbutton.but.style.textAlign = "left";
      charNo++;
      timerID = setTimeout("showLine()", 100);
   }
   else {
      charNo = 0;
      timerID = setTimeout("showLine()", 3000);
   }
}