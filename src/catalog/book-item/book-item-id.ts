import { z } from 'zod';

export const bookItemIdSchema = z.string().brand('BookItemId');
export type BookItemId = z.infer<typeof bookItemIdSchema>;
