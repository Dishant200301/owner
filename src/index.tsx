import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // optional if using Tailwind

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
