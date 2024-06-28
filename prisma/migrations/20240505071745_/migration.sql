-- CreateTable
CREATE TABLE "shailen" (
    "id" SERIAL NOT NULL,
    "num1" INTEGER NOT NULL,
    "num2" INTEGER NOT NULL,
    "operation" TEXT NOT NULL,
    "result" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "shailen_pkey" PRIMARY KEY ("id")
);
