import { useState } from "react";
import "./App.css";
import { MovieContext, ThemContext } from "./Context";
import Page from "./components/Page";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartData, setCartData] = useState([]);
  const [drakMode, setDarkMode] = useState(true);
  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <ThemContext.Provider value={{ drakMode, setDarkMode }}>
          <Page></Page>
          <ToastContainer />
        </ThemContext.Provider>
      </MovieContext.Provider>
    </>
  );
}

export default App;
