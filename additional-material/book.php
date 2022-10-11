<?php
//Created with <3 by rzyz gavini
$header = array( 			
    "X-LIBRARY: okhttp+network-api",
    "Authorization: Basic dGhlc2FpbnRzYnY6ZGdDVnlhcXZCeGdN",
    "User-Agent: Booking.App/22.9 Android/10; Type: mobile; AppStore: google; Brand: Xiaomi; Model: Mi A1;",
    "X-Booking-API-Version: 1",
  	);   
   
function id($length = 5) { 
return substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyz', ceil($length/strlen($x)))),1,$length); 
  }				
  					   
function reg($email, $header, $id){
$exp = explode('@',$email);
$crot = join(''.$id.'@', $exp);
$data = json_encode(array(
													"email" => $crot,
													"password" => "anjing404",
													"return_auth_token" => 1));		

$url = 'https://mobile-apps.booking.com/json/mobile.createUserAccount?&user_os=10&user_version=22.9-android&device_id=c42c34ab-3b19-4255-b3cd-2bde6027a37b&network_type=4g&languagecode=id&display=normal_xxhdpi&affiliate_id=337862';
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
	$x = curl_exec($ch);
	curl_close($ch);
	if(strpos($x, "auth_token")){
	return array($x, $data);
	} else {
	echo "Contact : Rzyz Gavini\n";
		
	}
};

function add($token, $header,$result){

	$hotel = array('3342092','1102392','4984319');

	foreach($hotel as $hotelid) {
	
	$url = 'https://mobile-apps.booking.com/json/mobile.Wishlist?wishlist_action=create_new_wishlist&name=Jakarta&hotel_id='.$hotelid.'&list_dest_id=city%3A%3A-2679652&use_list_details=1&checkin=2020-06-27&checkout=2020-06-28&num_rooms=1&num_adults=2&num_children=0&user_os=8.0.0&user_version=22.9-android&device_id=c42c34ab-3b19-4255-b3cd-2bde6027a37b&network_type=4g&auth_token='.$token.'&languagecode=id&display=normal_xxhdpi&affiliate_id=337862';
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
	curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
	$x = curl_exec($ch);
	curl_close($ch);
	$x1 = json_decode($x, 1);
	if(strpos($x, "Reward sudah menunggu!")){				
					echo "[!] ".strip_tags($x1["gta_add_three_items_campaign_status"]["modal_body_text"])."\n";
					echo '[+] Check Inbox '.$result["email"].'|'.$result["password"].''."\n";
					echo "[!] Check for Result on Account.txt\n";
	
	}
	}
}

@@system(clear);
echo "+-NETWEZEN REVOLUTION-+\n";
echo "+-Booking.com-+\n";
echo "[!] use vpn for get more rewards [!]\n";
sleep(3);
echo "[?] Email (ex : netwezeen@yopmail.com) : ";
$email = trim(fgets(STDIN));
echo "[?] Limit : ";
$limit = trim(fgets(STDIN));

for($i=1;$i<=$limit;$i++){
				$id = id();
				echo "[!] Registering...\n";
				$token = reg($email, $header, $id);
				$token1 = json_decode($token[0], 1);
				$result = json_decode($token[1], 1);
				echo '[+] TOKEN : '.$token1["auth_token"].''."\n";
				echo "[!] Proses Klaim..\n";
				echo add($token1["auth_token"], $header, $result);
				echo "++++++++++++++++++++++++++++++++++++++++++\n";
				sleep(3);
				$fp = fopen('Account.txt', 'a+');
				fwrite($fp, $result["email"]."|".$result["password"]."\n");
				fclose($fp);
}

?>