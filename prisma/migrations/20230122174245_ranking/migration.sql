-- CreateTable
CREATE TABLE "ranking" (
    "id" SERIAL NOT NULL,
    "ranking" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "foto" TEXT NOT NULL,

    CONSTRAINT "ranking_pkey" PRIMARY KEY ("id")
);

INSERT INTO ranking (ranking,"usuarioId",nome,foto) VALUES (0, 0,'nome','foto');