<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Infobip credentials
    $apiKey = 'db296559b6db603ac3191fd0c6338e5a-3f9698b9-a4a5-4623-908b-4ee92441b515';
    $whatsappNumber = '+919542667793'; // Infobip's demo WhatsApp number

    // Compose the WhatsApp message
    $whatsappMessage = "New Contact Form Submission\n\n";
    $whatsappMessage .= "Name: $name\n";
    $whatsappMessage .= "Email: $email\n";
    $whatsappMessage .= "Subject: $subject\n";
    $whatsappMessage .= "Message: $message\n";

    // Prepare the data for the Infobip API
    $data = [
        'from' => $whatsappNumber,
        'to' => '+919542667793', // Replace with your recipient's number
        'text' => $whatsappMessage,
    ];

    // Send the WhatsApp message using Infobip API
    $url = 'https://whatsapp.api.infobip.com/message/send';
    $headers = [
        'Authorization: App ' . $apiKey,
        'Content-Type: application/json',
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    curl_close($ch);

    // Check the API response (you may need to adjust this based on Infobip's API documentation)
    $responseArray = json_decode($response, true);
    if ($responseArray && isset($responseArray['messages'][0]['status']['groupName']) && $responseArray['messages'][0]['status']['groupName'] === 'SENT') {
        echo "success";
    } else {
        echo "error";
    }
} else {
    // If the request method is not POST, redirect to the home page or display an error message.
    header("Location: index.html");
    exit();
}
?>
