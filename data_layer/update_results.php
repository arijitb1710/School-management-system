<?php
//echo "Hello World";
//header("Content-Type: application/json");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_cred";
$class = $_POST['user_class'];
$section = $_POST['user_section'];
$roll = $_POST['user_roll'];
$subject = $_POST['user_subject'];
$marks = $_POST['user_marks'];
$term = $_POST['user_term'];
$prev_subject = $_POST['user_prev_subject'];
//$row_name = "Monday";
//$col_name = "P4";
//$cell_value = "Maths";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "UPDATE results SET subject='".$subject."' ,marks='".$marks."' WHERE class='".$class."' AND section='".$section."' AND roll='".$roll."' AND subject='".$prev_subject."' AND term='".$term."'";
//$sql2 = "UPDATE results SET marks='".$marks."' WHERE class='".$class."' AND section='".$section."' AND roll='".$roll."' AND subject='".$subject."'";
//$sql = "UPDATE time_table_class1 SET P4='Mat' WHERE Day='Monday'";

if (mysqli_query($conn, $sql)) {
    echo "success";
    
} else {
    echo "failure";
}
mysqli_close($conn);
?>