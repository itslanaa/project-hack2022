<?php

function generateRandomString($length = 10) {
    $characters = 'abcdefghijklmnopqrstuvwxyz';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
    $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}
echo "\n";
echo "Username\n";
echo "-> " ;
$mau = trim(fgets(STDIN));
echo "\n";
echo "Jumlah\n";
echo "-> " ;
$berapa = trim(fgets(STDIN));
echo "\n";
echo "Password\n";
echo "-> " ;
$pass = trim(fgets(STDIN));
{
for($i=0;$i<$berapa;$i++)
{
$mail = $mau.$i."@panelopedia.com";
$send = curl('https://spclient.wg.spotify.com:443/signup/public/v1/account/', 'iagree=true&birth_day=12&platform=Android-ARM&creation_point=client_mobile&password='.$pass.'&key=142b583129b2df829de3656f9eb484e6&birth_year=2000&email='.$mail.'&gender=male&app_version=849800892&birth_month=12&password_repeat='.$pass.'');
	$data = json_decode($send[0]);
		if ($data->status == 1) {
			echo "\nSukses | Email : ".$mail;
			$file = "akun.php";
			$handle = fopen($file, 'a');
			fwrite($handle, $mail."|".$pass);
			fwrite($handle, "\n");
			fclose($handle);
		} else {
			echo $data->errors->email."\n";
	}
	}

function random($length,$a) { 		$str = ""; 		if ($a == 0) { 			$characters = array_merge(range('0','9')); 		}elseif ($a == 1) { 			$characters = array_merge(range('a','z')); 		}elseif ($a == 2) { 			$characters = array_merge(range('A','Z')); 		}elseif ($a == 3) { 			$characters = array_merge(range('0','9'),range('a','z')); 		}elseif ($a == 4) { 			$characters = array_merge(range('0','9'),range('A','Z')); 		}elseif ($a == 5) { 			$characters = array_merge(range('a','z'),range('A','Z')); 		}elseif ($a == 6) { 			$characters = array_merge(range('0','9'),range('a','z'),range('A','Z')); 		} 		$max = count($characters) - 1; 		for ($i = 0; $i < $length; $i++) { 			$rand = mt_rand(0, $max); 			$str .= $characters[$rand]; 		} 		return $str; } function curl($url, $fields = null, $headers = null) { $ch = curl_init(); curl_setopt($ch, CURLOPT_URL, $url); curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true); curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); if ($fields !== null) { curl_setopt($ch, CURLOPT_POST, 1); curl_setopt($ch, CURLOPT_POSTFIELDS, $fields); } if ($headers !== null) { curl_setopt($ch, CURLOPT_HTTPHEADER, $headers); } $result = curl_exec($ch); $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE); curl_close($ch); return array( $result, $httpcode ); }

    $ch = curl_init();
    echo "\n";

echo "\n";
echo "DONE GAN!!!\n";
echo "\n";
}
?>