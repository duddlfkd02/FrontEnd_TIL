import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const SearchPage = () => {
  const router = useRouter();

  const { q } = router.query;

  return <h1>검색 결과 : {q}</h1>;
};

export default SearchPage;

SearchPage.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
