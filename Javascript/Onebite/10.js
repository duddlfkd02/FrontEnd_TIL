// 4. 새로운 요소 node 추가하기
let $type = document.createElement("div");
$type.className = "info-item";
$type.id = "type";

let $typeText = document.createTextNode("말티즈");

// 생성한 노드들이 브라우저에 보이지 않는 이유 : 생성만 하고 DOM 트리에 추가하지 않았기 때문!
// appendChild
let $animalInfo0 = document.querySelector("div.animal-info");
$animalInfo0.appendChild($type);
$type.appendChild($typeText);

console.log($type);
console.log($typeText);

// 요소 추가 연습
let $button = document.createElement("button");
$button.id = "new-button";
$button.classList.add("new-button");
// $button.className = "new-button";
$button.textContent = "버튼";

let $animalInfoPrac = document.querySelector("div.animal-info");
$animalInfoPrac.appendChild($button);
console.log($animalInfoPrac);

// 💡 className과 classList.add 의 차이
/* className은 속성값 전체를 바꾸고 싶을 떄 사용, 추가하려는 클래스가 이미 있어도 "중복하여 추가"해버림
classList는 개별 클래스를 조작하고 싶을 때 사용, 추가하려는 클래스가 이미 있으면 "중복 추가 하지 않음"
classList는 이터러블 객체라서 for..of 로 클래스를 나열할 수 있다는 특징이 있음

<body class="main page">
  <script>
    for (let name of document.body.classList) {
      alert(name); // ✅ main과 page가 출력됨
    }
  </script>
</body>

*/

// 이벤트 추가하기
$button.addEventListener("click", () => {
  window.alert("click!");
});

// 특정 요소 HTML 설정하기 : innerHTML
// 💥 innerHTML : 성능, 보안에 주의해야하고 기존 데이터는 삭제해버리거나 갈아치우기 때문에 createText와 같은 다른 API 사용을 추천
let $animalInfoHTML = document.querySelector("div.animal-info");
$animalInfoHTML.innerHTML = `<div id="name">고양이</div>`;

console.log($animalInfoHTML);
