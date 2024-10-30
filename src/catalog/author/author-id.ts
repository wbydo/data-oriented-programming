import { z } from 'zod';

export const authorIdSchema = z.string().brand('AuthorId');
export type AuthorId = z.infer<typeof authorIdSchema>;
