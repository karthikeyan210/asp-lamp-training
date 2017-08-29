<?php
$dataRequired = $_POST["dataRequired"];
$inputValue = $_POST["inputValue"];
$fieldType = $_POST["fieldType"];
if ($dataRequired === 'true') {
    if ($inputValue == "") {
        echo "Required";
    }
}
if ($fieldType == "name" && $inputValue != "") {
    if (preg_match("/([a-zA-Z]+)([ \.-][a-zA-Z]+)?/", $inputValue, $matches)) {
        if ($matches[0] != $inputValue) {
            echo "Enter valid Data";
        }
    } else {
        echo "Enter valid Data";
    }
}
if ($fieldType == "email" && $inputValue != "") {
    if (!filter_var($inputValue, FILTER_VALIDATE_EMAIL)) {
        echo "Enter valid Email";
    }
}
if ($fieldType == "year" && $inputValue != "") {
    if (preg_match("/[\d]{4}/", $inputValue, $matches)) {
        if ($matches[0] != $inputValue) {
           echo "Enter valid Year";
        } else {
            $currYear = date("Y");
            if ($inputValue < 1970 || $inputValue > $currYear) {
               echo "Enter valid Year";
            }
        }
    } else {
        echo "Enter valid Year";
    }
}
if ($fieldType == "dob" && $inputValue != "") {
    if (preg_match("/[\d]{2}[\/][\d]{2}[\/][\d]{4}/", $inputValue, $matches)) {
        if ($matches[0] != $inputValue) {
            echo "Enter valid DOB";
        } else {
            $dob = explode("/", $inputValue);
            $birthDate = $dob[0];
            $birthMonth = $dob[1];
            $birthYear = $dob[2];
            $currYear = date("Y");
            $currMonth = date("m");
            $currDate = date("d");
            if ($birthMonth == 0 || $birthMonth >12 || $birthDate == 0 || $birthDate > 31
            || $birthYear < 1970) 
            {     
                echo "Enter valid DOB";
            }
            $age = $currYear - $birthYear;
            $month = $currMonth - $birthMonth;
            $days = $currDate - $birthDate;
            if ($month < 0 || ($month == 0 && $days < 0)) {
                $age--;
            }
            if ($age < 0) {
                echo "Enter valid DOB";
            }
        }
    } else {
        echo "Enter valid DOB";
    }
}
