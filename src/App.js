import "./App.css";
import { HeroSeaction } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { StorySection } from "./components/StorySection";
import { Tokenomics } from "./components/Tokenomics";
import { Separator } from "./components/Separator";

// import

function App() {
  return (
    <div className="App">
      <HeroSeaction />
      <Separator id="WHO" />
      <AboutSection />
      <Separator id="TOK" />
      <StorySection />
      <Separator id="STATS" />
      <Tokenomics />
      <Separator id="STATS" />
    </div>
  );
}

export default App;
