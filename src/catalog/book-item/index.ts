import { z } from 'zod';
import { bookItemIdSchema } from './book-item-id';

export const bookItemSchema = z.object({
  id: bookItemIdSchema,

  // TODO: 分離
  libId: z.string().brand('LibId'),
  isLent: z.boolean(),
});
