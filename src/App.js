import React from "react";
import { BrowserRouter } from "react-router-dom";
import PublicRouter from "./Router/PublicRouter";
import PrivateRouter from "./Router/PrivateRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <PublicRouter />
        {/* <PrivateRouter /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
