const books = [
  {
    title: "lord",
    authorName: "Nausea",
    releaseYear: 300,
  },
  {
    title: "ééd",
    authorName: "drgrg",
    releaseYear: 32,
  },
  {
    title: "mana",
    authorName: "steps",
    releaseYear: 2,
  },
  {
    title: "éna",
    authorName: "éps",
    releaseYear: 2000,
  },
];

function sortByYear(b1, b2) {
  if (b1.releaseYear < b2.releaseYear) {
    return -1;
  }
  if (b1.releaseYear > b2.releaseYear) {
    return 1;
  }
  return 0;
}

let filteredBooks = books.filter((book) => book.releaseYear <= 1950);

//filteredBooks.sort((a, b) => sortByYear(a, b))
filteredBooks.sort(sortByYear); // auto understands sorting function, no need for the above one

console.log(filteredBooks);
