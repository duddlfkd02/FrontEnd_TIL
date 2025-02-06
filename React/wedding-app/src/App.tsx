import classNames from "classnames/bind";
import styles from "./scss/App.module.scss";
import { useEffect, useState } from "react";

import FullScreenMessage from "./components/shared/FullScreenMessage";

const cx = classNames.bind(styles);

function App() {
  const [wedding, setWedding] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8888/wedding2")
      .then((response) => {
        if (response.ok === false) {
          throw new Error("청첩장 정보를 불러오지 못했습니다.");
        }
        return response.json();
      })
      .then((data) => {
        setWedding(data);
      })
      .catch((error) => {
        console.log("error", error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <FullScreenMessage type="loading" />;
  }
  if (error) {
    return <FullScreenMessage type="error" />;
  }

  return <div className={cx("container")}>{JSON.stringify(wedding)}</div>;
}

export default App;
