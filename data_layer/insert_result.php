<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_cred";
$name = $_POST['user_name'];
$class = $_POST['user_class'];
$section = $_POST['user_section'];
$term = $_POST['user_term'];
$roll = $_POST['user_roll'];
$subject = $_POST['user_subject'];
$marks = $_POST['user_marks'];
/* $upassword = $_POST['upassword'];
$utelephone = $_POST['utelephone'];
$uemergency = $_POST['uemergency'];
$urole = $_POST['urole']; */

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO results (name, class, section, term, roll, subject, marks)
VALUES ('".$name."', '".$class."', '".$section."', '".$term."', '".$roll."', '".$subject."', '".$marks."')";

//echo $sql;
if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?> 