function findAccountById(accounts, id) {
  const found = accounts.find((accnt) => accnt.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  const accountsA2Z = accounts.sort((nameA,nameB) =>
  nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1); 
 return accountsA2Z;
}


function getTotalNumberOfBorrows(account, books) {
  const accntId = account.id;
  let counter = 0;
  const total = books.reduce((accnt, book) => {
    const borrowsOnRecord = book.borrows;
    const mapIds = borrowsOnRecord.map((record) => record.id);
    if (mapIds.includes(accntId)) accnt++;
    return accnt;
  }, counter);
  
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => book.borrows.some(accnt => accnt.id === account.id && accnt.returned === false))
  .map(book => { const author = authors.find(author => author.id === book.authorId)
    book.author = author; 
    return book;         
})  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
