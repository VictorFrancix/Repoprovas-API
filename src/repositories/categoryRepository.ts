import prisma from "../configs/db.js";

export async function getById(id: number) {
    const category = await prisma.category.findUnique({
        where: { id },
    });

    return category;
}