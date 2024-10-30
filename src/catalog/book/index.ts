import { z } from 'zod';
import { authorNameSchema } from '../author';
import { authorIdSchema } from '../author/author-id';
import { bookItemSchema } from '../book-item';
import { isbnSchema } from './isbn';

const titleSchema = z.string().brand('Title');

// type Book = {
//   isbn: string;
//   title: string;
//   publicationYear: number;
//   authorIds: string[];
//   bookItems: { id: string; libId: string; isLent: boolean }[];
// };
export const bookSchema = z.object({
  isbn: isbnSchema,
  title: titleSchema,
  publicationYear: z.number(),
  authorIds: z.array(authorIdSchema),
  bookItems: z.array(bookItemSchema),
});

export type Book = z.infer<typeof bookSchema>;

// export type BookItemInfo = {
//   isbn: string;
//   title: string;
//   authorNames: string[];
// };
const bookItemInfo = z.object({
  isbn: isbnSchema,
  title: titleSchema,
  authorNames: z.array(authorNameSchema),
});

export type BookItemInfo = z.infer<typeof bookItemInfo>;
