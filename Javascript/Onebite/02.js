// Early return pattern

function compare(num) {
  if (num === 0) {
    return "num 값이 0 입니다.";
  } else if (num < 0) {
    return "num 값이 0보다 작습니다.";
  } else {
    if (num >= 10) {
      return "num 값이 10보다 크거나 같습니다.";
    }
    return "num 값이 0보다 크고 10보다 작습니다.";
  }
}

// else if 문을 사용하지 않고 if 와 return 문만 사용하여 작성
// return문을 만족하는 순간 그 밑에 있는 return 문은 실행되지 않음

function print() {
  console.log(1);
  console.log(2);
}

console.log(3);
print();
console.log(4);

// 함수는 위에서 아래로 실행되기 때문에 실행 순서를 잘 체크해서 작성해야한다
