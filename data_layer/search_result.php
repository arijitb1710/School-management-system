<?php
//echo "Hello World";
header("Content-Type: application/json");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_cred";
$name = $_POST['user_name'];
$class = $_POST['user_class'];
$section = $_POST['user_section'];
$roll = $_POST['user_roll'];
/* $class = 'I';
$section = 'A';
$subject = 'Bengali'; */
//$dbpassword = $_POST['pass'];
//$userid = "0469I9";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = 'SELECT term,subject,marks FROM results where name="'.$name.'"AND class="'.$class.'" AND section="'.$section.'" AND roll="'.$roll.'"';
//echo $sql;

$result = mysqli_query($conn, $sql);
$outp = array();
 
if (mysqli_num_rows($result) > 0) {
    // output data of each row
    //echo "Syllabus exists";  
    while($row = mysqli_fetch_assoc($result)) {
        //echo "id: " . $row["name"]. " - Name: " . $row["address"]. " " . $row["email"]. "<br>";
        //echo $row["username"].";".$row["password"];
        $outp[] = $row;
        
      
    }
    echo json_encode($outp);
   
    //echo $outp;
} else {
    echo "0";
}

mysqli_close($conn);

?>