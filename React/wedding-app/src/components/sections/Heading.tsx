import React from "react";
import classNames from "classnames/bind";
import styles from "./Heading.module.scss";

import Section from "../shared/Section";

const cx = classNames.bind(styles);

function Heading() {
  return (
    <Section className={cx("container")}>
      <div className={cx("txt-date")}>25.08.12</div>
      <div className={cx("txt-day")}>SUNDAY</div>
    </Section>
  );
}

export default Heading;
