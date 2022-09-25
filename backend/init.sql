/*DROP DATABASE db;*/
CREATE DATABASE IF NOT EXISTS db;
USE db;

CREATE TABLE IF NOT EXISTS `Cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `nascimento` varchar(20) NOT NULL,
  `cpf` varchar(20) NOT NULL,
  `celular` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `endereco` varchar(40) NOT NULL,
  `observacao` varchar(300),
  PRIMARY KEY (`id`)
)ENGINE=InnoDB  DEFAULT CHARSET=utf8;

INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(1, 'Fulano', '2002-06-01', '48723277790', '(16)999990000', 'teste1@gmail.com', 'Rua x', 'teste teste teste teste'),
(2, 'Beltrano', '2003-09-21','48723266690', '(12)999990001', 'teste2@yahoo.com', 'Rua y', 'aqui vai a obs'),
(3, 'Cicrano', '2000-01-04', '38723277791', '(11)999990002', 'teste3@gmail.com', 'Rua z', '');