<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_cred";
$uname = $_POST['uname'];
$uaddress = $_POST['uaddress'];
$uemail = $_POST['uemail'];
$uusername = $_POST['username'];
$upassword = $_POST['upassword'];
$utelephone = $_POST['utelephone'];
$uemergency = $_POST['uemergency'];
$urole = $_POST['urole'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO logins (name, address, email, userid, password, telephone, emergency_contact,role)
VALUES ('".$uname."', '".$uaddress."', '".$uemail."', '".$uusername."', '".$upassword."','".$utelephone."','".$uemergency."','".$urole."')";

//echo $sql;
if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?> 