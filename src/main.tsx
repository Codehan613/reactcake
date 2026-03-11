import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HeroUIProvider, ToastProvider } from "@heroui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <main className="text-foreground min-h-screen bg-[#faf9f6]">
        <ToastProvider
          maxVisibleToasts={1}
          placement="top-center"
          toastProps={{
            shouldShowTimeoutProgress: true,
            classNames: {
              base: "!z-[9998] text-sm p-1",
            },
            timeout: 2000,
          }}
        />
        <App />
      </main>
    </HeroUIProvider>
  </React.StrictMode>,
);
