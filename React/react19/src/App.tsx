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
