<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_cred";
$uusername = $_POST['username'];
$upassword = $_POST['upassword'];
$urole = $_POST['urole'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO admin (username, password, role)
VALUES ('".$uusername."', '".$upassword."','".$urole."')";

//echo $sql;
if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?> 