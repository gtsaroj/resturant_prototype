import Footer from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Outlet, Routes } from "react-router-dom";
import { Homepage } from "./Pages/Home";
import About from "./Pages/About.page";
import useScrollToTop from "./Hook/useScrollToTop";
import { EventPage } from "./Pages/Event.page";
import { MenuPage } from "./Pages/Menu.page";

export const MainPage = () => {
  useScrollToTop();
  return (
    <div className="w-full  flex flex-col items-center justify-center ">
      <div className="max-w-[1500px] w-full flex flex-col items-center justify-center">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Homepage />}></Route>
          <Route path="about" element={<About />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="event" element={<EventPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
