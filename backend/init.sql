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
(1, 'Carlos', '2002-06-23', '48723277790', '(16)456456546', 'teste1@gmail.com', 'Rua a', 'teste teste teste teste');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(2, 'Roberto', '2003-09-21','2564245445', '(12)4564364', 'wergvwrgv@yahoo.com', 'Rua b', 'aqui vai a obs');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(3, 'Vander', '2000-01-04', '32646456456', '(11)456457657', 'evrevr@gmail.com', 'Rua c', '');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(4, 'Clara', '2000-01-09', '236236346346', '(11)26466456', 'verver@gmail.com', 'Rua d', '');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(5, 'Roberta', '2000-01-04', '1435346364', '(11)4564564', 'vrevre@gmail.com', 'Rua e', '');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(6, 'Kelen', '2000-01-04', '4645645645', '(11)456245645', 'vrever@gmail.com', 'Rua f', '');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(7, 'Jacir', '2000-01-04', '1345435353', '(11)243564645', 'verv@gmail.com', 'Rua g', '');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(8, 'Dagoberto', '2000-01-04', '432534535', '(11)23456456', 'verve@gmail.com', 'Rua h', '');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(9, 'Neymar', '2000-01-04', '3145345345', '(11)2453654756', 'vrevre@gmail.com', 'Rua i', '');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(10, 'Fernanda', '2000-01-04', '4325345345', '(11)685756756', 'verver@gmail.com', 'Rua j', '');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(11, 'João', '2000-01-04', '4353453453', '(11)243535345', 'erver@gmail.com', 'Rua k', '');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(12, 'Roberto', '2000-01-04', '4353453453', '(11)65757567', 'ervre@gmail.com', 'Rua l', '');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(13, 'Eduardo', '2000-01-04', '3453453534', '(11)314534545', 'verf@gmail.com', 'Rua m', '');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(14, 'Victor', '2000-01-04', '34534534534', '(11)345346546', 'ervvdrf@gmail.com', 'Rua n', '');