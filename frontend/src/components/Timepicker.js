import left from "../images/left.svg";
import close from "../images/Close.svg";
import { useEffect, useState } from "react";
import * as moment from "moment";
import "moment/locale/ru";

function Timepicker({ onUpdate, time, open, setOpen, closeCalendar }) {
  const [timePicker, settimePicker] = useState([]);
  const startTime = time.clone().hours(8).minutes(0);
  const endTime = time.clone().hours(19).minutes(0);

  useEffect(() => {
    const temp = startTime.clone().subtract("30", "minute");
    const a = [];
    while (temp.isBefore(endTime, "minute")) {
      a.push(
        Array(8)
          .fill(0)
          .map(() => temp.add(30, "minutes").clone())
      );
    }
    settimePicker(a);
  }, [time]);

  function goBack() {
    setOpen({
      calendar: true,
      timePicker: false,
      form: false,
    });
  }
  function updateTime(time) {
    onUpdate(time);
    setOpen({
      calendar: false,
      timePicker: false,
      form: true,
    });
  }

  return (
    <div className={open.timePicker ? "calendar" : "calendar_none"}>
      <div className="form__header">
        <div className="caption__container">
          <img
            onClick={goBack}
            className="button__arrow_back"
            alt="left"
            src={left}
          ></img>
          <span className="calendar__caption">Выбор времени</span>
        </div>
        <img
          onClick={() => closeCalendar()}
          className="button_close"
          alt="close"
          src={close}
        ></img>
      </div>
      <div className="form__block">
        <div className="date">{time.format("DD MMMM")}</div>
        {timePicker.map((date, i) => (
          <div key={i} className="timepicker__table">
            {date.map((time, i) => (
              <div key={i} onClick={() => updateTime(time)} className="timpicker__cell">
                {time.format("LT")}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timepicker;
