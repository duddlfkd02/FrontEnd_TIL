import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { postCommnet } from "../../utils/postComment";

const CommentFormMutate = () => {
  const [text, setText] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postCommnet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
      setText("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (text.trim()) {
      mutation.mutate({ text });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border px-3 py-1 rounded"
        placeholder="댓글을 입력하세요"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-1 rounded"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "등록중..." : "등록"}
      </button>
    </form>
  );
};

export default CommentFormMutate;
