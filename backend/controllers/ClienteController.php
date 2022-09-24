<?php

class ClienteController extends BaseController
{
    /**
     * "/cliente/list" Endpoint - Get list of users
     */
    public function listAction()
    {
        $strErrorDesc = '';
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        $arrQueryStringParams = $this->getQueryStringParams();
 
        if (strtoupper($requestMethod) == 'GET') {
            try {
                /* $userModel = new ClienteModel();
 
                $intLimit = 10;
                if (isset($arrQueryStringParams['limit']) && $arrQueryStringParams['limit']) {
                    $intLimit = $arrQueryStringParams['limit'];
                }
 
                $arrClientes = $userModel->getClientes($intLimit); */
                header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
                header('Access-Control-Allow-Credentials: true');
                header('Access-Control-Max-Age: 86400');    // cache for 1 day
                $arrClientes = array( 
                                array("id"=> 1,
                                "nome"=> "teste",
                                "nascimento"=> "teste",
                                "cpf"=> "teste",
                                "celular"=> "teste",
                                "email"=> "teste",
                                "endereco"=> "teste",
                                "observacao"=> "teste"),
                                array("id"=> 2,
                                "nome"=> "teste",
                                "nascimento"=> "teste",
                                "cpf"=> "teste",
                                "celular"=> "teste",
                                "email"=> "teste",
                                "endereco"=> "teste",
                                "observacao"=> "teste"),
                                array("id"=> 3,
                                "nome"=> "teste",
                                "nascimento"=> "teste",
                                "cpf"=> "teste",
                                "celular"=> "teste",
                                "email"=> "teste",
                                "endereco"=> "teste",
                                "observacao"=> "teste"),
                                array("id"=> 4,
                                "nome"=> "teste",
                                "nascimento"=> "teste",
                                "cpf"=> "teste",
                                "celular"=> "teste",
                                "email"=> "teste",
                                "endereco"=> "teste",
                                "observacao"=> "teste"),
                            );
                $responseData = json_encode($arrClientes);
            } catch (Error $e) {
                $strErrorDesc = $e->getMessage().'Something went wrong! Please contact support.';
                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
        } else {
            $strErrorDesc = 'Method not supported';
            $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';
        }
 
        // send output
        if (!$strErrorDesc) {
            $this->sendOutput(
                $responseData,
                array('Content-Type: application/json', 'HTTP/1.1 200 OK')
            );
        } else {
            $this->sendOutput(json_encode(array('error' => $strErrorDesc)), 
                array('Content-Type: application/json', $strErrorHeader)
            );
        }
    }
}