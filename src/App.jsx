import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { Menu } from "./Components/Menu/Menu";
import { Footer } from "./Components/Footer/Footer";
import { Content } from "./Components/Content/Content";


function App() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="main">
      <Menu menu={menu} toggleMenu={toggleMenu} />
      <Header toggleMenu={toggleMenu} />
      <Content/>
      <Footer />
    </div>
  );
}

export default App;
