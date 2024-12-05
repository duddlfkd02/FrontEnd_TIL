//생성자 함수 : 상품 객체 생성하기

function Item(title, price) {
  // this = {};

  this.title = title;
  this.price = price;
  this.showPrice = function () {
    console.log(`가격은 ${price} 입니다.`);
  };

  // return this
  // -> new 를 붙여서 쓰면 알고리즘이 알아서 이 부분 처리해 줌
}

const item1 = new Item("인형", 3000);
const item2 = Item("가방", 4000); // undefiend (위 함수 실행)
const item3 = new Item("지갑", 9000);

console.log(item1, item2, item3);
