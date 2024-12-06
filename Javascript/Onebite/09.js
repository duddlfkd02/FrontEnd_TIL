// DOM 요소 "하나만" 가져오기 : getElementById , querySelector
let $color = document.getElementById("color");
let $animalInfo = document.querySelector("div.animal-info");
let ageElement = document.querySelector("div#age");

console.log($animalInfo);
console.log(ageElement);

// DOM 요소 "여러 개" 가져오기 : querySelectorAll, getElementsByClassName, getElementsByTagName

let $infoItem = document.querySelectorAll("div.info-item");
console.log($infoItem);

let $infoItem2 = document.getElementsByClassName("info-item");
console.log($infoItem2);

let $infoItem3 = document.getElementsByTagName("div");
console.log($infoItem3);

// 요소 조작 DOM API
// 1. class, id 이름 조작하기
let $name = document.getElementById("name");
$name.className = "dog-name";

console.log($name);
console.log($name.className);

let $colorClassList = document.getElementById("color");
$colorClassList.classList.add("dog-color");
$colorClassList.classList.remove("dog-color");

console.log($colorClassList.classList); // 기본적으로 제공해주는 메소드 확인용 콘솔
console.log($colorClassList);

// 2. text node에 접근하여 수정하기
let $age = document.getElementById("age");
$age.textContent = "5살";

console.log($age);

// 3. style 추가 수정하기
let $colorChange = document.getElementById("color");
$colorChange.style.color = "blue";
$colorChange.style.fontSize = "30px";
