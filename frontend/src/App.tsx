import Footer from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Outlet, Routes } from "react-router-dom";
import { Homepage } from "./Pages/Home";
import About from "./Pages/About";
import { Menu } from "./Components/Menu/Menu";
import { Event } from "./Pages/Event";

export const MainPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <Navbar />
      <Outlet />
      <Footer />
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
          <Route path="menu" element={<Menu />} />
          <Route path="event" element={<Event />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
