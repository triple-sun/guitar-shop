/*
  Warnings:

  - You are about to drop the `OrderItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_itemId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "OrderItem";

-- CreateTable
CREATE TABLE "_GuitarToOrder" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GuitarToOrder_AB_unique" ON "_GuitarToOrder"("A", "B");

-- CreateIndex
CREATE INDEX "_GuitarToOrder_B_index" ON "_GuitarToOrder"("B");

-- AddForeignKey
ALTER TABLE "_GuitarToOrder" ADD CONSTRAINT "_GuitarToOrder_A_fkey" FOREIGN KEY ("A") REFERENCES "Guitar"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GuitarToOrder" ADD CONSTRAINT "_GuitarToOrder_B_fkey" FOREIGN KEY ("B") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
