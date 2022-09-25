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

    $item->getCliente();

    if($item->nome != null){
        // create array
        $cliente = array(
            "id" => $item->id,
            "nome" => $item->nome,
            "nascimento" => $item->nascimento,
            "cpf" => $item->cpf,
            "email" => $item->email,
            "celular" => $item->celular,
            "endereco" => $item->endereco,
            "observacao" => $item->observacao
        );
      
        http_response_code(200);
        echo json_encode($cliente);
    }
      
    else{
        http_response_code(404);
        echo json_encode(
            array("message" => "Cliente não encontrado")
        );
    }
?>