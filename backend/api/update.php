<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: PUT");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    
    include_once '../config/database.php';
    include_once '../models/ClienteModel.php';
    
    $database = new Database();
    $db = $database->getConnection();
    
    $item = new Cliente($db);
    
    $data = json_decode(file_get_contents("php://input"));
    
    $item->id = isset($_GET['id']) ? $_GET['id'] : die();
    
    $item->nome = $data->nome;
    $item->nascimento = $data->nascimento;
    $item->cpf = $data->cpf;
    $item->email = $data->email;
    $item->celular = $data->celular;
    $item->endereco = $data->endereco;
    $item->observacao = $data->observacao;
    
    if($item->updateCliente()){
        echo json_encode(
            array("message" => "Cliente atualizado com sucesso")
        );
    } else{
        echo json_encode(
            array("message" => "Não foi possível atualizar o cliente")
        );
    }
?>