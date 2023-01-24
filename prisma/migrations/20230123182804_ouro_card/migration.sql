-- CreateTable
CREATE TABLE "ouroCard" (
    "id" SERIAL NOT NULL,
    "ouro" INTEGER NOT NULL,
    "cardId" INTEGER NOT NULL,

    CONSTRAINT "ouroCard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ouroCard" ADD CONSTRAINT "ouroCard_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "card"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

INSERT INTO "ouroCard" (ouro,"cardId") VALUES (50,1);
INSERT INTO "ouroCard" (ouro,"cardId") VALUES (50,2);
INSERT INTO "ouroCard" (ouro,"cardId") VALUES (25,3);
INSERT INTO "ouroCard" (ouro,"cardId") VALUES (25,4);
INSERT INTO "ouroCard" (ouro,"cardId") VALUES (50,5);
INSERT INTO "ouroCard" (ouro,"cardId") VALUES (50,6);
INSERT INTO "ouroCard" (ouro,"cardId") VALUES (50,7);
INSERT INTO "ouroCard" (ouro,"cardId") VALUES (50,8);
INSERT INTO "ouroCard" (ouro,"cardId") VALUES (50,9);
INSERT INTO "ouroCard" (ouro,"cardId") VALUES (50,10);
INSERT INTO "ouroCard" (ouro,"cardId") VALUES (50,11);
INSERT INTO "ouroCard" (ouro,"cardId") VALUES (50,12);
INSERT INTO "ouroCard" (ouro,"cardId") VALUES (50,13);
INSERT INTO "ouroCard" (ouro,"cardId") VALUES (50,14);