-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 17/08/2026 às 19:36
-- Versão do servidor: 8.4.7
-- Versão do PHP: 8.5.0

START TRANSACTION;
SET time_zone = "+00:00";

--
-- Banco de dados: `notas_fiscais_db`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `notas_fiscais`
--

DROP TABLE IF EXISTS `notas_fiscais`;
CREATE TABLE IF NOT EXISTS `notas_fiscais` (
  `id` int NOT NULL AUTO_INCREMENT,
  `numero` int NOT NULL,
  `status` enum('Aberta','Fechada') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Aberta',
  `criado_em` datetime DEFAULT CURRENT_TIMESTAMP,
  `fechada_em` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `numero` (`numero`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `nota_fiscal_itens`
--

DROP TABLE IF EXISTS `nota_fiscal_itens`;
CREATE TABLE IF NOT EXISTS `nota_fiscal_itens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nota_fiscal_id` int NOT NULL,
  `produto_id` int NOT NULL,
  `quantidade` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `nota_fiscal_id` (`nota_fiscal_id`),
  KEY `produto_id` (`produto_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos`
--

DROP TABLE IF EXISTS `produtos`;
CREATE TABLE IF NOT EXISTS `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codigo` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `descricao` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `saldo` int NOT NULL DEFAULT '0',
  `criado_em` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `codigo` (`codigo`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Dados para a tabela `produtos`
--

INSERT INTO produtos (codigo, descricao, saldo) VALUES 
('P-001', 'Teclado Mecânico RGB', 15),
('P-002', 'Mouse Gamer Wireless', 28),
('P-003', 'Monitor 27" 144Hz', 8),
('P-004', 'Headset Profissional', 12),
('P-005', 'Mousepad Grande', 45),
('P-006', 'Webcam 1080P', 20),
('P-007', 'Hub USB 3.0 7 Portas', 18),
('P-008', 'Suporte Para Monitor', 35);

COMMIT;
