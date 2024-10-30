import { z } from 'zod';

export const librarianEmailSchema = z.string().brand('LibrarianEmail');
export type LibrarianEmail = z.infer<typeof librarianEmailSchema>;
