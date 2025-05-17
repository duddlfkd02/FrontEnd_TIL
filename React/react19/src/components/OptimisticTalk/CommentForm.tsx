"use client";

import { useState, startTransition } from "react";
import { useFormStatus } from "react-dom";

interface CommentFormProps {
  onAddComment: (comment: string) => void;
  onOptimisticAdd: (comment: string) => void;
}

export default function CommentForm({
  onAddComment,
  onOptimisticAdd,
}: CommentFormProps) {
  const [input, setInput] = useState("");

  async function submitAction(formData: FormData) {
    const comment = formData.get("comment") as string;

    // 낙관적 UI 먼저 반영
    startTransition(() => {
      onOptimisticAdd(comment);
    });

    // 서버 반영 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // 실제 저장 처리
    onAddComment(comment);
    setInput("");
  }

  return (
    <form action={submitAction} className="flex items-center gap-2 mt-4">
      <input
        type="text"
        name="comment"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="댓글을 입력하세요."
        className="border px-4 py-2 rounded w-full"
        required
      />
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`px-4 py-2 rounded text-white ${
        pending ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {pending ? "등록 중..." : "등록"}
    </button>
  );
}
