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
            $sqlQuery = "SELECT id, nome, nascimento, cpf, celular, email, endereco, observacao FROM " . $this->db_table . "";
            //echo $sqlQuery;
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }
        // CREATE
        public function createCliente(){
            $sqlQuery = "INSERT INTO
                        ". $this->db_table ." (nome, nascimento, cpf, celular, email, endereco, observacao)
                    VALUES (:nome, :nascimento, :cpf, :celular, :email, :endereco, :observacao)";
        
            $stmt = $this->conn->prepare($sqlQuery);

            /* $this->nome=htmlspecialchars(strip_tags($this->nome));
            $this->nascimento=htmlspecialchars(strip_tags($this->nascimento));
            $this->cpf=htmlspecialchars(strip_tags($this->cpf));
            $this->celular=htmlspecialchars(strip_tags($this->celular));
            $this->email=htmlspecialchars(strip_tags($this->email));
            $this->endereco=htmlspecialchars(strip_tags($this->endereco));
            $this->observacao=htmlspecialchars(strip_tags($this->observacao)); */

            //echo $sqlQuery;
            $stmt->bindParam(":nome", $this->nome);
            $stmt->bindParam(":nascimento", $this->nascimento);
            $stmt->bindParam(":cpf", $this->cpf);
            $stmt->bindParam(":celular", $this->celular);
            $stmt->bindParam(":email", $this->email);
            $stmt->bindParam(":endereco", $this->endereco);
            $stmt->bindParam(":observacao", $this->observacao);
            
            if($stmt->execute()){
               return true;
            }
            return false;
        }
        // GET single
        public function getCliente(){
            $sqlQuery = "SELECT id, nome, nascimento, cpf, celular, email, endereco, observacao FROM " . $this->db_table . "
                        WHERE id = ?";

            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->bindParam(1, $this->id);
            $stmt->execute();
            //echo $sqlQuery;
            $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
            
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
            $sqlQuery = "UPDATE
                        ". $this->db_table ."
                    SET
                        nome = :nome, 
                        nascimento = :nascimento, 
                        cpf = :cpf, 
                        celular = :celular, 
                        email = :email, 
                        endereco = :endereco, 
                        observacao = :observacao
                    WHERE 
                        id = :id";
        
            $stmt = $this->conn->prepare($sqlQuery);

            $this->nome=htmlspecialchars(strip_tags($this->nome));
            $this->nascimento=htmlspecialchars(strip_tags($this->nascimento));
            $this->cpf=htmlspecialchars(strip_tags($this->cpf));
            $this->celular=htmlspecialchars(strip_tags($this->celular));
            $this->email=htmlspecialchars(strip_tags($this->email));
            $this->endereco=htmlspecialchars(strip_tags($this->endereco));
            $this->observacao=htmlspecialchars(strip_tags($this->observacao));
        
            $this->id=htmlspecialchars(strip_tags($this->id));

            $stmt->bindParam(":nome", $this->nome);
            $stmt->bindParam(":nascimento", $this->nascimento);
            $stmt->bindParam(":cpf", $this->cpf);
            $stmt->bindParam(":celular", $this->celular);
            $stmt->bindParam(":email", $this->email);
            $stmt->bindParam(":endereco", $this->endereco);
            $stmt->bindParam(":observacao", $this->observacao);

            $stmt->bindParam(":id", $this->id);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }
        // DELETE
        function deleteCliente(){
            $sqlQuery = "DELETE FROM " . $this->db_table . " WHERE id = ?";
            $stmt = $this->conn->prepare($sqlQuery);
            
            $stmt->bindParam(1, $this->id);
        
            if($stmt->execute()){
                return true;
            }
            return false;
        }
    }
?>