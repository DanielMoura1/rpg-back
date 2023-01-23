/*
  Warnings:

  - Added the required column `fase` to the `inimigos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "inimigos" ADD COLUMN     "fase" INTEGER NOT NULL;
