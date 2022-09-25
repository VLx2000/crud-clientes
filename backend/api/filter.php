<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: *');
    header('Access-Control-Allow-Headers: *');
    
    include_once '../config/database.php';
    include_once '../models/ClienteModel.php';

    $database = new Database();
    $db = $database->getConnection();

    $items = new Cliente($db);

    $filter = isset($_GET['filter']) ? $_GET['filter'] : die();

    $res = $items->getClientesByFilter($filter);
    
    $itemCount = $res->rowCount();

    //echo json_encode($itemCount);
    //echo $filter;
    if($itemCount > 0){
        
        $clientes = array();
        $clientes["body"] = array();
        $clientes["itemCount"] = $itemCount;

        while ($row = $res->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $cliente = array(
                "id" => $id,
                "nome" => $nome,
                "nascimento" => $nascimento,
                "cpf" => $cpf,
                "email" => $email,
                "celular" => $celular,
                "endereco" => $endereco,
                "observacao" => $observacao
            );

            array_push($clientes["body"], $cliente);
        }
        echo json_encode($clientes);
    }

    else{
        http_response_code(204);
        echo json_encode(
            array("message" => "Não foram achados clientes")
        );
    }
?>