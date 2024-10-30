import { z } from 'zod';

export const isbnSchema = z.string().brand('Isbn');
export type Isbn = z.infer<typeof isbnSchema>;
