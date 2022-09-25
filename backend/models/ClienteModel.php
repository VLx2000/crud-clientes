<?php
    class Cliente{
        // Connection
        private $conn;

        // Table
        private $db_table = "Cliente";

        // Columns
        public $id;
        public $nome;
        public $nascimento;
        public $cpf;
        public $email;
        public $celular;
        public $endereco;
        public $observacao;

        // Db connection
        public function __construct($db){
            $this->conn = $db;
        }

        // GET ALL
        public function getClientes(){
            $sqlQuery = "SELECT * FROM $this->db_table";
            //echo $sqlQuery;
            $consulta = $this->conn->prepare($sqlQuery);
            $consulta->execute();
            return $consulta;
        }
        // GET ALL BY FILTER
        public function getClientesByFilter($filter){
            $sqlQuery = "SELECT * FROM $this->db_table WHERE nome LIKE '%$filter%' OR email LIKE '%$filter%'";
            //echo $sqlQuery;
            $consulta = $this->conn->prepare($sqlQuery);
            $consulta->execute();
            return $consulta;
        }
        // CREATE
        public function createCliente(){
            $sqlQuery = "INSERT INTO $this->db_table (nome, nascimento, cpf, celular, email, endereco, observacao)
                    VALUES (:nome, :nascimento, :cpf, :celular, :email, :endereco, :observacao)";
        
            $consulta = $this->conn->prepare($sqlQuery);

            //echo $sqlQuery;
            $consulta->bindParam(":nome", $this->nome);
            $consulta->bindParam(":nascimento", $this->nascimento);
            $consulta->bindParam(":cpf", $this->cpf);
            $consulta->bindParam(":celular", $this->celular);
            $consulta->bindParam(":email", $this->email);
            $consulta->bindParam(":endereco", $this->endereco);
            $consulta->bindParam(":observacao", $this->observacao);
            
            if($consulta->execute()){
               return true;
            }
            return false;
        }
        // GET single
        public function getCliente(){
            $sqlQuery = "SELECT * FROM $this->db_table WHERE id = ?";

            $consulta = $this->conn->prepare($sqlQuery);
            $consulta->bindParam(1, $this->id);
            $consulta->execute();
            //echo $sqlQuery;
            $dataRow = $consulta->fetch(PDO::FETCH_ASSOC);
            
            $this->nome = $dataRow['nome'];
            $this->nascimento = $dataRow['nascimento'];
            $this->cpf = $dataRow['cpf'];
            $this->celular = $dataRow['celular'];
            $this->email = $dataRow['email'];
            $this->endereco = $dataRow['endereco'];
            $this->observacao = $dataRow['observacao'];
        }        
        // UPDATE
        public function updateCliente(){
            $sqlQuery = "UPDATE $this->db_table 
                        SET nome = :nome, 
                            nascimento = :nascimento, 
                            cpf = :cpf, 
                            celular = :celular, 
                            email = :email, 
                            endereco = :endereco, 
                            observacao = :observacao
                        WHERE id = :id";
        
            $consulta = $this->conn->prepare($sqlQuery);

            $consulta->bindParam(":nome", $this->nome);
            $consulta->bindParam(":nascimento", $this->nascimento);
            $consulta->bindParam(":cpf", $this->cpf);
            $consulta->bindParam(":celular", $this->celular);
            $consulta->bindParam(":email", $this->email);
            $consulta->bindParam(":endereco", $this->endereco);
            $consulta->bindParam(":observacao", $this->observacao);

            $consulta->bindParam(":id", $this->id);
        
            if($consulta->execute()){
               return true;
            }
            return false;
        }
        // DELETE
        function deleteCliente(){
            $sqlQuery = "DELETE FROM $this->db_table WHERE id = ?";
            $consulta = $this->conn->prepare($sqlQuery);
            
            $consulta->bindParam(1, $this->id);
        
            if($consulta->execute()){
                return true;
            }
            return false;
        }
    }
?>