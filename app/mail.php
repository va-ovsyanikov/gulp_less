
<?php 

$recepient = "tormanov@list.ru";
$sitename = "Tormon";

$name = trim($_POST["name"]);
$telefon = trim($_POST["telefon"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nТелефон: $telefon \nEmail: $email  \nВопрос: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");







