const bookmarkBar = document.getElementById("bookmark-bar");
const bookMarkOpen = document.getElementById("bookmark-open");
const bookMarkClose = document.getElementById("bookmark-close");

// <--북마크 바-->
const isBookMarkBarOpen = localStorage.getItem("isBookMarkBarOpen");
if (isBookMarkBarOpen === "close") {
  //isBookMarkBarOpen이 close
  bookmarkBar.style.display = "none";
  bookMarkOpen.style.display = "none";
  bookMarkClose.style.display = "flex";
} else {
  //isBookMarkBarOpen이 open
  bookmarkBar.style.display = "block";
  bookMarkOpen.style.display = "flex";
  bookMarkClose.style.display = "none";
}

// <--북마크 바 toggle-->
const bookmarkBarToggle = () => {
  let isBookMarkBarOpen = localStorage.getItem("isBookMarkBarOpen");

  if (isBookMarkBarOpen === "close") {
    localStorage.setItem("isBookMarkBarOpen", "open");
    bookmarkBar.style.display = "block";
    bookMarkOpen.style.display = "flex";
    bookMarkClose.style.display = "none";
    return;
  }

  localStorage.setItem("isBookMarkBarOpen", "close");
  bookmarkBar.style.display = "none";
  bookMarkOpen.style.display = "none";
  bookMarkClose.style.display = "flex";
};

document
  .getElementById("bookmark-open-btn")
  .addEventListener("click", bookmarkBarToggle);
document
  .getElementById("bookmark-close-btn")
  .addEventListener("click", bookmarkBarToggle);
