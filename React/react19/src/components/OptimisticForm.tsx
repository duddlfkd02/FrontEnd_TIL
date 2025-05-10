import { useOptimistic, useState, useTransition } from "react";

const OptimisticForm = () => {
  const [input, setInput] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const [optimisticComments, addOptimisticComments] = useOptimistic(
    comments,
    (state, newComment: string) => [...state, newComment]
  );

  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. 낙관적 ui 먼저 사용 - useOptimistic 는 ServerAction에서 안전하게 작동하므로 useTransition와 함께 사용
    startTransition(() => {
      addOptimisticComments(input);
      setInput("");
    });

    // 2. 서버 동작 (실제로는 fetch 등으로 서버 연동)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 3. 서버 응답 후 진짜 상태 업데이트
    setComments((prev) => [...prev, input]);
  };

  return (
    <div>
      <h2>낙관적 댓글 추가</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button type="submit">추가</button>
      </form>

      <ul>
        {optimisticComments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default OptimisticForm;
