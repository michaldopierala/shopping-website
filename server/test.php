<?php


require_once 'products_db.php';
require_once 'stripe/init.php';



header("Access-Control-Allow-Origin: *" );
header("Access-Control-Allow-Methods: POST");
// header("Access-Control-Allow-Headers: content-type");
// header("Accept-Encoding: gzip, deflate, br");
// header("Accept-Language: en-US,en;q=0.5");


header('Content-Type: application/json');

\Stripe\Stripe::setApiKey('sk_test_UURh6YpDhUQEwRRWAzzXNrYq'); 

    function calculateOrderAmount( $jsonObj) {
 
    
        $total =0; 

 

      foreach ($jsonObj as $value) {
         global $products_list;
         $id = $value->id; 
         $quantity = $value->quantity; 


        foreach ( $products_list as $search) {

        if ($id == $search["id"]) {

 
          $total = $total + $search["price"]*$quantity;

    }
}
    }
  
  return $total;

}






try {
    
  $jsonStrx = file_get_contents('php://input');
  $jsonStr =' { id: "xl-tshirt" } ';
//   $jsonStr2 = json_decode($jsonStr);
$jsonobj = '[{"id":1,"quantity":3}]';

    $jsonStr2 = json_decode($jsonobj);
  
//   $jsonStr2= json_encode($jsonStr2);
//   $jsonStr2 = 2300;
  
  $test_json_strin='[{"id":2,"quantity":1},{"id":3,"quantity":4}]';
$test_json_strin2 = json_decode($test_json_strin);      // retrieve JSON from POST body
$amount = calculateOrderAmount($jsonStr2);

  // Create a PaymentIntent with amount and currency
  $paymentIntent = \Stripe\PaymentIntent::create([
      'amount' => $amount,
    // 'amount' => calculateOrderAmount($jsonStr2),
//         // 'amount' => $jsonStr2,
//         // 'text' => 12000,

      'currency' => 'usd',
      'automatic_payment_methods' => [
          'enabled' => true,
      ],
  ]);
  
  

  $output = [
      'clientSecret' => $paymentIntent->client_secret,
      'total' => $paymentIntent->amount,
//       test => calculateOrderAmount( $jsonStr2) , 
//      //   test => $jsonStr2, 
  ];
// var_dump($jsonStr2); 
    //   $test = calculateOrderAmount($jsonStr2); 

  echo json_encode(   $output);
  
  
  
  
  
  
  
} catch (Error $e) {
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}

