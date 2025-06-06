import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchComments } from "../../utils/fetchCommnets";
import { deleteComment } from "../../utils/deleteComment";
import { updateComment } from "../../utils/updateComment";
import { useState } from "react";

const CommentList = () => {
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
  const queryClient = useQueryClient();

  const {
    data: comments,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: fetchComments,
  });

  const updateMutation = useMutation({
    mutationFn: updateComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["commnents"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  if (isLoading) return <p>로딩중입니다...</p>;
  if (isError) return <p>오류 발생 : {error.message}</p>;

  return (
    <div>
      <ul>
        {comments.map((comment: { id: number; text: string }) => (
          <li
            key={comment.id}
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded shadow-sm flex justify-between items-center gap-2 mb-2"
          >
            {editId === comment.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="border px-2"
                />
                <button
                  onClick={() => {
                    updateMutation.mutate({ id: comment.id, text: editText });
                    setEditId(null);
                  }}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  저장
                </button>
              </>
            ) : (
              <>
                <span>{comment.text}</span>
                <button
                  onClick={() => {
                    setEditId(comment.id);
                    setEditText(comment.text);
                  }}
                  className="text-sm text-blue-500"
                >
                  ✏️
                </button>
              </>
            )}
            <button
              onClick={() => deleteMutation.mutate({ id: comment.id })}
              className="text-red-500"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
