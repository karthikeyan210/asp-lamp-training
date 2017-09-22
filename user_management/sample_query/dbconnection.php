<?php
$servername = "localhost";
$username = "root";
$password = "aspire@123";

try {
    $dbh = new PDO("mysql:host=$servername;dbname=user_management", $username, $password);
    // set the PDO error mode to exception
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);
    //echo "Connected successfully" . "<br>"; 
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }