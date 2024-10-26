type Librarian = {
  email: string;
  encryptedPassword: string;
};

type Member = {
  email: string;
  encryptedPassword: string;
  isBlocked: boolean;
  bookLendings: {
    bookItemId: string;
    bookIsbn: string;
    lendingDate: string;
  }[];
  isVIP: boolean;
  isSuper: boolean;
};

export type UserManagementData = {
  librariansByEmail: Record<string, Librarian | undefined>;
  membersByEmail: Record<string, Member | undefined>;
};

export class UserManagement {
  static isLibrarian = (
    userManagementData: UserManagementData,
    userId: string
  ): boolean => {
    return userManagementData.librariansByEmail[userId] != null;
  };

  static isSuperMember = (
    userManagementData: UserManagementData,
    userId: string
  ): boolean => {
    return userManagementData.membersByEmail[userId]?.isSuper ?? false;
  };

  static isVIPMember = (
    userManagementData: UserManagementData,
    userId: string
  ): boolean => {
    return userManagementData.membersByEmail[userId]?.isVIP ?? false;
  };
}
