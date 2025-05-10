import React from "react";

const HeavyComponent = () => {
  const now = performance.now();
  while (performance.now() - now < 1000) {} // 컴포넌트 렌더링 1초 지연
  return <div>무거운 컴포넌트 로드</div>;
};

export default HeavyComponent;
