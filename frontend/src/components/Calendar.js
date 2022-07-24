import React, { useState, useEffect } from "react";
import closeIcon from "../images/Close.svg";
import left from "../images/left.svg";
import right from "../images/Right.svg";
import * as moment from "moment";
import "moment/locale/ru";

function Calendar({ onUpdate, setOpen, open, closeCalendar, time }) {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(time);
  const currDate = time;
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");
  const weekDays = ["ПН", "ВT", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

  useEffect(() => {
    const day = startDay.clone().subtract("1", "day");
    const a = [];
    while (day.isBefore(endDay, "day")) {
      a.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, "day").clone())
      );
    }
    setCalendar(a);
  }, [value]);

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month").startOf("month");
  }

  function thisMonth() {
    return value.isSame(new Date(), "month");
  }
  console.log(value)

  function hide(day) {
    if (value.isSame(day, "month")) {
      if (currDate.isSame(day, "day")) {
        const cellClass = "calendar__cell_active calendar__cell";
        return cellClass;
      }
      return "calendar__cell";
    } else {
      return "calendar__cell_none";
    }
  }

  function updateDay(day) {
    const temp = currDate.clone().subtract(1, "day");
    if (day.isBefore(temp)) {
      return;
    } else {
      onUpdate(day);
      setOpen({
        calendar: false,
        timePicker: true,
        form: false,
      });
    }
  }

  return (
    <div className={open.calendar ? "calendar" : "calendar_none"}>
      <div className="calendar__header">
        <span className="calendar__caption">Выбор даты</span>
        <img
          alt="close"
          onClick={() => closeCalendar()}
          src={closeIcon}
          className="button_close"
        ></img>
      </div>
      <div className="form__block">
        <div className="date__container">
          <img
            alt="back"
            onClick={() => !thisMonth() && setValue(prevMonth())}
            src={left}
            className="button__arrow"
          ></img>
          <span className="date">
            {value.format("MMMM")}, {value.format("YYYY")}
          </span>
          <img
            alt="next"
            onClick={() => setValue(nextMonth())}
            src={right}
            className="button__arrow"
          ></img>
        </div>
        <div>
          <div className="calendar__table">
            {weekDays.map((day, i) => (
              <div key={i} className="weekday__cell">{day}</div>
            ))}
          </div>
          {calendar.map((week, i) => (
            <div key={i} className="calendar__table">
              {week.map((day, i) => (
                <div key={i} onClick={() => updateDay(day)} className={hide(day)}>
                  {day.format("D")}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
