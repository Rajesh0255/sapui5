using my.bookshop as my from '../db/data-model';

service CatalogService {
 entity Books as projection on my.Books;
  entity Author_details as projection on my.Author_details;
  entity Address as projection on my.Address;
}
