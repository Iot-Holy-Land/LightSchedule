import { Main } from "./pages/main/main";
import { Reset } from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Modify } from "./pages/modify/modify";
import { Header } from "./components/header/header";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Reset />

        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Modify" element={<Modify />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
