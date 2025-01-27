/**
 Promise
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("실패 이유");
  }, 3000);
});

promise.then((response) => {
  // response는 number 타입
  console.log(response * 10); // 20
});

promise.catch((error) => {
  if (typeof error === "string") {
    console.log(error);
  }
});

/**
 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 내용",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  console.log(post.id);
});
