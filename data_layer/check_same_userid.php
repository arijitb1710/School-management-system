<?php
//echo "Hello World";
//header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_cred";
$userid = $_POST['user_id'];
//$dbpassword = $_POST['pass'];
//$userid = "0469I9";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT userid FROM logins where userid='".$userid."'";
//echo $sql;
$result = mysqli_query($conn, $sql);

 
if (mysqli_num_rows($result) > 0) {
    // output data of each row
    echo "User id exists";  
   
    //echo $outp;
} else {
    echo "0";
}

mysqli_close($conn);

?>