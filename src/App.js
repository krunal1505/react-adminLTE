import React from "react";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
