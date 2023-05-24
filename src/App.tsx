import { Main } from "./pages/main/main";
import { Reset } from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Chart } from "./pages/chart/chart";
import { OnOff } from "./pages/onOff/onOff";
import { Footer } from "./components/footer/footer";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Reset />
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/onOff" element={<OnOff />}></Route>
          <Route path="/Chart" element={<Chart />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
