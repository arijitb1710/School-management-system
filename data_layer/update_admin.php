<?php
//echo "Hello World";
//header("Content-Type: application/json");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_cred";
$row_name = $_POST['rowname'];
$col_name = $_POST['colname'];
$cell_value = $_POST['cell'];
$count = 0;
//$row_name = "Monday";
//$col_name = "P4";
//$cell_value = "Maths";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "UPDATE logins SET ".$col_name."='".$cell_value."' WHERE userid='".$row_name."'";
//$sql = "UPDATE time_table_class1 SET P4='Mat' WHERE Day='Monday'";

if (mysqli_query($conn, $sql)) {
    echo "success"; 
    
} else {
    echo "Error updating record: " . mysqli_error($conn);
}

mysqli_close($conn);
?>