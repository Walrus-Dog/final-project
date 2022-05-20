import React from "react";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Header from "./components/bits/Header";
import Footer from "./components/bits/Footer";
import Main from "./components/pages/Main";
import ComingSoon from "./components/pages/ComingSoon";
import ComingSoonSingle from "./components/pages/ComingSoonSingle";
import CustomerStories from "./components/pages/CustomerStories";
import InStock from "./components/pages/InStock";
import InStockSingle from "./components/pages/InStockSingle";
import Info from "./components/pages/Info";
import SingleProd from "./components/pages/InStockSingle";

function App() {
  const [inStockData, setInStockData] = React.useState([]);
  const [comingSoonData, setComingSoonData] = React.useState([]);
  const [customerStoriesData, setCustomerstoriesData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/api/instock")
    .then(res => res.json())
    .then(data => setInStockData(data))
  }, [])

  React.useEffect(() => {
    fetch("http://localhost:3001/api/comingsoon")
    .then(res => res.json())
    .then(data => setComingSoonData(data))
  }, [])

  React.useEffect(() => {
    fetch("http://localhost:3001/api/stories")
    .then(res => res.json())
    .then(data => setCustomerstoriesData(data))
  }, [])

  // console.log(inStockData)

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/InStock" element={<InStock props={inStockData}/>} />
            <Route path="/InStockSingle/:id" element={<InStockSingle props={inStockData} />} />
          <Route path="/ComingSoon" element={<ComingSoon props={comingSoonData} />} />
            <Route path="/ComingSoonSingle/:id" element={<ComingSoonSingle props={comingSoonData} />} />
          <Route path="/Info" element={<Info />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;