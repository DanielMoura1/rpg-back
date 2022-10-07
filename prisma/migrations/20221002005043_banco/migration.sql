/*
  Warnings:

  - Added the required column `idCard` to the `deck` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `poder` on the `deck` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `idUsuario` to the `inimigo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "deck" ADD COLUMN     "idCard" INTEGER NOT NULL,
DROP COLUMN "poder",
ADD COLUMN     "poder" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "inimigo" ADD COLUMN     "idUsuario" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "card" (
    "id" SERIAL NOT NULL,
    "foto" TEXT NOT NULL,
    "poder" INTEGER NOT NULL,
    "vida" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "fase" INTEGER NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "deck" ADD CONSTRAINT "deck_idCard_fkey" FOREIGN KEY ("idCard") REFERENCES "card"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "deck" ADD CONSTRAINT "deck_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "inimigo" ADD CONSTRAINT "inimigo_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
