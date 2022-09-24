<?php
require __DIR__ . "/bootstrap.php";
 
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );

require PROJECT_ROOT_PATH . "/controllers/ClienteController.php";
 
$objFeedController = new ClienteController();
$strMethodName = $uri[3] . 'Action';
$objFeedController->{$strMethodName}();
?>