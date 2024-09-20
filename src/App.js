import "./App.css";
import NavBar from "./components/nav-bar/nav-bar.component.tsx";
import Hero from "./components/hero-section/hero.component.tsx";
import Footer from "./components/footer/footer.component.tsx";
import FeatureSection from "./components/feature-section/feature.component.tsx";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <FeatureSection></FeatureSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
