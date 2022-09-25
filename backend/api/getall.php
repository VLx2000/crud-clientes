<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: *');
    header('Access-Control-Allow-Headers: *');
    
    include_once '../config/database.php';
    include_once '../models/ClienteModel.php';

    $database = new Database();
    $db = $database->getConnection();

    $items = new Cliente($db);

    $page = isset($_GET['page']) ? $_GET['page'] : die();

    $res = $items->getClientes($page);
    
    $itemCount = $res->rowCount();

    //echo json_encode($itemCount);

    if($itemCount > 0){
        
        $clientes = array();
        $clientes["body"] = array();
        $clientes["itemCount"] = $itemCount;

        while ($row = $res->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $e = array(
                "id" => $id,
                "nome" => $nome,
                "nascimento" => $nascimento,
                "cpf" => $cpf,
                "email" => $email,
                "celular" => $celular,
                "endereco" => $endereco,
                "observacao" => $observacao
            );

            array_push($clientes["body"], $e);
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