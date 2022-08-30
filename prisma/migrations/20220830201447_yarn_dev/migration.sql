/*
  Warnings:

  - Added the required column `modificado_em` to the `relacao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `relacao` ADD COLUMN `criacao_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `modificado_em` DATETIME(3) NOT NULL;
