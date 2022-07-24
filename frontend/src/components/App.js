import "../styles/index.css";
import Main from "./Main";
import Footer from "./Footer";
import API from "../utils/api";

function App() {
  const api = new API("http://localhost:3001/form");

  function handleSubmit(value) {
    console.log(value);
    api
      .sendData(value)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <Main handleSubmit={handleSubmit}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
