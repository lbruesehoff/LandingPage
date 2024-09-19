import "./App.css";
import NavBar from "./components/nav-bar/nav-bar.component.tsx";
import Hero from "./components/hero-section/hero.component.tsx";
import Footer from "./components/footer/footer.component.tsx";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
}

export default App;
