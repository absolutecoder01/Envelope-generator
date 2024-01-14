function wstaw(){
 var imie = document.getElementById('imie').value;
 var nazwisko = document.getElementById('nazwisko').value;
 var adres = document.getElementById('adres').value;
 var postal_code = document.getElementById('postal-code').value;
 var miejscowosc = document.getElementById('miejscowosc').value;
 var kraj = document.getElementById('kraj').value;
 var koperta = document.getElementById('koperta'); 
 koperta.innerHTML = "<p>" + imie + "&nbsp;"+ nazwisko + "<br>" + adres + "<br>" + postal_code + miejscowosc + "<br>" + kraj + "</p>" +
"<img src=\"pobrane.png\" />";
}
