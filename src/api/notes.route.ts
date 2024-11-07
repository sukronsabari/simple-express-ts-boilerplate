// src/routes/noteRoutes.ts
import { Router } from 'express';
import { NoteController } from './notes.controller';

const noteController = new NoteController();

export const notesRoutes = Router();

notesRoutes.get('/', noteController.getNotes);
notesRoutes.get('/:id', noteController.getNoteById);
notesRoutes.post('/', noteController.createNote);
notesRoutes.put('/:id', noteController.updateNote);
notesRoutes.delete('/:id', noteController.deleteNote);
