const $fruitSelect = document.getElementById("fruitSelect");

$fruitSelect.addEventListener("change", (event) => {
  let selectedValue = event.target.value;
  console.log(selectedValue);
});

// option 특정 값 삭제
$fruitSelect.remove(2); // 2번 인덱스가 삭제

// 2. input

const $userName = document.getElementById("userName");
const $password = document.getElementById("password");

const $loginButton = document.querySelector("button");

$loginButton.addEventListener("click", () => {
  console.log($userName.value);
  console.log($password.value);
});

// 2-1. 버튼 사용하지 않고 input 태그의 값을 가져오고 조작하기
$userName.value = "홍길동";

$password.addEventListener("input", (event) => {
  console.log(event.target.value);
});
