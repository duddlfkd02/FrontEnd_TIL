const newBookmarkForm = document.getElementById("bookmark-item-input-form");

// 북마크 초기설정 : 로컬스토리지 저장
let bookmarkList = [];
localStorage.getItem("bookmarkList")
  ? (bookmarkList = JSON.parse(localStorage.getItem("bookmarkList")))
  : localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));

// 북마크 아이템 추가 버튼 초기값 설정
let isAddBtnClick = false;
newBookmarkForm.style.display = "none";

// 북마트 아이템 추가 버튼 토글
const newBookmarkToggle = () => {
  isAddBtnClick = !isAddBtnClick;
  isAddBtnClick
    ? (newBookmarkForm.style.display = "block")
    : (newBookmarkForm.style.display = "none");
};

// 북마크 아이템 보여주기
const setBookmarkItem = (item) => {
  console.log(item);
};

// 북마크 리스트 가져오기
const setBookmarkList = () => {
  bookmarkList.forEach((item) => {
    setBookmarkItem(item);
  });
};

// 아이템 추가하기
const addBookmarkItem = () => {
  let bookmarkList = [];
  if (localStorage.getItem("bookmarkList")) {
    bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
  }
  let name = document.getElementById("new-bookmark-name-input").value;
  let url = document.getElementById("new-bookmark-url-input").value;
  let createAt = Date.now();

  bookmarkList.push({ name: name, url: url, createAt: createAt });

  localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));

  document.getElementById("new-bookmark-name-input").value = "";
  document.getElementById("new-bookmark-url-input").value = "";
  newBookmarkToggle();
};

document
  .getElementById("bookmark-item-add-btn")
  .addEventListener("click", newBookmarkToggle);

document.getElementById("add-btn").addEventListener("click", addBookmarkItem);
document
  .getElementById("cancel-btn")
  .addEventListener("click", newBookmarkToggle);
