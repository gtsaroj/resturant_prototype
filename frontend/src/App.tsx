import Footer from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Outlet, Routes } from "react-router-dom";
import { Homepage } from "./Pages/Home";
import About from "./Pages/About.page";
import useScrollToTop from "./Hook/useScrollToTop";
import { EventPage } from "./Pages/Event.page";
import { MenuPage } from "./Pages/Menu.page";
import React, { useEffect } from "react";
import { Loader } from "./Components/Common/Loader/Loader";

export const MainPage = () => {
  useScrollToTop();

  const [showLoader, setShowLoader] = React.useState<boolean>();

  useEffect(() => {
    const loader = localStorage.getItem("showloader");
    if (loader) {
      setShowLoader(true);
    }
  }, []);

  React.useEffect(() => {
    if (sessionStorage.getItem("loaderShown")) {
      setShowLoader(false);
    } else {
      setShowLoader(true);

      setTimeout(() => {
        sessionStorage.setItem("loaderShown", "true");
        setShowLoader(false);
      }, 2000);
    }
  }, []);

  if (showLoader === undefined) {
    return null;
  }

  return showLoader ? (
    <Loader time={2000} />
  ) : (
    <div className="w-full  flex flex-col items-center justify-center ">
      <Navbar />
      <div className="max-w-[1500px] w-full flex flex-col items-center justify-center">
        <Outlet />
      </div>
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
          <Route path="menu" element={<MenuPage />} />
          <Route path="event" element={<EventPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
