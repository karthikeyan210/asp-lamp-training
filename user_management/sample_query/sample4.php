<?php
require 'dbconnection.php';

$sth = $dbh->prepare("
    SELECT user.firstname as name, grad.name as edu 
    from user inner join user_graduation as ugrad on user.id = ugrad.user_id 
    inner join graduation as grad on grad.id = ugrad.graduation_id 
    order by name ASC, grad.id ASC
");
//$p1 = "SSLC";
//$param = array(":p1"=>$p1);
$sth->execute();
$sth->setFetchMode(PDO::FETCH_ASSOC);
//echo "List of users who have completed $p1<br>";
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