// src/services/noteService.ts
import prisma from '../config/db';

export class NoteService {
  getNotes = async () => {
    const notes = await prisma.note.findMany();
    return notes;
  };

  getNoteById = async (id: number) => {
    return prisma.note.findUnique({ where: { id } });
  };

  createNote = async (title: string, content: string) => {
    prisma.note.create({ data: { title, content } });
  };

  updateNote = async (id: number, title: string, content: string) => {
    return prisma.note.update({
      where: { id },
      data: { title, content },
    });
  };

  deleteNote = async (id: number) => {
    await prisma.note.delete({ where: { id } });
    return { message: 'Note deleted' };
  };
}
