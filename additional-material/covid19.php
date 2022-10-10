<?php

echo "÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷";
echo "\n";
echo "•    CORONA VIRUS CHECKER.  •";
echo "\n";
echo "•          Coded by         •";
echo "\n";
echo "•         @rafli.mhmd       •";
echo "\n";
echo "÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷";
echo "\n";

$url = "https://api.kawalcorona.com/indonesia/";

$korban = curl_init($url);
curl_setopt($korban,CURLOPT_RETURNTRANSFER,true);
$ekse = curl_exec($korban);

$hasil = json_decode($ekse);

$negara = $hasil[0]->name;
$Posit = $hasil[0]->positif;
$dead = $hasil[0]->meninggal;
$selamat = $hasil[0]->sembuh;

echo "===============================";
echo "\n";
echo "Negara : ".$negara;
echo "\n";
echo "Positif : ".$Posit;
echo "\n";
echo "Sembuh : ".$selamat;
echo "\n";
echo "Meninggal : ".$dead;
echo "\n";
echo "==============================";

?>