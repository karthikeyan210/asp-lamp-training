<?php
require 'dbconnection.php';

$sth = $dbh->prepare("
    SELECT user.firstname as name, blood_group.name as blood_grp, mn.contact_number as mobile_num  
    from user inner join blood_group on user.blood_id = blood_group.id
    left join mobile_number as mn on user.id = mn.user_id
    where blood_group.name = :p1

");
$p1 = "B+";
$param = array(":p1"=>$p1);
$sth->execute($param);
$sth->setFetchMode(PDO::FETCH_ASSOC);
echo "List of users who have $p1 blood group<br>";
if($row = $sth->fetch()) {
    echo "<table>";
    echo "<tr><th>Name</th><th>Blood Group</td><td>Mobile No</td></tr>";
    do {
        echo "<tr><td>" . $row['name'] . "</td><td>" . $row['blood_grp'] . "</td>
        <td>";
        if($row['mobile_num'] == '') {
            echo "NA";
        } else {
            echo $row['mobile_num'];
        }
        echo "</td></tr>";
    } while($row = $sth->fetch());
    echo "</table>";
} else {
    echo "No users.";
}
