<?php
//echo "Hello World";
header("Content-Type: application/json");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_cred";
//$userid = $_POST['username'];
//$dbpassword = $_POST['pass'];

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = 'SELECT * FROM file_upload';
//echo $sql;
$result = mysqli_query($conn, $sql);
$outp = array();

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        //echo "id: " . $row["name"]. " - Name: " . $row["address"]. " " . $row["email"]. "<br>";
        //echo $row["username"].";".$row["password"];
        $file_name=$row["file"];
        $outp[]=$file_name;
        //$str="<img style='width:100%; height: 100%;' src = './uploads/".$file_name."'>";
        
        //echo $str;
        
      
    }

    echo json_encode($outp);
    
    //echo $outp;
} else {
    echo "0 results";
}

mysqli_close($conn);

?>