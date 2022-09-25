/*DROP DATABASE db;*/
CREATE DATABASE IF NOT EXISTS db;
USE db;

CREATE TABLE IF NOT EXISTS `Cliente` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `nascimento` varchar(100) NOT NULL,
  `cpf` varchar(20) NOT NULL,
  `celular` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `endereco` varchar(200) NOT NULL,
  `observacao` varchar(300),
  PRIMARY KEY (`id`)
)ENGINE=InnoDB  DEFAULT CHARSET=utf8;

INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(1, 'Carlos', '2002-06-23', '846.718.400-06', '(16)456456546', 'carlos@gmail.com', 'Rua a', 'teste teste teste teste');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(2, 'Roberto', '1998-09-21','846.718.400-06', '(12)4564364', 'rob@yahoo.com', 'Rua b', 'aqui vai a obs');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(3, 'Vander', '1956-01-16', '846.718.400-06', '(11)456457657', 'v234@gmail.com', 'Rua c', '');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(4, 'Clara', '1956-01-09', '846.718.400-06', '(11)26466456', 'cl@gmail.com', 'Rua d', '');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(5, 'Roberta', '1999-01-18', '846.718.400-06', '(11)4564564', 'ro@gmail.com', 'Rua e', '');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(6, 'Kelen', '1978-01-12', '846.718.400-06', '(11)456245645', 'kel@gmail.com', 'Rua f', '');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(7, 'Jacir', '1945-01-11', '846.718.400-06', '(11)243564645', 'jacir@gmail.com', 'Rua g', '');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(8, 'Dagoberto', '2000-01-15', '846.718.400-06', '(11)23456456', 'd2434@gmail.com', 'Rua h', '');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(9, 'Neymar', '2000-01-18', '846.718.400-06', '(11)2453654756', 'ny@gmail.com', 'Rua i', '');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(10, 'Fernanda', '1998-01-04', '846.718.400-06', '(11)685756756', 'fer@gmail.com', 'Rua j', '');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(11, 'Joao', '2010-01-04', '846.718.400-06', '(11)243535345', 'jao@gmail.com', 'Rua k', '');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(12, 'Roberto', '2003-01-04', '846.718.400-06', '(11)65757567', 'rob@gmail.com', 'Rua l', '');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(13, 'Eduardo', '2000-01-30', '846.718.400-06', '(11)314534545', 'ed@gmail.com', 'Rua m', '');
INSERT INTO `Cliente` (`id`, `nome`, `nascimento`, `cpf`, `celular`, `email`, `endereco`, `observacao`) VALUES 
(14, 'Victor', '2000-01-04', '846.718.400-06', '(11)345346546', 'vict@gmail.com', 'Rua n', '');