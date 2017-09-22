<?php
$servername = "localhost";
$username = "root";
$password = "aspire@123";

try {
    $dbh = new PDO("mysql:host=$servername;dbname=user_management", $username, $password);
    // set the PDO error mode to exception
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    //echo "Connected successfully" . "<br>"; 
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }



$sth = $dbh->prepare("
    SELECT user.firstname as name, grad.name as edu 
    from users join user_graduation as ugrad on user.id = ugrad.user_id 
    join graduation as grad on ugrad.graduation_id = grad.id  
    where grad.name <> :p1
");
$p1 = "PG";
$param = array(":p1"=>$p1);
$sth->execute($param);
$sth->setFetchMode(PDO::FETCH_ASSOC);
echo "List of users who have completed $p1<br>";
if($sth->rowcount()) {
    echo "<table>";
    echo "<tr><th>Name</th><th>Education</td></tr>";
    while($row = $sth->fetch()) {
        echo "<tr><td>" . $row['name'] . "</td><td>" . $row['edu'] . "</td></tr>";
    }
    echo "</table>";
} else {
    echo "No users.";
}
