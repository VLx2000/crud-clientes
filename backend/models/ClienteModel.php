<?php
require_once PROJECT_ROOT_PATH . "/models/DatabaseModel.php";
 
class ClienteModel extends DatabaseModel
{
    public function getClientes($limit)
    {
        return $this->select("SELECT * FROM clientes ORDER BY cliente_id ASC LIMIT ?", ["i", $limit]);
    }
}