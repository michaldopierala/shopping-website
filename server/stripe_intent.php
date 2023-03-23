<?php



// require_once '../vendor/autoload.php';
require_once 'products_db.php';
require_once 'stripe/init.php';
// include 'product_db.php'; 
// var_dump($products_list);
// $products_list = $products_list;

// var_dump($products_list);


header("Access-Control-Allow-Origin: *" );
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: content-type");


// header("Accept-Encoding: *");
header("Accept-Encoding: gzip, deflate, br");


// "Accept-Encoding: gzip, deflate",

header("Accept-Language: en-US,en;q=0.5");
// "Accept-Language:en-US;q=0.6,en;q=0.4",

// Accept-Encoding
// 	gzip, deflate, br







\Stripe\Stripe::setApiKey('sk_test_UURh6YpDhUQEwRRWAzzXNrYq');


header('Content-Type: application/json');


// $total = 1966; 
// $test_json_strin='{"items":[{"id":2,"quantity":1},{"id":3,"quantity":4}]}';   !!!!!!!!!!!!!!!!!!!!!!!




// var_dump(calculateOrderAmount( $test_json_strin));


// function calculateOrderAmount(array $items): int {
    function calculateOrderAmount( $jsonObj) {


    
      global $products_list;
        $t=  gettype($jsonObj); 
        $total =0; 

      foreach ($jsonObj as $value) {
        $id = $value->id; 
        $quantity = $value->quantity; 
      
      

//   foreach ( $products_list as $search) {
//     if ($id == $search["id"]) {
//       $total = $total + $search["price"]*$quantity;
//         // $total =$search["price"]*$quantity; 

// }
// }
    }
  
  return $t;

}






try {
    
  $jsonStr = file_get_contents('php://input');
  $jsonStr2 = json_decode($jsonStr);
//   $jsonStr2= json_encode($jsonStr2);
//   $jsonStr2 = 2300;
  
  $test_json_strin='[{"id":2,"quantity":1},{"id":3,"quantity":4}]';
$test_json_strin2 = json_decode($test_json_strin);      // retrieve JSON from POST body


  // Create a PaymentIntent with amount and currency
  $paymentIntent = \Stripe\PaymentIntent::create([
      'amount' => 12000,
    // 'amount' => calculateOrderAmount( $jsonStr2),
        // 'amount' => $jsonStr2,
        // 'text' => 12000,

      'currency' => 'usd',
      'automatic_payment_methods' => [
          'enabled' => true,
      ],
  ]);

  $output = [
      'clientSecret' => $paymentIntent->client_secret,
      'total' => $paymentIntent->amount,
      test => calculateOrderAmount( $jsonStr2) , 
  ];

  echo json_encode($output);
} catch (Error $e) {
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}

// echo json_encode($products_list);
// echo $total ;
