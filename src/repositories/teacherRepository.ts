import prisma from "./../configs/db.js";

export async function getByTeacherIdAndDiscplineId(
    teacherId: number,
    disciplineId: number
) {
    const teacherDiscipline = await prisma.teachersDisciplines.findFirst({
        where: {
            teacherId,
            disciplineId,
        },
        select: {
            id: true,
        },
    });

    return teacherDiscipline;
}