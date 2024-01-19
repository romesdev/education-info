-- CreateTable
CREATE TABLE "State" (
    "id" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "uf" VARCHAR(2) NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "State_code_key" ON "State"("code");

-- CreateIndex
CREATE UNIQUE INDEX "State_uf_key" ON "State"("uf");

-- CreateIndex
CREATE UNIQUE INDEX "State_name_key" ON "State"("name");
