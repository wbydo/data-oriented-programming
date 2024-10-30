import { z } from 'zod';

export const memberEmailSchema = z.string().brand('MemberEmail');
export type MemberEmail = z.infer<typeof memberEmailSchema>;
