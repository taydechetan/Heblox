import React from "react";
import { BrowserRouter } from "react-router-dom";
import PublicRouter from "./Router/PublicRouter";
import PrivateRouter from "./Router/PrivateRouter";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <PublicRouter />
        {/* <PrivateRouter /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
