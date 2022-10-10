<?php 
include_once "koneksi.php";
date_default_timezone_set("Asia/jakarta");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Input Data Pinjam</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<div class="outer">
    <h2>Input Data Pinjam</h2>
    <form action="proses_input.php" method="POST">
        <label>Nama Buku :</label>
        <input type="text" name="namaBuku" placeholder="Masukkan nama buku yang dipinjam" required>
        <label>Jumlah Pinjam :</label>
        <input type="number" name="jumlah" placeholder="Masukkan jumlah buku yang dipinjam" required>
        <label>Nama Peminjam :</label>
        <input type="text" name="nama" placeholder="Masukkan nama lengkap anda" required>
        <label>Telp Peminjam :</label>
        <input type="number" name="telp" placeholder="Masukkan nomor telpon anda (ex: 08xxxxxxxxxx)" maxlength="13" required>
        <input type="submit" name="submit">
        <input type="reset" name="reset">
    </form>
    </div>
</body>
</html>