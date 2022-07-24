import "../styles/index.css";
import logo from "../images/Logo.svg";
import Calendar from "./Calendar";
import React, { useState } from "react";
import Form from "./Form";
import Timepicker from "./Timepicker";
import * as moment from "moment";
import "moment/locale/ru";

function Main({ handleSubmit }) {
  const [isOpen, setIsOpen] = useState(true);
  const [next, setNext] = useState({
    calendar: false,
    timePicker: false,
    form: false,
  });
  const [time, setTime] = useState(moment());

  function closeCalendar() {
    setIsOpen((prev) => !prev);
    setNext({
      calendar: false,
      timePicker: false,
      form: false,
    });
  }

  function updateTime(value) {
    setTime(value);
  }

  function navigationHandler(value) {
    setNext(value);
  }

  function openCalendar() {
    setIsOpen((prev) => !prev);
    setNext({
      calendar: true,
      timePicker: false,
      form: false,
    });
  }

  return (
    <section className="main__section">
      <img alt="main-logo" className="main__logo" src={logo}></img>
      <div className="container">
        <div className="main__container">
          <h1 className="main__title">
            Жилой комплекс <br></br> в центре города
          </h1>
          <p className="main_caption">
            Создатели проекта хотели создать для вас атмосферу бесконечного
            космического пространства, спокойствия и уединения в окружении
            элегантных интерьеров.
          </p>
          <button onClick={openCalendar} className="button">
            Записаться на просмотр
          </button>
        </div>
      </div>
      <div className={isOpen ? "main__calendar_close" : "main__calendar"}>
        <Calendar
          time={time}
          closeCalendar={closeCalendar}
          setOpen={navigationHandler}
          open={next}
          onUpdate={updateTime}
        ></Calendar>
        <Timepicker
          closeCalendar={closeCalendar}
          setOpen={navigationHandler}
          open={next}
          onUpdate={updateTime}
          time={time}
        ></Timepicker>
        <Form
          handleSubmit={handleSubmit}
          closeCalendar={closeCalendar}
          open={next}
          setOpen={navigationHandler}
          time={time}
        ></Form>
      </div>
    </section>
  );
}

export default Main;
