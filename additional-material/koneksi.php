<?php

$conn = mysqli_connect("localhost","root","","db_peminjaman");

if($conn){
    echo "";
}else{
    echo "gagal terhubung".mysqli_error();
}

?>