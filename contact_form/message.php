<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$message = $_POST['message'];

if(!empty($email) && !empty($message)){ // if email and message field is not empty
    if (filter_var($email, FILTER_VALIDATE_EMAIL)){
        $receiver = "amankr88640@gmail.com";//email reciver email adress
        $subject = "From: $name <$email>";// subject of the email. subject looks like same as name <@gmail.com>
        $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\n\nMessage: $message\n\nRegards,\n$name";
        //merging and concating all user values  inside body variable. \n  is used for  new line
        $sender = "From: $email";//sender email
        if(mail($receiver,$subject,$body,$sender)){ // it is in inbuilt function in php to send mail 
            echo "You messsage has been Sent";

        }else{
            echo "Sorry, failed to send your message!";
        }
    }else{
        echo "Enter a Valid email!";
    }

}else{
    echo "Email and password is required!";
}


?>