import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import store from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world</div>,
  },
]);
root.render(
  <>
    <RouterProvider router={router}>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
    </RouterProvider>
  </>
);

reportWebVitals();
