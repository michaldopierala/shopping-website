<?php
require_once 'products_db.php';
require_once 'stripe/init.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");

header('Content-Type: application/json');

\Stripe\Stripe::setApiKey('sk_test_UURh6YpDhUQEwRRWAzzXNrYq');





function calculateOrderAmount($jsonObj)
{
    $total = 0;

    foreach ($jsonObj as $value) {
        global $products_list;
        $id = $value->id;
        $quantity = $value->quantity;

        foreach ($products_list as $search) {
            if ($id == $search["id"]) {
                $total = $total + $search["price"] * $quantity;
            }
        }
    }
    return 3000;
}




try {
    $jsonStr = file_get_contents('php://input');
    $jsonStr = json_decode($jsonStr);
    $amount = calculateOrderAmount($jsonStr);


    // Create a PaymentIntent with amount and currency
    $paymentIntent = \Stripe\PaymentIntent::create([
        'amount' => $amount,
        'currency' => 'usd',
        'automatic_payment_methods' => [
            'enabled' => true,
        ],
    ]);

    $output = [
        'clientSecret' => $paymentIntent->client_secret,
        'total' => $paymentIntent->amount,
        'test' => $jsonStr,
    ];

    echo json_encode($output);
} catch (Error $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
