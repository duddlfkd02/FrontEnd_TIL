const bookmarkBar = document.getElementById("bookmark-bar");
const bookMarkOpen = document.getElementById("bookmark-open");
const bookMarkClose = document.getElementById("bookmark-close");

// 1. 초기 상태 설정하기
let isBookMarkBarOpen = localStorage.getItem("isBookMarkBarOpen") === "true";

// localStorage에 값이 없으면??
if (isBookMarkBarOpen === null) {
  isBookMarkBarOpen = false;
  localStorage.setItem("isBookMarkBarOpen", "false");
}

// 2. UI 갱신 함수
const updateBookmarkBarUI = () => {
  if (isBookMarkBarOpen) {
    // 열림
    bookmarkBar.style.display = "block";
    bookMarkOpen.style.display = "flex";
    bookMarkClose.style.display = "none";
  } else {
    // 닫힘
    bookmarkBar.style.display = "none";
    bookMarkOpen.style.display = "none";
    bookMarkClose.style.display = "flex";
  }
};

// 3. 북마크 토글 함수
const toggleBookmarkBar = () => {
  isBookMarkBarOpen = !isBookMarkBarOpen;
  localStorage.setItem("isBookMarkBarOpen", isBookMarkBarOpen);
  updateBookmarkBarUI();
};

// 초기 UI 설정
updateBookmarkBarUI();

document
  .getElementById("bookmark-open-btn")
  .addEventListener("click", toggleBookmarkBar);
document
  .getElementById("bookmark-close-btn")
  .addEventListener("click", toggleBookmarkBar);
