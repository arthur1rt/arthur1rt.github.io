<?php
$toEmail = "arthur1rt@gmail.com";
$name = "test"
$email = "teste2@gmail.com"
$message = "oi minha msg"

$subject = "New email from $name";
$emailBody = "Name: $name\nEmail: $email\nMessage: $message";

if (mail($toEmail, $subject, $emailBody)) {
  echo "Email sent successfully!";
} else {
  echo "Failed to send email.";
}
?>