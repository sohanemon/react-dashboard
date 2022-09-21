import Navbar from "./components/navbar";
import CardContainer from "./components/card/card-container";
import Projects from "./components/projects/projects";
import Customer from "./components/customers/customer";
import Sidebar from "./components/sidebar/sidebar";
function App() {
  return (
    <div className='flex'>
      <div className='w-1/4'>
        <Sidebar />
      </div>
      <div className='w-3/4 mx-auto bg-body'>
        <Navbar />
        <CardContainer />
        <div className='grid grid-cols-3'>
          <Projects />
          <Customer />
        </div>
      </div>
    </div>
  );
}

export default App;
