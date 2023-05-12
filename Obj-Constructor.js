let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.getInfo = function () {
    return `Title: ${this.title}\nAuthor: ${this.author}\nPages: ${this.pages}\nStatus: ${this.read}.`;
  };
}

const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = getElementById("title").value;
  const author = getElementById("author").value;
  const pages = getElementById("pages").value;
  const status = getElementById("status").value;

  addBookToLibrary(title, author, pages, status);
  showLibrary();
});

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  return myLibrary.push(book);
}

function showLibrary() {
  const mainContent = document.querySelector(".main-content");
  mainContent.textContent = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement("div");
    card.textContent = myLibrary[i].getInfo();
    mainContent.appendChild(card);
  }
}
