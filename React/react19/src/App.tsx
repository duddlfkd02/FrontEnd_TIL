import { lazy, Suspense, useState } from "react";

// 동적 import로 지연 로딩
const HeavyComponent = lazy(() => import("./components/HeavyComponent"));

const App = () => {
  const [showHeavy, setShowHeavy] = useState(false);

  return (
    <div>
      <h1>Suspense + Lazy</h1>
      <button onClick={() => setShowHeavy(true)}>Heavy Component</button>

      <Suspense fallback={<p>로딩 중입니다...</p>}>
        {showHeavy && <HeavyComponent />}
      </Suspense>
    </div>
  );
};

export default App;

// 데이터 로딩처리 (API fetch, 서버 요청 등) : isLoading 등 조건 분기 방식 사용
// 컴포넌트 지연 로딩 (lazy, use()) : Suspense + fallback
