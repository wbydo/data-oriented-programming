export type CatalogData = {
  booksByIsbn: Record<string, Book | undefined>;
  authorsById: Record<string, Author | undefined>;
};

export class Catalog {
  static getBookLendings = (catalogData: CatalogData, memberId: string) => {
    // TODO
    throw new Error('No Impl');
  };

  static addBookItem = (
    catalogData: CatalogData,
    bookItemInfo: BookItemInfo
  ) => {
    // TODO
    throw new Error('No Impl');
  };

  static authorNames = (catalogData: CatalogData, isbn: string) => {
    return catalogData.booksByIsbn[isbn]?.authorIds.map(
      (authorId) => catalogData.authorsById[authorId]?.name
    );
  };

  static toBookInfo = (catalogData: CatalogData, book: Book): BookItemInfo => {
    return {
      isbn: book.isbn,
      title: book.title,
      authorNames: (this.authorNames(catalogData, book.isbn) ?? []).filter(
        (s) => s != null
      ),
    };
  };

  static searchBooksByTitle = (catalogData: CatalogData, query: string) => {
    const allBooks = Object.values(catalogData.booksByIsbn).filter(
      (val) => val != null
    );
    const matchingBook = allBooks.filter((book) => book.title.includes(query));
    return matchingBook.map((book) => this.toBookInfo(catalogData, book));
  };
}

export type BookItemInfo = {
  isbn: string;
  title: string;
  authorNames: string[];
};

type Book = {
  isbn: string;
  title: string;
  publicationYear: number;
  authorIds: string[];
  bookItems: { id: string; libId: string; isLent: boolean }[];
};

type Author = { name: string; bookIsbns: string[] };
