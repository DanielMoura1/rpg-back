/*
  Warnings:

  - Added the required column `idInimigos` to the `inimigo` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `poder` on the `inimigo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "inimigo" ADD COLUMN     "idInimigos" INTEGER NOT NULL,
DROP COLUMN "poder",
ADD COLUMN     "poder" INTEGER NOT NULL,
ALTER COLUMN "vida" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "inimigos" (
    "id" SERIAL NOT NULL,
    "poder" INTEGER NOT NULL,
    "vida" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "foto" TEXT NOT NULL,

    CONSTRAINT "inimigos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "inimigo" ADD CONSTRAINT "inimigo_idInimigos_fkey" FOREIGN KEY ("idInimigos") REFERENCES "inimigos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
