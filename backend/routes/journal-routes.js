import express from 'express';
import { 
  create_journal, 
  getPostsByUsername, 
  update_journal, 
  delete_journal,
  getJournalById 
} from '../controller/journal-controller.js';

const journalRouter = express.Router();

// Create a new journal entry for a user
journalRouter.post('/:username', create_journal);

// Get all journal entries of a specific user
journalRouter.get('/:username/journals', getPostsByUsername);

// Get a single journal entry by ID for a specific user
journalRouter.get('/:username/:id', getJournalById);

// Update a specific journal entry
journalRouter.put('/:username/:id', update_journal);  //yha journal ki id aayegi, user ki nahi

// Delete a specific journal entry
journalRouter.delete('/:username/:id', delete_journal);

export default journalRouter;
