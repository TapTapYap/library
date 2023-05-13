document.addEventListener("DOMContentLoaded", () => {
  let myLibrary = [];

  function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.getInfo = function () {
      return `Title: ${this.title}<br>Author: ${this.author}<br>Pages: ${
        this.pages
      }<br>Status: ${this.read ? "Read" : "Not Read"}.`;
    };
  }

  const myForm = document.getElementById("myForm");

  function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    return myLibrary.push(book);
  }

  function showLibrary() {
    const mainContent = document.querySelector(".main-content");
    mainContent.textContent = "";

    for (let i = 0; i < myLibrary.length; i++) {
      const card = document.createElement("div");
      card.innerHTML = myLibrary[i].getInfo();
      mainContent.appendChild(card);
    }
  }

  myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    addBookToLibrary(title, author, pages, read);
    showLibrary();
    myForm.innerHTML.value = "";
  });
});
