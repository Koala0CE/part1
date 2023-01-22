import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// renders App's contents into the div-element defined in the file public/index.html id value 'root'
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
