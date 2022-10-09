<?php

if(file_exists("apikey")) {
            $key = file_get_contents('apikey');
        } else {
            echo @color('red', "APIKEY MASIH KOSONG !!!\n");
            echo @color('nevy', "MASUKKAN APIKEY : ");
            $key = trim(fgets(STDIN));
            save($key, 'apikey');
        }
$sms = new SMSActivate($key);
$saldo = $sms->getBalance();
echo color('green', "[+]")." Sisa saldo: $saldo ₽\n";
echo "REFF : ";
$reff = trim(fgets(STDIN));

echo @color('yellow', "JUMLAH : ");
$qty = trim(fgets(STDIN));
for ($ia=0; $ia < $qty; $ia++) {
echo "\n";
$no = $ia+1;
gass:
echo @color('green', "[$no] - [".date("l, Y-m-d H:i:s")."]\n");

$getnum = $sms->getNumber("je",6,0,"any");
if (is_array($getnum)) {
        $id = $getnum["id"];
        $num = $getnum["number"];

$nomor = str_replace('628', '8', $num);
echo @color('yellow', "NOMOR : $nomor\n");

$device = urut(16);
$headers = array();
$headers[] = 'Accept: application/json, text/plain, */*';
$headers[] = 'X-Device-Id: '.$device;
$headers[] = 'X-Timezone: Asia/Jakarta';
$headers[] = 'Accept-Language: ID';
$headers[] = 'Host: api.nanovest.io';
$headers[] = 'Connection: close';
$headers[] = 'User-Agent: okhttp/3.12.12';
$ceknmr = curl('https://api.nanovest.io/v1/account/phone-number/availability?countryCode=62&phoneNumber='.$nomor, null, $headers);
if (strpos($ceknmr[1], '"available":true')) {
	echo @color('green', "OK\n");
	$ngotp = array();
	$ngotp[] = 'Accept: application/json, text/plain, */*';
	$ngotp[] = 'X-Device-Id: '.$device;
	$ngotp[] = 'X-Timezone: Asia/Jakarta';
	$ngotp[] = 'Accept-Language: ID';
	$ngotp[] = 'Sentry-Trace: '.urut(32).'-'.urut(16).'-1';
	$ngotp[] = 'Content-Type: application/json';
	$ngotp[] = 'Host: api.nanovest.io';
	$ngotp[] = 'Connection: close';
	$ngotp[] = 'User-Agent: okhttp/3.12.12';
	$motp = curl('https://api.nanovest.io/v1/auth/otp', '{"countryCode":"62","phoneNumber":"'.$nomor.'"}', $ngotp);
	if (strpos($motp[1], '"message":null')) {
	$headersx = array();
        $headersx[] = 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0';
        $headersx[] = 'Content-Type: application/x-www-form-urlencoded';	
	$status = $sms->setStatus($id,1);
	echo color('blue', "WAIT OTP : ");
	sleep(10);  
for ($i=0; $i < 120; $i++) { 
                    $ceknmr = curl('https://sms-activate.ru/stubs/handler_api.php', 'action=getCurrentActivationsDataTables&api_key='.$key.'&order=id&orderBy=asc&start=0&length=10', $headersx);

                    if (strpos($ceknmr[1], 'Kode rahasia verifikasi nanovest kamu adalah')) {
                        $otp = get_between($ceknmr[1], 'Kode rahasia verifikasi nanovest kamu adalah: ', '","');
                        goto ngotepe;
                        
                        
                    } else {
                        echo ".";
                        sleep(1);
                        

                    }
                  }
$status = $sms->setStatus($id,8);
goto gass;

ngotepe:
   echo color('green', "$otp\n");
	$ver = array();
	$ver[] = 'Accept: application/json, text/plain, */*';
	$ver[] = 'X-Device-Id: '.$device;
	$ver[] = 'X-Timezone: Asia/Jakarta';
	$ver[] = 'Accept-Language: ID';
	$ver[] = 'Content-Type: application/json';
	$ver[] = 'Host: api.nanovest.io';
	$ver[] = 'Connection: close';
	$ver[] = 'User-Agent: okhttp/3.12.12';
	$verif = curl('https://api.nanovest.io/v1/auth/token', '{"countryCode":"62","phoneNumber":"'.$nomor.'","code":"'.$otp.'"}', $ver);
	
	if (strpos($verif[1], '"message":null')) {
		$token = json_decode($verif[1])->data->token;
		$head = array();
		$head[] = 'Accept: application/json, text/plain, */*';
		$head[] = 'Service-Name: bff-wallet';
		$head[] = 'X-Device-Id: '.$device;
		$head[] = 'X-Timezone: Asia/Jakarta';
		$head[] = 'Accept-Language: ID';
		$head[] = 'Authorization: bearer '.$token;
		$head[] = 'Content-Type: application/json';
		$head[] = 'Host: api.nanovest.io';
		$head[] = 'Connection: close';
		$head[] = 'User-Agent: okhttp/3.12.12';

		//////
		$headget = array();
		$headget[] = 'Accept: application/json, text/plain, */*';
		$headget[] = 'Service-Name: bff-wallet';
		$headget[] = 'X-Device-Id: '.$device;
		$headget[] = 'X-Timezone: Asia/Jakarta';
		$headget[] = 'Accept-Language: ID';
		$headget[] = 'Authorization: bearer '.$token;
		$headget[] = 'Host: api.nanovest.io';
		$headget[] = 'Connection: close';
		$headget[] = 'User-Agent: okhttp/3.12.12';
		$lang = curl('https://api.nanovest.io/v1/user-info/language/update', '{"language":"ID"}', $head, false, 'PUT');
		$conf = curl('https://api.nanovest.io/v1/gamification/configs/referee-reward', null, $headget);
		$headreff = array();
		$headreff[] = 'Accept: application/json, text/plain, */*';
		$headreff[] = 'Service-Name: bff-wallet';
		$headreff[] = 'X-Device-Id: '.$device;
		$headreff[] = 'X-Timezone: Asia/Jakarta';
		$headreff[] = 'Accept-Language: ID';
		$headreff[] = 'Authorization: bearer '.$token;
		$headreff[] = 'Content-Length: 0';
		$headreff[] = 'Host: api.nanovest.io';
		$headreff[] = 'Connection: close';
		$headreff[] = 'User-Agent: okhttp/3.12.12';

		
			$ngereff = curl('https://api.nanovest.io/v1/referral/referral-code/submit/'.$reff, '', $headreff);
		echo @color('green', "$ngereff[1]\n");
		$headtag = array();
		$headtag[] = 'Accept: application/json, text/plain, */*';
		$headtag[] = 'X-Device-Id: '.$device;
		$headtag[] = 'X-Timezone: Asia/Jakarta';
		$headtag[] = 'Accept-Language: ID';
		$headtag[] = 'Authorization: bearer '.$token;
		$headtag[] = 'Content-Type: application/json';
		$headtag[] = 'Host: api.nanovest.io';
		$headtag[] = 'Connection: close';
		$headtag[] = 'User-Agent: okhttp/3.12.12';
		$data = file_get_contents("https://swappery.site/data.php?qty=1&domain=tinta.co.id");
	    $datas = json_decode($data);
	    $username = $datas->result[0]->username;
	    $postag = curl('https://api.nanovest.io/v1/account/nanotag', '{"countryCode":"62","nanoTag":"'.$username.'","phoneNumber":"'.$nomor.'"}', $headtag);
	//    echo "$postag[1]\n";
	    $wait = array();
		$wait[] = 'Accept: application/json, text/plain, */*';
		$wait[] = 'Service-Name: bff-wallet';
		$wait[] = 'X-Device-Id: '.$device;
		$wait[] = 'X-Timezone: Asia/Jakarta';
		$wait[] = 'Accept-Language: ID';
		$wait[] = 'Authorization: bearer '.$token;
		$wait[] = 'Sentry-Trace: '.urut(32).'-'.urut(16).'-1';
		$wait[] = 'Host: api.nanovest.io';
		$wait[] = 'Connection: close';
		$wait[] = 'User-Agent: okhttp/3.12.12';
		$getwait = curl('https://api.nanovest.io/v1/gamification/waitlist/stats', null, $wait);
		$pesan = json_decode($getwait[1])->data->rewards->totalRewardsNBT;
		echo @color('nevy', "totalRewardsNBT : $pesan\n");
        $status = $sms->setStatus($id,6);
        $saldo = $sms->getBalance();
        echo color('green', "[+]")." Sisa saldo: $saldo ₽\n";




	} else {
		echo @color('red', "$verif[1]\n");
        $status = $sms->setStatus($id,8);
	}

	} else {
		echo @color('red', "GAGAL KIRIM PESAN\n");
        echo @color('red', "$motp[1]\n");
        $status = $sms->setStatus($id,8);
goto gass;
	}

} else {
	echo @color('red', "NOMOR SUDAH TERDAFTAR\n");
	$status = $sms->setStatus($id,8);
goto gass;
}
} else {
        die($getnum);
    }


}


