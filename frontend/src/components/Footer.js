import logo from "../images/Logo_black.svg";
import SimpleMap from "./Map";
function Footer() {
  return (
    <section className="footer">
      <div className="footer__info">
        <div className="footer__container">
          <img className="logo" src={logo}></img>
          <div className="footer__contacts">
            <div className="">
              <h4 className="contacts__title">Адрес</h4>
              <p className="contacts__item">
                ул. Строительная, 11, Екатеринбург
              </p>
              <p className="contacts__item">hello@saturn.pro</p>
              <p className="contacts__item">+ 7 922 555 1234</p>
            </div>
            <div>
              <h4 className="contacts__title">Соцсети</h4>
              <p className="contacts__item">Telegram</p>
              <p className="contacts__item">Twitter</p>
              <p className="contacts__item">Pinterest</p>
            </div>
          </div>
        </div>
      </div>
      <SimpleMap></SimpleMap>
    </section>
  );
}

export default Footer;
