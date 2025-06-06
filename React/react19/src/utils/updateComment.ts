export async function updateComment({
  id,
  text,
}: {
  id: number;
  text: string;
}) {
  const response = await fetch(`http://localhost:4000/comments/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error("댓글 수정 실패");
  }

  return await response.json();
}
