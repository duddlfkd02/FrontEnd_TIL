import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchComments } from "../../utils/fetchCommnets";
import { deleteComment } from "../../utils/deleteComment";

const CommentList = () => {
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
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded shadow-sm flex justify-between"
          >
            {comment.text}

            <button onClick={() => deleteMutation.mutate({ id: comment.id })}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
