export async function fetchUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!response.ok) throw new Error("데이터 로딩 실패");
  return response.json();
}
