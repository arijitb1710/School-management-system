<?php
//echo "Hello World";
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "User_cred";
//$userid = "admin";
//$dbpassword = "admin";
$userid = $_POST['admin_name'];
$dbpassword = $_POST['admin_password'];

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = 'SELECT role FROM admin where username="'.$userid.'" AND password="'.$dbpassword.'"';
//echo $sql;
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        //echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
        //echo $row["userid"].";".$row["password"];
        echo $row["role"];
    }
} else {
    echo "0 results";
}

mysqli_close($conn);

?>