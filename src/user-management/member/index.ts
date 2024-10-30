import { z } from 'zod';
import { bookItemIdSchema } from '../../catalog/book-item/book-item-id';
import { isbnSchema } from '../../catalog/book/isbn';
import { memberEmailSchema } from './member-email';

// type Member = {
//   email: string;
//   encryptedPassword: string;
//   isBlocked: boolean;
//   bookLendings: {
//     bookItemId: string;
//     bookIsbn: string;
//     lendingDate: string;
//   }[];
//   isVIP: boolean;
//   isSuper: boolean;
// };

export const memberSchema = z.object({
  email: memberEmailSchema,
  encryptedPassword: z.string(),
  isBlocked: z.boolean(),
  bookLendings: z.array(
    z.object({
      bookItemId: bookItemIdSchema,
      bookIsbn: isbnSchema,
      lendingDate: z.string(),
    })
  ),
  isVip: z.boolean(),
  isSuper: z.boolean(),
});

export type Member = z.infer<typeof memberSchema>;
