<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: DELETE");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    
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