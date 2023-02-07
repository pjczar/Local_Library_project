function getTotalBooksCount(books) {
  return totalBooks = books.length;
}


function getTotalAccountsCount(accounts) {
  return totalAccounts = accounts.length;
}

function getBooksBorrowedCount(books) {
  const booksBorrowed = books.filter(book => book.borrows[0].returned === false); 
  return booksBorrowed.length; 
}


function getMostCommonGenres(books) {
  const genre = books.map((book) => book.genre);
  const result = [];
  const count = {};
  genre.forEach(function (ind) {
    count[ind] = (count[ind] || 0) + 1;
  });
  for (let key in count) {
    result.push({
      name: key,
      count: count[key],
    });
  }
  result.sort((a, b) => (a.count < b.count ? 1 : -1));
  return result.slice(0, 5);
}

function getMostPopularBooks(books) {
  const sliceEnd = books.length > 5 ? 5 : books.length;
  return books.map(book => {
      return {
        name: book.title,
        count: book.borrows.length
      }
    })
    .sort((a,b) => b.count - a.count)
    .slice(0, sliceEnd);
}

function getMostPopularAuthors(books, authors){
  const result= [];
  authors.forEach(author => {
    const retAuth = { 
      name: `${author.name.first} ${author.name.last}`, 
      count: 0
    }
    books.forEach(book => {
      if (book.authorId === author.id) {
        retAuth.count += book.borrows.length;
      }
    })
    result.push(retAuth);
  })
  return result.sort((a,b) => b.count - a.count).slice(0, 5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
