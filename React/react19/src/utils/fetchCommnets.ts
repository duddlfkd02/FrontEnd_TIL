export async function fetchComments() {
  const response = await fetch("http://localhost:4000/comments");
  if (!response.ok) throw new Error("댓글 불러오는 중 오류 발생");
  return response.json();
}
