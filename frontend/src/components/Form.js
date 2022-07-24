import left from "../images/left.svg";
import close from "../images/Close.svg";
import React, { useEffect, useState } from "react";
import { regexEmail, regexMobile } from "../utils/regex";

function Form({ time, setOpen, open, closeCalendar, handleSubmit }) {
  const [state, setState] = useState({
    tel: "",
    email: "",
    name: "",
    time: "",
  });
  const [confirm, setConfirm] = useState(false);

  const [validation, setValidation] = useState({
    tel: true,
    email: true,
    name: true,
  });
  const [check, setCheck] = useState(false);

  const tel = regexMobile.test(state.tel);
  const email = regexEmail.test(state.email);
  const name = !!state.name.trim() && state.name.length >= 3;

  console.log(validation);

  useEffect(() => {
    setState({
      tel: state.tel,
      email: state.email,
      name: state.name,
      time: time.format("DD MMM, LT"),
    });
  }, [time]);

  useEffect(() => {
    if (check) {
      setValidation({
        tel: tel,
        email: email,
        name: name,
        all: tel && email && name,
      });
    }
  }, [state]);

  console.log(state);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
      time: state.time,
    }));
  };

  function goBack() {
    setOpen({
      calendar: false,
      timePicker: true,
      form: false,
    });
  }

  function sendForm(e) {
    e.preventDefault();
    setCheck(true);
    setValidation({
      tel: tel,
      email: email,
      name: name,
      all: tel && email && name,
    });
    if (validation.all) {
      handleSubmit(state);
      setConfirm(true);
    } else {
      return;
    }
  }

  function exit() {
    closeCalendar();
    setConfirm(false);
    setState({
      tel: "",
      email: "",
      name: "",
      time: "",
    });
    setValidation({
      tel: true,
      email: true,
      name: true,
    });
    setCheck(false);
  }

  return (
    <div className={open.form ? "form__container" : "form__container_none"}>
      <div className={!confirm ? "form__header" : "confirm__none"}>
        <div className="caption__container">
          <img
            onClick={goBack}
            className="button__arrow_back"
            alt="left"
            src={left}
          ></img>
          <span className="calendar__caption">Оформление заявки</span>
        </div>
        <img
          onClick={() => closeCalendar()}
          className="button_close"
          alt="close"
          src={close}
        ></img>
      </div>
      <div className={!confirm ? "form__block" : "confirm__none"}>
        <div>
          <div className="date">{time.format("DD MMM, LT")}</div>
          <form className="form">
            <input
              onChange={handleChange}
              name="tel"
              value={state.tel}
              className={
                validation.tel ? "form__input" : "form__input form__input_error"
              }
              type="text"
              placeholder="Номер телефона"
            ></input>
            <span className={validation.tel ? "warning" : "warning warning_on"}>
              Введите действительный номер телефона
            </span>
            <input
              onChange={handleChange}
              name="email"
              value={state.email}
              className={
                validation.email
                  ? "form__input"
                  : "form__input form__input_error"
              }
              type="text"
              placeholder="E-mail"
            ></input>
            <span
              className={validation.email ? "warning" : "warning warning_on"}
            >
              Введите действительный e-mail
            </span>
            <input
              onChange={handleChange}
              name="name"
              value={state.name}
              className={
                validation.name
                  ? "form__input"
                  : "form__input form__input_error"
              }
              type="text"
              placeholder="Ваше имя"
            ></input>
            <span
              className={validation.name ? "warning" : "warning warning_on"}
            >
              Заполните это поле
            </span>
          </form>
        </div>
        <button type="submit" onClick={sendForm} className="button__submit">
          Записаться на просмотр
        </button>
      </div>
      <div className={confirm ? "confirm" : "confirm__none"}>
        <div className="confirm__container">
          <h2 className="confirm__title">
            Просмотр <br></br> запланирован
          </h2>
          <p className="confirm__caption">
            Дополнительная информация будет отправлена на указанный почтовый
            адрес или номер телефона.
          </p>
        </div>
        <button onClick={exit} className="confirm__button">
          На главную
        </button>
      </div>
    </div>
  );
}

export default Form;
