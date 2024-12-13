// 비동기 Promise

const executor = (resolve, reject) => {
  // promise 객체가 생성될 때 자동으로 실행되는 함수
  // promise 객체 생성 -> executor 실행 -> 원하는 작업 처리

  setTimeout(() => {
    resolve("성공");
    reject("실패");
  }, 3000);
};

const promise = new Promise(executor);
//console.log(promise); // Promise(<pending>)

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const workA = (val, callback) => {
  setTimeout(() => {
    callback(val + 5);
  }, 5000);
};
const workB = (val, callback) => {
  setTimeout(() => {
    callback(val - 3);
  }, 3000);
};
const workC = (val, callback) => {
  setTimeout(() => {
    callback(val + 10);
  }, 10000);
};

// 1. 콜백지옥 코드
workA(10, (resA) => {
  console.log(`workA, ${resA}`);
  workB(resA, (resB) => {
    console.log(`workB: ${resB}`);
    workC(resB, (resC) => {
      console.log(`workC: ${resC}`);
    });
  });
});

// 2. then 으로 바꾸기
workA(10).then((resA) => {
  console.log(`workA, ${resA}`);
  workB(resA).then((resB) => {
    console.log(`workB, ${resB}`);
    workC(resB).then((resC) => {
      console.log(`workC, ${resC}`);
    });
  });
});

// 3. Promise Chaining
workA(10)
  .then((resA) => {
    console.log(`1, ${resA}`);
    return workB(resA);
  })
  .then((resB) => {
    console.log(`2, ${resB}`);
    return workC(resB);
  })
  .then((resC) => {
    console.log(`3, ${resC}`);
  });

/*
  코드 차이점

- 중첩된 then
    
    : 각각의 then 내부에서 다시 새로운 `then`을 호출
    각 작업이 다음 작업을 호출해야 하므로 코드가 단계적으로 중첩된다.
    
    → 가독성 문제, 디버깅 및 유지보수 어려움
    
- Promise Chaining
    
    : 각 작업이 “체인 형식”으로 다음 작업을 호출하기 위해 값을 반환
    중첩 구조 없이 `.then()`을 체인으로 연결하여 작업을 순차적으로 처리한다.
    
    → 구조 전체에서 발생하는 에러를 `.catch()` 로 단일 처리 가능

*/

const workD = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workD");
    }, 5000);
  });
};
const workE = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workE");
    }, 3000);
  });
};
const workF = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workF");
    }, 10000);
  });
};

const start = async () => {
  try {
    let resultD = await workD();
    let resultE = await workE();
    let resultF = await workF();
    console.log(resultD);
    console.log(resultE);
    console.log(resultF);
  } catch (error) {
    console.log(error);
  }
};

const promiseAll = async () => {
  try {
    let results = await Promise.all([workD(), workE(), workF()]);
    results.map((result) => console.log(result));
  } catch (error) {
    console.log(error);
  }
};

promiseAll();
