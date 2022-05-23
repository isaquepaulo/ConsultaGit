import Navbar from "components/Navbar";
import Home from "pages/Home";
import GitSearch from "pages/GitSearch";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Rota = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route
          path="/gitsearch"
          caseSensitive={false}
          element={<GitSearch />}
        />
      </Routes>
    </Router>
  );
};

export default Rota;
