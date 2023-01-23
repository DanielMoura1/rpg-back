-- CreateTable
CREATE TABLE "ouro" (
    "id" SERIAL NOT NULL,
    "ouro" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "ouro_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ouro" ADD CONSTRAINT "ouro_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
