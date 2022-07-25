import { Tests } from "@prisma/client";
import prisma from "./../configs/db.js";

type testData = Omit<Tests, "id">;

export type testBody = Omit< Tests, "id" | "teacherDisciplineId"> & {
    teacherId: number;
    disciplineId: number;
};

export async function createTest(testData: testData) {
    await prisma.tests.create({
        data: testData,
    });
}

export async function getTestsGroupByDiscipline() {
    const tests = await prisma.term.findMany({
        include: {
            disciplines: {
                include: {
                    teacherDisciplines: {
                        select: {
                            id: true,
                            discipline: {
                                select: {
                                    name: true,
                                },
                            },
                            teacher: {
                                select: {
                                    name: true,
                                },
                            },
                            tests: {
                                select: {
                                    id: true,
                                    name: true,
                                    pdfUrl: true,
                                    category: true,
                                },
                            },
                        },
                    },
                },
            },
        },
    });

    return tests;
}

export async function getTestsGroupByTeacher() {
    const tests = await prisma.teachersDisciplines.findMany({
        select: {
            id: true,
            teacher: {
                select: {
                    id: true,
                    name: true,
                },
            },
            discipline: {
                select: {
                    id: true,
                    name: true,
                },
            },
            tests: {
                select: {
                    id: true,
                    name: true,
                    pdfUrl: true,
                    category: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
            },
        },
    });
    return tests;
}