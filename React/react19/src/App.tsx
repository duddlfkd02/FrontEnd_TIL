import { Suspense } from "react";
import UserInfo from "./components/UserInfo";

const App = () => {
  return (
    <div>
      <h1>React 19 `use()` 실습</h1>

      <Suspense fallback={<p>유저 정보를 불러오는 중입니다...</p>}>
        <UserInfo />
      </Suspense>
    </div>
  );
};

export default App;

// use()는 단순한 비동기 처리에는 적합하지 않고, Suspense 기반 데이터 처리에 쓰임
// 서버 컴포넌트(SC) 환경에서 주로 쓰이기 때문에, Next.js App Router에서 유용함
// -> Next.js에서 use()를 사용할 때는 기본이 서버컴포넌트이므로 Suspense 불필요함

// 비동기 작업을 동기적으로 사용할 수 있게 해주는 훅
// React19 + Suspense 필요!
// 주요 용도 : 서버 컴포넌트에서의 데이터 fetch 처리, Stream 기반 SSR
