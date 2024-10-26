import { Catalog, type BookItemInfo, type CatalogData } from './catalog';
import { UserManagement, type UserManagementData } from './user-management';

type LibraryData = {
  userManagementData: UserManagementData;
  catalogData: CatalogData;
};
class Library {
  static getBookLendings = (
    { userManagementData, catalogData }: LibraryData,
    userId: string,
    memberId: string
  ) => {
    if (
      UserManagement.isLibrarian(userManagementData, userId) ||
      UserManagement.isSuperMember(userManagementData, userId)
    ) {
      return Catalog.getBookLendings(catalogData, memberId);
    } else {
      throw new Error('Not Allowed to get book lendings');
    }
  };

  static addBookItem = (
    { userManagementData, catalogData }: LibraryData,
    userId: string,
    bookItemInfo: BookItemInfo
  ) => {
    if (
      UserManagement.isLibrarian(userManagementData, userId) ||
      UserManagement.isVIPMember(userManagementData, userId)
    ) {
      return Catalog.addBookItem(catalogData, bookItemInfo);
    } else {
      throw new Error('Not Allowed to get book lendings');
    }
  };

  static searchBooksByTitle = (
    { userManagementData, catalogData }: LibraryData,
    query: string
  ) => {
    const result = Catalog.searchBooksByTitle(catalogData, query);
    return JSON.stringify(result);
  };
}

const libData: LibraryData = {
  userManagementData: {
    librariansByEmail: {
      'franck@gmail.com': {
        email: 'franck@gmail.com',
        //"mypassword"のbase64エンコーディング
        encryptedPassword: 'bXlwYXNzd29yZA==',
      },
    },
    membersByEmail: {
      'samantha@gmail.com': {
        email: 'samantha@gmail.com',
        //"secret"のbase64エンコーディング
        encryptedPassword: 'c2VjcmV0',
        isBlocked: false,
        bookLendings: [
          {
            bookItemId: 'bookitem1',
            bookIsbn: '9781779501127',
            lendingDate: '20200423',
          },
        ],
        isVIP: true,
        isSuper: false,
      },
    },
  },
  catalogData: {
    booksByIsbn: {
      '9781779501127': {
        isbn: '9781779501127',
        title: 'Watchmen',
        publicationYear: 1987,
        authorIds: ['alanmoore', 'davegibbons'],
        bookItems: [
          { id: 'bookitem1', libId: 'nyccentrallib', isLent: true },
          { id: 'bookitem2', libId: 'nyccentrallib', isLent: false },
        ],
      },
    },
    authorsById: {
      alanmoore: { name: 'AlanMoore', bookIsbns: ['9781779501127'] },
      davegibbons: { name: 'DaveGibbons', bookIsbns: ['9781779501127'] },
    },
  },
};

console.log(Library.searchBooksByTitle(libData, 'Wat'));
console.log(
  UserManagement.isLibrarian(libData.userManagementData, 'franck@gmail.com')
);
