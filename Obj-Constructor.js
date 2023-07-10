document.addEventListener("DOMContentLoaded", () => {
  const myLibrary = [];

  class Book {
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
      this.getInfo = function () {
        return `Title: ${this.title}<br>Author: ${this.author}<br>Pages: ${
          this.pages
        }
        <br>Status: ${this.read ? "Read" : "Not Read"}.`;
      };
    }

    addBookToLibrary(title, author, pages, read) {
      const book = new Book(title, author, pages, read);
      return myLibrary.push(book);
    }

    showLibrary() {
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
          this.showLibrary();
        });

        readStatusBtn.addEventListener("click", () => {
          const index = readStatusBtn.getAttribute("data-index");
          myLibrary[index].read = !myLibrary[index].read;
          this.showLibrary();
        });
      }
    }
  }

  const myForm = document.getElementById("myForm");

  myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const instance = new Book();
    this.title = document.getElementById("title").value;
    this.author = document.getElementById("author").value;
    this.pages = document.getElementById("pages").value;
    this.read = document.getElementById("read").checked;

    instance.addBookToLibrary(title, author, pages, read);
    instance.showLibrary();
    myForm.reset();

    console.log(myLibrary);
  });
});
