/*
  Warnings:

  - Changed the type of `vida` on the `inimigo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `vida` on the `inimigos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "inimigo" DROP COLUMN "vida",
ADD COLUMN     "vida" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "inimigos" DROP COLUMN "vida",
ADD COLUMN     "vida" INTEGER NOT NULL;
