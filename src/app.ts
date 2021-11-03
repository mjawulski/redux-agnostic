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

updateButton.addEventListener("click", (e) => {
  if (!bookAuthorInput.value.trim()) {
    return;
  }
  const newBookAuthor = bookAuthorInput.value.trim();
  console.log("new book author::", newBookAuthor);
});