class SMSActivate {
    private $url = 'https://sms-activate.ru/stubs/handler_api.php';
    private $apiKey;

    public function __construct($apiKey) {
        $this->apiKey = $apiKey;
    }

    public function getBalance() {
        return $this->request(array('api_key' => $this->apiKey, 'action' => __FUNCTION__), 'GET');
    }
    
    public function getNumber($service, $country = null, $forward = 0, $operator = null, $ref = null){
        $requestParam = array('api_key' => $this->apiKey,'action' => __FUNCTION__,'service' => $service,'forward'=>$forward);
        if($country){
            $requestParam['country']=$country;
        }
        if($operator &&($country==0 || $country == 1 || $country == 2)){
            $requestParam['service'] = $operator;
        }
        if($ref){
            $requestParam['ref'] = $ref;
        }
        return $this->request($requestParam, 'POST',null,1);
    }

    public function setStatus($id, $status, $forward = 0){
        $requestParam = array('api_key' => $this->apiKey,'action' => __FUNCTION__,'id' => $id,'status' => $status);

        if($forward){
            $requestParam['forward'] = $forward;
        }

        return $this->request($requestParam,'POST',null,3);
    }

    private function request($data, $method, $parseAsJSON = null, $getNumber = null) {
        $method = strtoupper($method);

        if (!in_array($method, array('GET', 'POST')))
            throw new InvalidArgumentException('Method can only be GET or POST');

        $serializedData = http_build_query($data);

        if ($method === 'GET') {
            $result = file_get_contents("$this->url?$serializedData");
        } else {
            $options = array(
                'http' => array(
                    'header' => "Content-type: application/x-www-form-urlencoded\r\n",
                    'method' => 'POST',
                    'content' => $serializedData
                )
            );

            $context = stream_context_create($options);
            $result = file_get_contents($this->url, false, $context);
        }

        if ($parseAsJSON)
            return json_decode($result,true);

        $parsedResponse = explode(':', $result);

        if ($getNumber == 1) {
            $returnNumber = array('id' => $parsedResponse[1], 'number' => $parsedResponse[2]);
            return $returnNumber;
        }
        if ($getNumber == 2) {
            $returnStatus = array('status' => $parsedResponse[0], 'code' => $parsedResponse[1]);
            return $returnStatus;
        }
        if ($getNumber == 3) {
            $returnStatus = array('status' => $parsedResponse[0]);
            return $returnStatus;
        }

        return $parsedResponse[1];
    }

}

