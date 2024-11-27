import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";

// import "C:/Users/Hp/Desktop/reminders-app/public/index.css"
// import "../public/index.css";
// import "/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);

