-- DropForeignKey
ALTER TABLE `relacao` DROP FOREIGN KEY `relacao_etiquetaId_fkey`;

-- DropForeignKey
ALTER TABLE `relacao` DROP FOREIGN KEY `relacao_palavraId_fkey`;

-- AddForeignKey
ALTER TABLE `relacao` ADD CONSTRAINT `relacao_palavraId_fkey` FOREIGN KEY (`palavraId`) REFERENCES `palavras`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `relacao` ADD CONSTRAINT `relacao_etiquetaId_fkey` FOREIGN KEY (`etiquetaId`) REFERENCES `etiquetas`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
