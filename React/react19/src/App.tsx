import { useState, useTransition } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  // useTransition 사용 여부 결정
  const [useConcurrent, setUseConcurrent] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    const heavyWork = () => {
      const newList = Array(10000)
        .fill(null)
        .map((_, i) => `${value}항목 - ${i}`);
      setList(newList);
    };

    if (useConcurrent) {
      startTransition(() => {
        heavyWork();
      });
    } else {
      heavyWork(); // 버벅임 발생
    }
  };

  return (
    <div>
      <h1>useTransition 성능 비교</h1>
      <label>
        <input
          type="checkbox"
          checked={useConcurrent}
          onChange={() => setUseConcurrent(!useConcurrent)}
        />
        useTransition 사용하기
      </label>

      <input type="text" value={input} onChange={handleChange} />
      {isPending && <p>로딩 중...</p>}
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
