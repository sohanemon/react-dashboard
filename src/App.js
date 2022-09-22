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
          <div className={`${sidebarVisibility ? "w-7/8 md:w-1/4" : "hidden"}`}>
            <Sidebar />
          </div>
          <div
            className={`${
              sidebarVisibility ? "w-1/12 md:w-3/4 overflow-hidden " : "w-full"
            } mx-auto bg-body`}
          >
            <Navbar />
            <div className={`${sidebarVisibility ? "hidden sm:block" : ""}`}>
              <CardContainer />
              <div className='grid grid-cols-1 md:grid-cols-3'>
                <Projects />
                <Customer />
              </div>
            </div>
          </div>
        </div>
      </SidebarContext.Provider>
    </div>
  );
}
export default App;
