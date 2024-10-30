import { z } from 'zod';
import { isbnSchema } from '../book/isbn';

export const authorNameSchema = z.string().brand('AuthorName');
export type AuthorName = z.infer<typeof authorNameSchema>;

export const authorSchema = z.object({
  name: authorNameSchema,
  bookIsbns: z.array(isbnSchema),
});
export type Author = z.infer<typeof authorSchema>;
