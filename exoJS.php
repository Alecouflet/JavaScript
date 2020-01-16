<html>
  <head>
    <script type="text/javascript" src="exo.js"></script>
  </head>
  <body onload="init()">
    <h2>Exercice 1</h2>
    <button onclick="calcul1()">Exo 1</button>

    <h2>Exercice 2</h2>
    <button onclick="calcul2()">Exo 2</button>

    <h2>Exercice 3</h2>
    <button onclick="AfficheExo3()">Exo 3</button>

    <h2>Exercice 4</h2>
    <button onclick="AfficheExo4()">Exo 4</button>

    <h2>Exercice 5</h2>
    <button onclick="boucle()">Exo 5, 1ere partie</button>
    <button onclick="boucle2()">Exo 5, 2eme partie</button>

    <h2>Exercice 6</h2>
    <button onclick="afficheExo6()">Exo 6</button>

    <h2>Exercice 7</h2>
    <button onclick="jourdelasemaine()">Exo 7</button>

    <h2>Exercice 8</h2>
    <button onmouseover="this.style.color='red'"
            onclick="this.style.color='lime'"
            ondblclick="this.style.color='navy'">
    TESTE COULEUR ECRITURE CLICK / DBL CLICK
    </button>

    <h2>Exercice 9</h2>
    <div style="width:500px"
        onclick="this.style.width='10px';this.style.marginLeft='45%'"
        ondblclick="this.style.width='500px';this.style.marginLeft='0%'">
        Nihil morati post haec militares avidi saepe turbarum adorti sunt Montium primum, qui divertebat in proximo,
        levi corpore senem atque morbosum,et hirsutis resticulis cruribus eius innexis divaricaturn sine spiramento ullo
        ad usque praetorium traxere praefecti.
    </div>

    <h2>Exercice 10</h2>
    <div onmouseover="this.innerHTML='Aiiie !!!'">
    Passe sur moi !
    </div>

  <h2>Exercice 11</h2>
  <div id="paragraphe" onclick="centrage_h1()">
      <h1 onclick="modif_paragraphe()">Salut je suis ton père !</h1>
  </div>

  <h2>Exercice 12</h2>
  <button onclick="openWindow()">Open Window</button>
  <button onclick="moveWindow()">Move Window</button>
  <button onclick="moveWindow2()">Move Window2</button>
  <button onclick="resizeWindow()">Resize Window2</button>

  <h2>Exercice 13</h2>
  <p id="exo13"></p>
  <button onclick="Navigator()">Navigator</button>

  <h2>Exercice 14</h2>

  <form id="myForm" action="">
    Notez quelque chose <input type="text" id="text"><br><br>
    <input type="button" id="sub" value="Submit form">
    <input type="reset" id="res" value="Reset">
  </form>

</body>

</html>