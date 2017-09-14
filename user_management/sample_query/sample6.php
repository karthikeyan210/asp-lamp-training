<?php
require 'dbconnection.php';

$sth = $dbh->prepare("
    SELECT user.firstname as name, uemail.email as email_id, mn.contact_number as mobile_no
    from user inner join user_email as uemail on user.id = uemail.user_id 
    left join mobile_number as mn on mn.user_id = user.id
");
$sth->execute();
$sth->setFetchMode(PDO::FETCH_ASSOC);
if($sth->rowcount()) {
    echo "<table>";
    echo "<tr><th>Name</th><th>Email</td><td>Mobile No</td></tr>";
    while($row = $sth->fetch()) {
        echo "<tr><td>" . $row['name'] . "</td><td>" . $row['email_id'] . "</td>
        <td>";
        if($row['mobile_no'] == '') {
            echo "NA";
        } else {
            echo $row['mobile_no'];
        }
        echo "</td></tr>";
    }
    echo "</table>";
} else {
    echo "No users.";
}
