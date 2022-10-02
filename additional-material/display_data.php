<?php 
session_start();
include "../db/config.php";

$sessionTask = $_SESSION['tr_id'];
$displayData = mysqli_query($conn, "SELECT * FROM tb_task ORDER BY tt_id WHERE tt_tr_id='$sessionTask'");

$dataArr = array();
while ($data = mysqli_fetch_array($displayData)){
    $dataArr[] = array (
        'id' => $data['tt_id'],
        'title' => $data['tt_title'],
        'start' => $data['tt_reminder_date']
        // 'end' => $data['tt_reminder_date']
        );
}

echo json_encode($dataArr);
?>