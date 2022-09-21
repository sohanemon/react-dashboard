import Navbar from "./components/navbar";
import CardContainer from "./components/card/card-container";
import Projects from "./components/projects/projects";
function App() {
  return (
    <div className='w-3/4 mx-auto bg-body'>
      <Navbar />
      <CardContainer />
      <div>
        <Projects />
      </div>
    </div>
  );
}

export default App;
