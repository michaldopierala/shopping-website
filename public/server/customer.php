<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");


require 'connection.php';

$connection = mysqli_connect($servername, $username, $password);
$db = mysqli_select_db($connection, $dbname);



$data =  json_decode(file_get_contents('php://input'), true);
$data = json_encode($data);
//   $name = $data['name'];

if ($data !== null) {
    $sql = "INSERT INTO customer (name) VALUES ('$data' )";

    if (mysqli_query($connection, $sql)) {
        echo "New customer saved succesfuly in data base";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}
