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

      const readStatusBtn = document.createElement("button");
      readStatusBtn.textContent = "Read Status";
      readStatusBtn.classList.add("readStatusBtn");
      readStatusBtn.setAttribute("data-index", i);

      const removeBookBtn = document.createElement("button");
      removeBookBtn.textContent = "Remove";
      removeBookBtn.classList.add("removeBookBtn");
      removeBookBtn.setAttribute("data-index", i);

      card.innerHTML = myLibrary[i].getInfo();
      mainContent.appendChild(card);
      card.appendChild(readStatusBtn);
      card.appendChild(removeBookBtn);

      removeBookBtn.addEventListener("click", () => {
        const index = removeBookBtn.getAttribute("data-index");
        myLibrary.splice(index, 1);
        showLibrary();
      });

      readStatusBtn.addEventListener("click", () => {
        const index = readStatusBtn.getAttribute("data-index");
        myLibrary[index].read = !myLibrary[index].read;
        showLibrary();
      });
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
    myForm.reset();
  });
});
