<?php
//echo "Hello World";
header("Content-Type: application/json; charset=UTF-8");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "User_cred";
$name = $_POST['uname'];
$userid = $_POST['uid'];
//$dbpassword = $_POST['pass'];
//$userid = "0469I8";
//$dbpassword = "12345";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = 'SELECT * FROM logins where userid="'.$userid.'" AND name="'.$name.'"';
//echo $sql;
$result = mysqli_query($conn, $sql);
$outp = array();
$outp = mysqli_fetch_assoc($result);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    //while($row = mysqli_fetch_assoc($result)) {
        //echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
        //echo $row["userid"].";".$row["password"];
        echo json_encode($outp);
    //}
} else {
    echo "0";
}

mysqli_close($conn);

?>