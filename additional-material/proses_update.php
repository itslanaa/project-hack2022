<?php 
include_once "koneksi.php";
date_default_timezone_set("Asia/jakarta");

if(isset($_POST['update'])){
    $id = $_POST['id'];
    $item = $_POST['namaBuku'];
    $qty = $_POST['jumlah'];
    $name = $_POST['nama'];
    $telp = $_POST['telp'];
    $kembali = date('Y-m-d H:i:s');

    $qryUpdate = mysqli_query($conn, "UPDATE tb_peminjaman SET
        tp_item='".$item."',
        tp_jumlah='".$qty."',
        tp_nama='".$name."',
        tp_telp='".$telp."',
        tp_tgl_kembali='$kembali' WHERE tp_id='".$id."'");

    if($qryUpdate){
        echo "<script>alert('Data berhasil terupdate!');</script>";
        echo "<script>window.location.href='index.php';</script>";
    } else {
        echo "<script>alert('Oops! Data gagal diupdate!');</script>";
        echo "<scriptwindow.location.href='update.php';></script>";
    }
}
?>