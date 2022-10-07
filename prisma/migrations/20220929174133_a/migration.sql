-- CreateTable
CREATE TABLE "deck" (
    "id" SERIAL NOT NULL,
    "idUser" INTEGER NOT NULL,
    "poder" TEXT NOT NULL,
    "vida" INTEGER NOT NULL,
    "maxVida" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "foto" TEXT NOT NULL,

    CONSTRAINT "deck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inimigo" (
    "id" SERIAL NOT NULL,
    "poder" TEXT NOT NULL,
    "vida" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "fase" INTEGER NOT NULL,

    CONSTRAINT "inimigo_pkey" PRIMARY KEY ("id")
);
