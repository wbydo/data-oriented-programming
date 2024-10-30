import { type Author } from './author';
import { type AuthorId } from './author/author-id';
import { type Book, type BookItemInfo } from './book';
import { type Isbn } from './book/isbn';

export type CatalogData = {
  booksByIsbn: Record<Isbn, Book | undefined>;
  authorsById: Record<AuthorId, Author | undefined>;
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

  static authorNames = (catalogData: CatalogData, isbn: Isbn) => {
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
