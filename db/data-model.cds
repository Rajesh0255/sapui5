namespace my.bookshop;

entity Books {
  key ID           : UUID;
      author       : String;
      title        : String;
      stock        : Integer;
      books_sold   : Integer;
      published_on : Date;
      phone        : String;
      Author_d : Association to  Author_details;
      address :  Association to one Address;
}

entity Author_details {
  key author_id    : UUID;
      author_name  : String;
      author_email : String;
}

entity Address {
  key ID      : UUID;
      city    : String;
      distric : Date;
      state   : String;
      country : String;
      pincode : Integer;
}
