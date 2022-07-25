import { User } from "@prisma/client";
import prisma from "../configs/db.js";

export type userData = Omit<User, "id">;

export async function signup(userData: userData) {
    await prisma.user.create({
        data: userData,
    });
}

export async function getByEmail(email: string) {
    const user = await prisma.user.findFirst({
        where: { email },
    });

    return user;
}

export async function getById(id: number) {
    const user = await prisma.user.findFirst({
        where: { id },
    });

    return user;
}