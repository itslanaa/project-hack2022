<?php //ob_start();
if(isset($_REQUEST['event']) && $_REQUEST['event']!=''){$event=$_REQUEST['event'];}else{$event='';}
define('SITE_EMAIL', 'test@test.com');

    /* recipients */
    $to1= SITE_EMAIL;
    /* subject */
    $subject1 = "Floris Theme Subject";
    /* message */
    $message1 = '<table width="100%" border="0" cellspacing="0" cellpadding="0">
		

	   <tr>
        <td width="33%"><font color="#f35D14" size="2" face="Tahoma">Subject:</font></td>
        <td width="67%" height="22"><font color="#333333" size="-1" face="Tahoma">'.$_POST['subject'].'</font></td>
      </tr>	

      <tr>
        <td width="33%"><font color="#f35D14" size="2" face="Tahoma">Name:</font></td>
        <td width="67%" height="22"><font color="#333333" size="-1" face="Tahoma">'.$_POST['name'].'</font></td>
      </tr>
           
      <tr>
        <td width="33%"><font color="#f35D14" size="2" face="Tahoma">E-mail :</font></td>
        <td width="67%" height="22"><font color="#333333" size="-1" face="Tahoma">'.$_POST['email'].'</font></td>
      </tr>
       
      <tr>
        <td width="33%"><font color="#f35D14" size="2" face="Tahoma">Phone :</font></td>
        <td width="67%" height="22"><font color="#333333" size="-1" face="Tahoma">'.$_POST['phone'].'</font></td>
      </tr>
        
	 <tr>
        <td width="33%"><font color="#f35D14" size="2" face="Tahoma">Message :</font></td>
        <td width="67%" height="22"><font color="#333333" size="-1" face="Tahoma">'.$_POST['message'].'</font></td>
      </tr>
    </table>';
    /* To send HTML mail, you can set the Content-type header. */
    $headers1  = "MIME-Version: 1.0\r\n";
    $headers1 .= "Content-type: text/html; charset=iso-8859-1\r\n";
    /* additional headers */
    $headers1 .= "From: ".$_POST['name']." <".$_POST['email'].">\r\n";
    /* and now mail it */
     
     
  mail($to1, $subject1, $message1, $headers1);
  
  echo "<div class='alert alert-email-success'>Thank you, we have received your message and will get back to you shortly.</div>";   
 
?>