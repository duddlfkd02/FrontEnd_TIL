import classNames from "classnames/bind";
import styles from "./Calendar.module.scss";
import Section from "../shared/Section";
import { parseISO, format } from "date-fns";
import { ko } from "date-fns/locale";
import { DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";
const cx = classNames.bind(styles);

const css = `
    .rdp-month_caption,
    .rdp-nav{
      display:none;
    }
    .rdp-day{
      font-size : 18px;
      cursor : default;
    }
    .rdp-weekday{
      font-weight: bold;
      font-size : 18px;
    }
    .rdp-selected .rdp-day_button {
      background-color: var(--red);
      border-radius: 100%;
      border: none;
    }

    .rdp-selected .rdp-day_button:hover {
      background-color: var(--red);
      border-radius: 100%;
    }
`;

function Calendar({ date }: { date: string }) {
  const weddingDate = parseISO(date);
  return (
    <Section
      title={
        <div className={cx("wrap-header")}>
          <span className={cx("txt-date")}>
            {format(weddingDate, "yyyy.MM.dd")}
          </span>
          <span className={cx("txt-time")}>
            {format(weddingDate, "aaa h시 eeee", { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx("wrap-calendar")}>
        <style>{css}</style>
        <DayPicker
          locale={ko}
          month={weddingDate}
          mode="single"
          selected={weddingDate}
          formatters={{ formatCaption: () => "" }}
        />
      </div>
    </Section>
  );
}

export default Calendar;
