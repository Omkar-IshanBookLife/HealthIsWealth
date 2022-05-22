-- CreateTable
CREATE TABLE "Disease" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "allopathy" TEXT NOT NULL,
    "allopathy_img" TEXT NOT NULL,
    "homoepathy" TEXT NOT NULL,
    "homoepathy_img" TEXT NOT NULL,
    "ayurvedic" TEXT NOT NULL,
    "ayurvedic_img" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
