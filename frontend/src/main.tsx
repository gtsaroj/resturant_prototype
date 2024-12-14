import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./translator/Translator.ts";
import { Toaster } from "react-hot-toast";
import { SocialMedia } from "./Components/Media/Social.Media.tsx";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import { Store, persistor } from "./Store.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={Store}>
      <PersistGate loading="loading" persistor={persistor}>
        <App />
        <Toaster position="top-right" />
        <SocialMedia />
      </PersistGate>
    </Provider>
  </StrictMode>
);
