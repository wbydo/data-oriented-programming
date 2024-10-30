import { type Librarian } from './librarian';
import {
  type LibrarianEmail,
  librarianEmailSchema,
} from './librarian/librarian-email';
import { type Member } from './member';
import { type MemberEmail, memberEmailSchema } from './member/member-email';

export type UserManagementData = {
  librariansByEmail: Record<LibrarianEmail, Librarian | undefined>;
  membersByEmail: Record<MemberEmail, Member | undefined>;
};

export class UserManagement {
  static isLibrarian = (
    userManagementData: UserManagementData,
    email: string
  ): boolean => {
    const librarianEmail = librarianEmailSchema.parse(email);
    return userManagementData.librariansByEmail[librarianEmail] != null;
  };

  static isSuperMember = (
    userManagementData: UserManagementData,
    email: string
  ): boolean => {
    const memberEmail = memberEmailSchema.parse(email);
    return userManagementData.membersByEmail[memberEmail]?.isSuper ?? false;
  };

  static isVIPMember = (
    userManagementData: UserManagementData,
    email: string
  ): boolean => {
    const memberEmail = memberEmailSchema.parse(email);
    return userManagementData.membersByEmail[memberEmail]?.isVip ?? false;
  };
}
