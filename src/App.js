import Navbar from "./components/navbar";
import CardContainer from "./components/card/card-container";
import Projects from "./components/projects/projects";
import Customer from "./components/customers/customer";
import Sidebar from "./components/sidebar/sidebar";
import { createContext, useState } from "react";
export const SidebarContext = createContext();
function App() {
  const [sidebarVisibility, setSidebarVisibility] = useState(true);
  return (
    <div>
      <SidebarContext.Provider
        value={{ sidebarVisibility, setSidebarVisibility }}
      >
        <div className='flex'>
          <div className={`${sidebarVisibility ? "w-1/4" : "hidden"}`}>
            <Sidebar />
          </div>
          <div
            className={`${
              sidebarVisibility ? "w-3/4" : "w-full"
            } mx-auto bg-body`}
          >
            <Navbar />
            <CardContainer />
            <div className='grid grid-cols-3'>
              <Projects />
              <Customer />
            </div>
          </div>
        </div>
      </SidebarContext.Provider>
    </div>
  );
}
export default App;
