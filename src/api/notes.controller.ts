// src/controllers/noteController.ts
import { Request, Response } from 'express';
import { NoteService } from './notes.service';

const noteService = new NoteService();

export class NoteController {
  async getNotes(req: Request, res: Response) {
    try {
      const notes = await noteService.getNotes();
      res.json(notes);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  }

  async getNoteById(req: Request, res: Response) {
    const noteId = parseInt(req.params.id, 10);
    try {
      const note = await noteService.getNoteById(noteId);
      if (note) {
        res.json(note);
      } else {
        res.status(404).send('Note Not Found');
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  }

  async createNote(req: Request, res: Response) {
    const { title, content } = req.body;
    try {
      const newNote = await noteService.createNote(title, content);
      res.status(201).json(newNote);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  }

  async updateNote(req: Request, res: Response) {
    const noteId = parseInt(req.params.id, 10);
    const { title, content } = req.body;
    try {
      const updatedNote = await noteService.updateNote(noteId, title, content);
      if (updatedNote) {
        res.json(updatedNote);
      } else {
        res.status(404).send('Note Not Found');
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  }

  async deleteNote(req: Request, res: Response) {
    const noteId = parseInt(req.params.id, 10);
    try {
      const response = await noteService.deleteNote(noteId);
      res.json(response);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  }
}
