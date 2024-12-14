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
import i18next from "i18next";
import LanguageModal from "./Components/LanguageModal/LanguageModal";
import { QueryClient, QueryClientProvider } from "react-query";
import { Reserve } from "./Components/Reserve/Reserve";
import { CartPage } from "./Pages/CartPage";

export const MainPage = () => {
  useScrollToTop();
  const isSetLanguage = localStorage.getItem("i18nextLng") as "EN" | "NP";
  const [showLoader, setShowLoader] = React.useState<boolean>();
  const [language, setLanguage] = React.useState<"EN" | "NP" | undefined>(
    undefined
  );

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
  React.useEffect(() => {
    if (isSetLanguage === "EN" || isSetLanguage === "NP") {
      setLanguage(isSetLanguage);
    }
  }, [isSetLanguage]);

  if (showLoader === undefined) {
    return null;
  }

  const changeLanguageFn = (language: "EN" | "NP") => {
    i18next.changeLanguage(language);
    setLanguage(language);
  };

  return showLoader ? (
    <Loader time={2000} />
  ) : !language ? (
    <LanguageModal
      onLanguageSelect={(value: "EN" | "NP") => changeLanguageFn(value)}
    />
  ) : (
    <div className="flex flex-col items-center justify-center w-full ">
      <Navbar />
      <div className="max-w-[1500px] w-full flex flex-col items-center justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 60,
        cacheTime: 5 * 60 * 60,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<Homepage />}></Route>
            <Route path="about" element={<About />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="event" element={<EventPage />} />
            <Route path="reserve" element={<Reserve />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
