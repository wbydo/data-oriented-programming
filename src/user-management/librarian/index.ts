import { z } from 'zod';
import { librarianEmailSchema } from './librarian-email';

// type Librarian = {
//   email: string;
//   encryptedPassword: string;
// };

export const librarianSchema = z.object({
  email: librarianEmailSchema,
  encryptedPassword: z.string(),
});

export type Librarian = z.infer<typeof librarianSchema>;
