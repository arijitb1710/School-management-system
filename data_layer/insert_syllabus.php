<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_cred";
$class = $_POST['r_class'];
$section = $_POST['r_section'];
$subject = $_POST['r_subject'];
$syllabus = $_POST['r_syl'];
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

$sql = "INSERT INTO syllabus (class, section, subject, syllabus)
VALUES ('".$class."', '".$section."', '".$subject."', '".$syllabus."')";

//echo $sql;
if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?> 