import React from "react";
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    // <div className=" flex flex-col min-h-screen ">
    <div className=" relative min-h-screen">
      <Header></Header>
      
      <Outlet />
      <div className=" pb-12">
        <div className="absolute bottom-0 w-full h-12">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default App;
