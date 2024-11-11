import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import About from "./components/section/about";
import Counter from "./components/section/counter";
import Footer from "./components/section/footer";
import Service from "./components/section/service";
import Work from "./components/section/work";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Counter />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