function curl($url,$post,$headers,$follow=false,$method=null)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        if ($follow == true) curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_HEADER, 1);
        if ($method !== null) curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
        if ($headers !== null) curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        if ($post !== null) curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
        $result = curl_exec($ch);
        $header = substr($result, 0, curl_getinfo($ch, CURLINFO_HEADER_SIZE));
        $body = substr($result, curl_getinfo($ch, CURLINFO_HEADER_SIZE));
        preg_match_all('/^Set-Cookie:\s*([^;]*)/mi', $result, $matches);
        $cookies = array();
        foreach($matches[1] as $item) {
          parse_str($item, $cookie);
          $cookies = array_merge($cookies, $cookie);
        }
        return array (
        $header,
        $body,
        $cookies
        );
    }

function save($data, $file) 
    {
        $handle = fopen($file, 'a+');
        fwrite($handle, $data);
        fclose($handle);
    }

function urut($length) 
    {
        $str = "";
        
            $characters = array_merge(range('0','9'),range('a','z'));
        
        $max = count($characters) - 1;
        for ($i = 0; $i < $length; $i++) {
            $rand = mt_rand(0, $max);
            $str .= $characters[$rand];
        }
        return $str;
    }

function get_between($string, $start, $end) 
    {
        $string = " ".$string;
        $ini = strpos($string,$start);
        if ($ini == 0) return "";
        $ini += strlen($start);
        $len = strpos($string,$end,$ini) - $ini;
        return substr($string,$ini,$len);
    }

