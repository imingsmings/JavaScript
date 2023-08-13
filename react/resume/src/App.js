import BasicInfo from "./components/Basic";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Evaluation from "./components/Evaluation";
import Self from "./components/Self";
import Style from "./App.module.css";

function App() {
  return (
    <div className={Style.main}>
      <BasicInfo />
      <Evaluation />
      <Skill />
      <Experience />
      <Project />
      <Self />
    </div>
  );
}

export default App;
