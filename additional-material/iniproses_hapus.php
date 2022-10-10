<?php 
include "koneksi.php";

$id = $_GET['id'];
$qryDelete = mysqli_query($conn, "DELETE FROM tb_peminjaman WHERE tp_id='".$id."'");

if($qryDelete){
    echo "<script>alert('Data berhasil dihapus!');</script>";
    echo "<script>window.location.href='index.php'</script>";
} else {
    echo "Oops! Data gagal terhapus:(";
}

?>