<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
$input = json_decode(file_get_contents("php://input"), true);
if (!$input || !isset($input['message'])) {
    echo json_encode(["error" => "No input message"]);
    exit;
}

$apiKey = "AIzaSyBKt0c45eJDQY2cPpwr1xUiFHB1AHba4Pw";
$url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=$apiKey";

$postData = [
    "contents" => [
        ["parts" => [["text" => $input['message']]]]
    ]
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));
$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>