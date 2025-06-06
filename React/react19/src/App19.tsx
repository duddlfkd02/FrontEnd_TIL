import { useOptimistic, useState, startTransition } from "react";
import CommentForm from "./components/OptimisticTalk/CommentForm";
import CommentList from "./components/OptimisticTalk/CommentList";

export default function App() {
  const [comments, setComments] = useState<string[]>([]);
  const [optimisticComments, addOptimisticComment] = useOptimistic<
    string[],
    string
  >(comments, (state, newComment) => [...state, newComment]);

  const handleAddComment = (comment: string) => {
    startTransition(() => {
      addOptimisticComment(comment);
    });
    setComments((prev) => [...prev, comment]);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4 text-blue-800">
        Optimistic Talk 💬
      </h1>
      <CommentForm
        onAddComment={handleAddComment}
        onOptimisticAdd={addOptimisticComment}
      />
      <CommentList comments={optimisticComments} />
    </div>
  );
}

/* React 19 실습 시 사용한 코드입니다.
 * 브라우저 실행 시 작동되는 코드는 TanStack Query 적용 실습 코드이며
 * React 19 코드를 실행하려면 위 코드를 App.tsx 파일에 복사 붙여넣기 한 후 실행하세요.
 */
