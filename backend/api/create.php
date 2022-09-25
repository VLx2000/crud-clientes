<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: *');
    header('Access-Control-Allow-Headers: *');

    include_once '../config/database.php';
    include_once '../models/ClienteModel.php';

    $database = new Database();
    $db = $database->getConnection();

    $item = new Cliente($db);

    $data = json_decode(file_get_contents("php://input"));
    //echo $data->nome;
    $item->nome = $data->nome;
    $item->nascimento = $data->nascimento;
    $item->cpf = $data->cpf;
    $item->email = $data->email;
    $item->celular = $data->celular;
    $item->endereco = $data->endereco;
    $item->observacao = $data->observacao;
    
    if($item->createCliente()){
        http_response_code(200);
        echo json_encode(
            array("message" => "Cliente criado com sucesso")
        );
    } else{
        http_response_code(400);
        echo json_encode(
            array("message" => "Não foi possível criar o cliente")
        );
    }
?>