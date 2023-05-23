<?php

header("Access-Control-Allow-Origin: *" );
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");

require 'connection.php';
 //conect to database
 
 
 
  $connection = mysqli_connect($servername,$username,$password );
  $db = mysqli_select_db($connection,$dbname);


  $query = "SELECT * FROM shop";
  $query_run = mysqli_query($connection,$query);

    $products_list = array();
    while($row = mysqli_fetch_assoc($query_run)) {
      array_push($products_list,$row);
    }
    
    
    // var_dump($products_list); 



    // $products_list = json_encode($products_list);
    
    // echo $products_list ; 


?>