import { useRouter } from "next/router";

const BookPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <h1>Book{id}</h1>;
};

export default BookPage;
