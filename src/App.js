import React from "react";
import Header from "./components/bits/Header";
import Footer from "./components/bits/Footer";
import Main from "./components/pages/Main";
import ComingSoon from "./components/pages/ComingSoon";
import CustomerStories from "./components/pages/CustomerStories";
import InStock from "./components/pages/InStock";
import Info from "./components/pages/Info";
import SingleProd from "./components/pages/SingleProd";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;