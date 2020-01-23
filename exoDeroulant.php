<html>
    <head>
        <?php require('user.php');?>
    </head>

    <body>
<?php
//récupération de la liste des users en BDD.
 try {
 $base = new PDO('mysql:host=localhost; dbname=user', 'root', 'root');
 $DonneeBruteUser = $base->query("select * from user");
 $TabUserIndex = 0;
 while ($tab = $DonneeBruteUser->fetch()){
 //ici on creer nos objets User pour chaque tuple de notre requête
 //et on les places dans un tableau de User
 $TabUser[$TabUserIndex++] = new User($tab['id_user'],$tab['nom']);
 }
 }
catch(exception $e) {
    $e->getMessage();
}
?>
    <form action="" method="POST">
        <select name="Personnage" id="">
            <?php
            //parcours du tableau de User pour afficher les options de la liste déroulante
            foreach ($TabUser as $objetUser) {
                if ($objetUser->getId()==$_POST['Personnage']) {
                    echo '<option selected="'.$objetUser->getId().'">'.$objetUser->getNom().'</option>';
                    $objetUser->AfficherUser();
                }
                else{
                    echo '<option value="'.$objetUser->getId().'">'.$objetUser->getNom().'</option>';
                }
            }
            ?>
        </select>
            <input type="submit"></input>
    </form>

</body>

</html>