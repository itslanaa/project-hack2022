<?php 
include "conn.php";

if(isset($_POST['confirm'])){  
    $name = $_POST['name'];
    $note = $_POST['note'];
    
    $sql = mysqli_query($query, "UPDATE tb_tmp_orders SET tto_name_costumer='$name', tto_note='$note' WHERE tto_no_orders='TMP1' ");
    
    if($sql){
        $result = mysqli_query($query, 'SELECT SUM(tto_qty) AS total FROM tb_tmp_orders'); 
        $row = mysqli_fetch_object($result);

        $date = date('Y:m:d');
        $add = mysqli_query($query "INSERT INTO tb_orders VALUES(
                                        '',
                                        '',
                                        '$date',
                                        '$row->total',
                                        '".$nama."',
                                        '".$note."'
        )");

        echo "<script>window.location.href='Cart.php'</script>";
    }else{
        echo "failed".mysqli_error($sql);
    }
}


?>