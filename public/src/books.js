//////////////////////////
//   HELPER FUNCTIONS   //
//////////////////////////

function idSeeker(array, id) {
  return array.find((index) => index.id == id);
}

///////////////////////////////////////


function findAuthorById(authors, id) {
  const result = idSeeker(authors, id);
  return result;
}

function findBookById(books, id) {
  const result = idSeeker(books, id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  const currentlyChecked = books.filter((book)=> book.borrows[0].returned == false);
  const currentlyReturned = books.filter((book) => book.borrows[0].returned == true);
  const result = [currentlyChecked, currentlyReturned];
  return result;
}

function getBorrowersForBook(book, accounts) {
  const result = book.borrows.map(borrower => { 
    const result = accounts.find(account => borrower.id === account.id )
    result.returned = borrower.returned;
    return result;
   })
   return result.filter((borrower, index)=> result.findIndex(item => item.id === borrower.id) === index);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
