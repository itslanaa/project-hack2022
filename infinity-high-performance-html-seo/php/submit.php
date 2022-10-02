<?php


// specify your email here

$to = 'adnanarf@gmail.com';



	// Assigning data from $_POST array to variables
    if (isset($_POST['name'])) { $name = $_POST['name']; }
    if (isset($_POST['email'])) { $from = $_POST['email']; }
    if (isset($_POST['company'])) { $company = $_POST['company']; }
    if (isset($_POST['message'])) { $message = $_POST['message']; }
	
	// Construct subject of the email
	$subject = 'Contact Iquery ' . $name;

	// Construct email body
	$body_message .= 'NAME: ' . $name . "\r\n\n";
	$body_message .= 'EMAIL: ' . $from . "\r\n\n";
	$body_message .= 'SUBJECT: ' . $company . "\r\n\n";
	$body_message .= 'MESSAGE: ' . $message . "\r\n\n";

	// Construct headers of the message
	$headers = 'From: ' . $from . "\r\n";
	$headers .= 'Reply-To: ' . $from . "\r\n";

	$mail_sent = mail($to, $subject, $body_message, $headers);

	if ($mail_sent == true){ ?>
<script language="javascript" type="text/javascript">
		window.alert("Sent Successfuly.");
		</script>
<?php } else { ?>
<script language="javascript" type="text/javascript">
                    window.alert("Error! Please Try Again Later.");
                </script>
<?php
	} // End else
    
?>
