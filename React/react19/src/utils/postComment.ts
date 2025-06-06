export async function postCommnet(comment: { text: string }) {
  const response = await fetch("http://localhost:4000/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });

  if (!response.ok) throw new Error("댓글 등록 실패");
  return response.json();
}
