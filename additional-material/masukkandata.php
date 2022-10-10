<?php
include "koneksi.php";
date_default_timezone_set("Asia/jakarta");

    if(isset($_POST["submit"])){

        $item = $_POST['namaBuku'];
        $qty = $_POST['jumlah'];
        $name = $_POST['nama'];
        $telp = $_POST['telp'];
        $timestamp = date('Y-m-d H:i:s');


        $qryCreate = mysqli_query($conn, "INSERT INTO tb_peminjaman VALUES(
            '',
            '".$item."',
            '".$qty."',
            '".$name."',
            '".$telp."',
            '".$timestamp."',
            '".$timestamp."'
        )");
        echo "<script>alert('Data berhasil disimpan!');</script>";
        echo "<script>window.location.href='index.php';</script>";

    }

    ?>