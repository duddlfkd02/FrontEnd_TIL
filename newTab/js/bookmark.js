const newBookmarkForm = document.getElementById("bookmark-item-input-form");
const bookmarkItemList = document.getElementById("bookmark-list");

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

// 아이템 삭제
const deleteBookmarkList = (id) => {
  const isDelete = window.confirm("삭제하시겠습니까?");
  if (isDelete) {
    let bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
    let nowBookmarkList = bookmarkList.filter((item) => item.createAt !== id);
    localStorage.setItem("bookmarkList", JSON.stringify(nowBookmarkList));
    document.getElementById(`bookmark-item-${id}`).remove();
    return;
  }
};

// 북마크 아이템 보여주기
const setBookmarkItem = (item) => {
  const bookmarkItem = document.createElement("div");
  bookmarkItem.classList.add("bookmark-item");
  bookmarkItem.id = `bookmark-item-${item.createAt}`;

  const bookmarkInfo = document.createElement("div");
  bookmarkInfo.classList.add("bookmark-info");

  const bookmarkUrl = document.createElement("a");
  bookmarkUrl.classList.add("bookmark-url");

  const urlIcon = document.createElement("div");
  urlIcon.classList.add("url-icon");

  const urlIconImage = document.createElement("img");

  const nameElement = document.createElement("div");
  nameElement.classList.add("url-name");

  const bookmarkDeleteBtn = document.createElement("div");
  bookmarkDeleteBtn.classList.add("del-btn");
  bookmarkDeleteBtn.textContent = "삭제";
  bookmarkDeleteBtn.addEventListener("click", () => {
    deleteBookmarkList(item.createAt);
  });

  // 북마크 박스 만들기 (url 연결, 이미지, 사이트 명)
  bookmarkUrl.href = item.url;
  bookmarkUrl.target = "_blank";
  urlIconImage.src = `https://www.google.com/s2/favicons?domain_url=${item.url}`;
  nameElement.textContent = item.name;

  bookmarkItem.appendChild(bookmarkInfo);
  bookmarkItem.appendChild(bookmarkDeleteBtn);
  bookmarkInfo.appendChild(bookmarkUrl);
  bookmarkUrl.appendChild(urlIcon);
  bookmarkUrl.appendChild(nameElement);
  urlIcon.appendChild(urlIconImage);

  bookmarkItemList.appendChild(bookmarkItem);
};

// 북마크 리스트 가져오기
const setBookmarkList = () => {
  bookmarkItemList.innerHTML = ""; // 기존 리스트 초기화
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

  const newItem = { name: name, url: url, createAt: createAt };

  bookmarkList.push(newItem);
  localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));

  document.getElementById("new-bookmark-name-input").value = "";
  document.getElementById("new-bookmark-url-input").value = "";
  setBookmarkItem(newItem);
  newBookmarkToggle();
};

// 초기 리스트 렌더링
setBookmarkList();

document
  .getElementById("bookmark-item-add-btn")
  .addEventListener("click", newBookmarkToggle);

document.getElementById("add-btn").addEventListener("click", addBookmarkItem);
document
  .getElementById("cancel-btn")
  .addEventListener("click", newBookmarkToggle);
