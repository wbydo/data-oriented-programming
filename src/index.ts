import { Catalog, type BookItemInfo, type CatalogData } from './catalog';

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

// TODO
type UserManagementData = unknown;
class UserManagement {
  static isLibrarian = (
    userManagementData: UserManagementData,
    userId: string
  ): boolean => {
    // TODO
    return true;
  };

  static isSuperMember = (
    userManagementData: UserManagementData,
    userId: string
  ): boolean => {
    // TODO
    return true;
  };

  static isVIPMember = (
    userManagementData: UserManagementData,
    userId: string
  ): boolean => {
    // TODO
    return true;
  };
}

const libData: LibraryData = {
  userManagementData: {},
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
