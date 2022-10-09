<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>USK Klaster 5.7.1 - Form Input</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<?php 
if(isset($_POST['gass'])){

$hp = $_POST['noHp'];
$call = $_POST['call'];
$url="https://api.warifp.co/v1/jokesphone/'$call'/'$hp'";
 
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$response = curl_exec($curl);
curl_close($curl);
echo $response; 

}
?>
<div class="border">
    <h1>Jokes Phone <i>Web-Based</i></h1>
    <br>
    <form action="" method="POST">
        <label for="nohp">Nomor Handphone:</label>
        <input type="number" name="noHp" placeholder="Masukkan Nomor Handphone (ex: 08xxxxxx)">
        <label for="totalFood">Quantity</label>
        <select name="call" id="call">
            <option value="error">--- Pilih ---</option>
            <option value="6209">1. Prank Antar Pizza</option>
            <option value="6205">2. Prank Sepeda 1.455.000,-</option>
            <option value="6203">3. Prank Modifikasi Meteran Listrik</option>
            <option value="6208">4. Prank anjing berisik</option>
            <option value="6201">5. Prank nabrak mobil</option>
            <option value="6210">6. Prank Rokok Ganja</option>
            <option value="6204">7. Prank Tuduh Nyolong Wifi</option>
            <option value="6202">8. Prank temen kena tilang</option>
        </select>
        <div class="button-sec">
        <input type="submit" name="gass" value="GASS PRANK!">
        <input type="reset" value="RESET">
        </div>
    </form>
</div>
<div class="cr">
    &copy; 2022 - Jokes Phone Web-Based - <a href="https://km-dev.or.id">KM Developer.</a>
</div>
</body>
</html>