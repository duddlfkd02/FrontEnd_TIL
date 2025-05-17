// 기존 React18 버전

import { useState } from "react";

interface CommentFormProps {
  onAddComment: (comment: string) => void;
}

export default function CommentForm18({ onAddComment }: CommentFormProps) {
  const [input, setInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    onAddComment(input);
    setInput("");
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
      <input
        type="text"
        name="comment"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="댓글을 입력하세요."
        className="border px-4 py-2 rounded w-full"
        required
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className={`px-4 py-2 rounded text-white ${
          isSubmitting ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isSubmitting ? "등록 중..." : "등록"}
      </button>
    </form>
  );
}
