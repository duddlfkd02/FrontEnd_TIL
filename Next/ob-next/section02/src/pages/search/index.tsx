import { useRouter } from "next/router";

const SearchPage = () => {
  const router = useRouter();

  const { q } = router.query;

  return <h1>검색 결과 : {q}</h1>;
};

export default SearchPage;
