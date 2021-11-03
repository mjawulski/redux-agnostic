import { Store } from "./Store/store";

const bookAuthor = document.querySelector(
  "#book-author"
) as HTMLParagraphElement;
const bookAuthorInput = document.querySelector(
  "#book-author-input"
) as HTMLInputElement;

const updateButton = document.querySelector(
  "#update-book-author-button"
) as HTMLButtonElement;

bookAuthor.innerText = "Initial Book Author";

const store = new Store();

updateButton.addEventListener("click", (e) => {
  if (!bookAuthorInput.value.trim()) {
    return;
  }
  const newBookAuthor = bookAuthorInput.value.trim();
  const action = { type: "UPDATE_BOOK_AUTHOR", payload: newBookAuthor };
  store.dispatch(action);
});
