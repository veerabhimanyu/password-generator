var a = document.querySelector("h1");
var b = document.querySelector("button");

b.addEventListener("click", PassWord);

function PassWord() {
  var text = "";
  var possible =
    "ABCv&DEFaGbHI%JKLdMNOgrPQwRqS!TUaVWXhYZa2b3cde4fghi2jklm34no4pq&^%$#!@*&^~*rstuvwxyz0123456789";

  for (var i = 0; i < 9; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  a.innerHTML = text;
}
function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
