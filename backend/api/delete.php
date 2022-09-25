<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: *');
    header('Access-Control-Allow-Headers: *');
    
    include_once '../config/database.php';
    include_once '../models/ClienteModel.php';
    
    $database = new Database();
    $db = $database->getConnection();
    
    $item = new Cliente($db);

    $item->id = isset($_GET['id']) ? $_GET['id'] : die();
    
    if($item->deleteCliente()){
        echo json_encode(
            array("message" => "Cliente deletado")
        );
    } else{
        echo json_encode(
            array("message" => "Não foi posspivel deletar o cliente")
        );
    }
?>