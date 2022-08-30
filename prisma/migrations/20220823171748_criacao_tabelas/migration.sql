-- CreateTable
CREATE TABLE `palavras` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `palavra` VARCHAR(191) NOT NULL,
    `criado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado_em` DATETIME(3) NOT NULL,

    UNIQUE INDEX `palavras_palavra_key`(`palavra`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `etiquetas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `etiqueta` VARCHAR(191) NOT NULL,
    `criado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado_em` DATETIME(3) NOT NULL,

    UNIQUE INDEX `etiquetas_etiqueta_key`(`etiqueta`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `relacao` (
    `palavraId` INTEGER NOT NULL,
    `etiquetaId` INTEGER NOT NULL,

    PRIMARY KEY (`palavraId`, `etiquetaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `relacao` ADD CONSTRAINT `relacao_palavraId_fkey` FOREIGN KEY (`palavraId`) REFERENCES `palavras`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `relacao` ADD CONSTRAINT `relacao_etiquetaId_fkey` FOREIGN KEY (`etiquetaId`) REFERENCES `etiquetas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
