import classNames from "classnames/bind";
import styles from "./scss/App.module.scss";

const cx = classNames.bind(styles);

function App() {
  return <div className={cx("container")}>안녕하세요</div>;
}

export default App;
