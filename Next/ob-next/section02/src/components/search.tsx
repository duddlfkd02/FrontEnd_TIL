import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import style from "./search.module.css";

const Search = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const q = router.query.q as string;

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div>
      <div className={style.search_container}>
        <input
          value={search}
          onKeyDown={onKeyDown}
          onChange={onChangeSearch}
          placeholder="영화 제목을 입력하세요"
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
};

export default Search;
