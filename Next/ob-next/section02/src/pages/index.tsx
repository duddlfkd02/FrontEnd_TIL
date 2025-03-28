import Search from "@/components/search";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <h1>ONEBITE CINEMA</h1>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <Search>{page}</Search>;
};
