// Exo 1
function calcul1(){
    var longueur = prompt("Choisissez une longueur :");
    var largeur = prompt("Choisissez une largeur :");
    var perimetre = (longueur *2) + (largeur *2);
    var aire = longueur * largeur;
    alert("L'aire est de : " + aire + " u.a");
    alert("Le perimetre est de : " + perimetre);
}

// Exo 2
function calcul2(){
    var r = prompt("Choisissez une longueur :");
    var perimetre = 2 * 3.1416 * r;
    var aire = (r * r) * 3.1416;
    alert("L'aire est de : " + aire + " u.a");
    alert("Le perimetre est de : " + perimetre);
}

// Exo 3
var a = 3;
var b = 2;
function multiple(  x = 8 ){
    var result = x * 3;
    alert("Le resultat est : " + result);
}
function AfficheExo3(){
    multiple();
    multiple(a);
    multiple(b);
}

// Exo 4
var tab = [-2,1,4];
function additionne( x ){
    var result = x + 2;
    alert(result);
}
function AfficheExo4(){
    additionne(tab[0]);
    additionne(tab[tab.length-1]);
}

// Exo 5
function boucle(){
    var tab = new Array(3);
    for(i=0; i<3; i++){
        tab[i]=i*i;
        alert(tab);
    }
}
function boucle2(){
    var longueurtab = prompt("Longueur du tableau : ");
    var tab2 = new Array(longueurtab);
    for(i=0; i<longueurtab; i++){
        tab2[i]=i*i;
        alert(tab2);
    }
}

// Exo 6
var tab = [-2,1,4];
function soustrait( x ){
    if(x>0){
        var result = x-2;
    }
    else{
        var result = "Nombre negatif";
    }
    alert(result);
}
function afficheExo6(){
    soustrait(tab[0]);
    soustrait(tab[tab.length-1]);
}

// Exo 7
function jourdelasemaine(){
var dt = new Date();
var jour = dt.getDay();
switch(jour) {
    case 0:
        alert("Dimanche !");
        break;
    case 1:
        alert("Lundi !");
       break;
    case 2:
        alert("Mardi !");
       break;
    case 3:
        alert("Mercredi !");
        break;
    case 4:
        alert("Jeudi !");
        break;
    case 5:
        alert("Vendredi !");
        break;
    case 6:
        alert("Samedi !");
        break;
}
}

// Exo 8 Sur la page PHP

// Exo 9 Sur la page PHP

// Exo 10 Sur la page PHP

// Exo 11
function modif_paragraphe(){
    var elem = document.getElementById('paragraphe');
    document.getElementById('paragraphe').innerHTML = '<h1><I>Salut je suis ton père !</I></h1>';
}
function centrage_h1(){
    titre=(document.getElementsByTagName("h1"))[0];
    titre.setAttribute("align", "center");
}

// Exo 12
function openWindow(){
    myWindow = window.open('', '', 'width=200, height=200');
}
function moveWindow(){
    myWindow.moveTo(50,50);
    myWindow.focus();
}
function moveWindow2(){
    myWindow.moveBy(50,50);
    myWindow.focus();
}
function resizeWindow(){
    myWindow.resizeTo(300,100);
    myWindow.focus();
}

// Exo 13
function Navigator(){
    var a = "Nom de code du navigateur : " + navigator.appCodeName;
    document.getElementById("exo13").innerHTML = a;
    alert(a);
    var b = "Nom du navigateur : " + navigator.appName;
    document.getElementById("exo13").innerHTML = b;
    alert(b);
    var c = "Information de la version : " + navigator.appVersion;
    document.getElementById("exo13").innerHTML = c;
    alert(c);
    var d = "Cookies activés : " + navigator.cookieEnabled;
    document.getElementById("exo13").innerHTML = d;
    alert(d);
    var e = "Language du navigateur : " + navigator.language;
    document.getElementById("exo13").innerHTML = e;
    alert(e);
    var f = "Platforme : " + navigator.platform;
    document.getElementById("exo13").innerHTML = f;
    alert(f);
    var g = "Nom du moteur du navigateur : " + navigator.product;
    document.getElementById("exo13").innerHTML = g;
    alert(g);
    var h = "En-tête utilisateur-agent envoyé : " + navigator.userAgent;
    document.getElementById("exo13").innerHTML = h;
    alert(h);
}

// Exo 14
function init(){
    var b = document.getElementById("submit");
    var c = document.getElementById("reset");

    function fctSubmit(){
        var a = document.getElementById("text").value;
        alert("Vous avez saisi : " + a);
    }
    function remise_a_zero(){
        console.log($(exo14));
        $(exo14)[0].reset();
    }
}
