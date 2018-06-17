<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_cred";
$userid = $_POST['uid'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// sql to delete a record
$sql = "DELETE FROM logins WHERE userid='".$userid."'";

if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "Error deleting record: " . $conn->error;
}

$conn->close();
?> 