import React, { useState } from "react";
import Home from "./components/Home";
import formCreateAccount from "./components/FormCreateAccount";
import formLogin from "./components/FormLogin";

export default (_) => {
  const [page, setPage] = useState(0);

  return (
    <div>
      {page === 0 ? <Home setPage={setPage} /> : null}
      {page === 1 ? <formCreateAccount setPage={setPage} /> : null}
      {page === 2 ? <formLogin /> : null}
    </div>
  );
};
