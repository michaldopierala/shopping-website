<?php

header("Access-Control-Allow-Origin: *" );
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");

require_once 'connectiont.php';


$servername = "localhost";
$username = "u915825739_michal6452";
$password = "Szybowce22!";
$dbname = "u915825739_afterglow";

  $connection = mysqli_connect($servername,$username,$password );
  $db = mysqli_select_db($dbname);
  
    if (!$connection) {
  die("Connection failed: " . mysqli_connect_error());
}





var_dump($row);








// create array with the results from DB
// $arr = array();
// while($row = mysqli_fetch_assoc($result)) {
//   array_push($arr,$row);
// }


// send JSON


// echo json_encode($arr);
// echo "test";










 


?>