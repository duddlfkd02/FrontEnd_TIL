export async function deleteComment({ id }: { id: number }) {
  const response = await fetch(`http://localhost:4000/comments/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("댓글 삭제 실패");
  }

  return true;
}
