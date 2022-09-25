<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: *');
    header('Access-Control-Allow-Headers: *');

    include_once '../config/database.php';
    include_once '../models/ClienteModel.php';

    $database = new Database();
    $db = $database->getConnection();

    $item = new Cliente($db);
    $res = $item->getNumberOfPages();
    http_response_code(200);
    echo json_encode($res->rowCount());
?>