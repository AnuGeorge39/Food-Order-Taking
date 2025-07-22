import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

import Home from "./components/home.jsx";
import Admin from "./components/adminpage.jsx";
import Menu from "./components/menu.jsx";
import Header from "./components/header.jsx";
import Staff from "./components/staff.jsx";
import Table from "./components/table.jsx";
import Stafflogin from "./components/stafflogin.jsx";
import Order from "./components/order.jsx";

function App() {
  return (
    <Router>
      <NavBar />

      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/header" element={<Header />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/table" element={<Table />} />
          <Route path="/stafflogin" element={<Stafflogin />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
