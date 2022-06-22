import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Habilidades from "./components/Habilidades";

function App() {
  return (
    <BrowserRouter>
      <div className="font-quicksand text-slate-50 bg-slate-900">
        <Nav />
        <Header />
        <About />
        <Habilidades />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
