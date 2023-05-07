let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.getInfo = function () {
    return `${this.title} is written by ${this.author}, is ${this.pages} pages and has been ${this.read}.`;
  };
}

function addBookToLibrary(title, author, pages, read) {
  let book1 = new Book(title, author, pages, read);
  return myLibrary.push(book1);
}

function showLibrary() {
  return console.log(myLibrary);
}

console.log(addBookToLibrary("Harry Potter", "JK Rowling", 700, "read"));
console.log(showLibrary());