function remove_space($var) {
    $new = str_replace("\n", "", $var);
    $new = str_replace("\t", "", $new);
    $new = str_replace(" ", "", $new);
    return $new;
}
function urut2($length) 
    {
        $str = "";
        
            $characters = array_merge(range('0','9'),range('a','z'),range('A','Z'));
        
        $max = count($characters) - 1;
        for ($i = 0; $i < $length; $i++) {
            $rand = mt_rand(0, $max);
            $str .= $characters[$rand];
        }
        return $str;
    }
    function urut3($length) 
    {
        $str = "";
        
            $characters = array_merge(range('0','9'));
        
        $max = count($characters) - 1;
        for ($i = 0; $i < $length; $i++) {
            $rand = mt_rand(0, $max);
            $str .= $characters[$rand];
        }
        return $str;
    }

    function gen_uuid() {
    return sprintf( '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
        // 32 bits for "time_low"
        mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ),

        // 16 bits for "time_mid"
        mt_rand( 0, 0xffff ),

        // 16 bits for "time_hi_and_version",
        // four most significant bits holds version number 4
        mt_rand( 0, 0x0fff ) | 0x4000,

        // 16 bits, 8 bits for "clk_seq_hi_res",
        // 8 bits for "clk_seq_low",
        // two most significant bits holds zero and one for variant DCE1.1
        mt_rand( 0, 0x3fff ) | 0x8000,

        // 48 bits for "node"
        mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff )
    );
}
function color($color = "default" , $text)
    {
        $arrayColor = array(
            'grey'      => '1;30',
            'red'       => '1;31',
            'green'     => '1;32',
            'yellow'    => '1;33',
            'blue'      => '1;34',
            'purple'    => '1;35',
            'nevy'      => '1;36',
            'white'     => '1;0',
        );  
        return "\033[".$arrayColor[$color]."m".$text."\033[0m";
    }
    function retrieveText($file, $init, $end, $sulfix = '')
{
    $i = 1;
    $output = '';

    $handle = fopen($file, 'r');
    while (false === feof($handle) && $i <= $end) {
        $data = fgets($handle);

        if ($i >= $init) {
            $output .= $data . $sulfix;
        }
        $i++;
    }
    fclose($handle);

    return $output;
}
function getHeaders($result)
    {
        if (!preg_match_all('/([A-Za-z\-]{1,})\:(.*)\\r/', $result, $matches) 
                || !isset($matches[1], $matches[2])){
            return false;
        }

        $headers = [];

        foreach ($matches[1] as $index => $key){
            $headers[$key] = substr($matches[2][$index], 1);
        }

        return $headers;
    }