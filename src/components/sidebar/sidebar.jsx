import { MdBorderColor, MdInventory2, MdDashboard } from "react-icons/md";
import { BiConfused } from "react-icons/bi";
import { RiCustomerService2Fill, RiAccountPinCircleFill } from "react-icons/ri";
import { AiFillProject, AiOutlineSearch } from "react-icons/ai";
import { createContext, useContext, useState } from "react";
const PathContext = createContext();
const Sidebar = (props) => {
  const [pathname, setPathname] = useState("Dashboard");

  return (
    <PathContext.Provider value={{ pathname, setPathname }}>
      <nav className='bg-pink-500  h-screen sm:h-full pl-2 sm:pl-8'>
        <header className='text-4xl text-white pt-4 pb-8 flex items-center gap-4'>
          <BiConfused />
          Accusoft
        </header>
        <div className='md:hidden block pr-4 pl-2'>
          <div className=' border-2  rounded-full py-2 px-3 flex items-center gap-5'>
            <AiOutlineSearch size={"20px"} color={"white"} />
            <input
              type='text'
              className='bg-transparent placeholder:text-white border-none outline-none text-white'
              placeholder='search here'
            />
          </div>
        </div>
        <section>
          <NavItem icon={<MdDashboard />} name='Dashboard' />
          <NavItem icon={<RiCustomerService2Fill />} name='Customer' />
          <NavItem icon={<AiFillProject />} name='Project' />
          <NavItem icon={<MdBorderColor />} name='Orders' />
          <NavItem icon={<MdInventory2 />} name='Inventories' />
          <NavItem icon={<RiAccountPinCircleFill />} name='Account' />
        </section>
      </nav>
    </PathContext.Provider>
  );
};

export default Sidebar;

function NavItem({ icon, name }) {
  const { pathname, setPathname } = useContext(PathContext);
  return (
    <div
      onClick={() => {
        setPathname(name);
      }}
      href={name}
      className={`${
        pathname === name ? "text-pink-500 bg-white" : "text-white"
      } flex items-center  text-xl gap-3 cursor-pointer font-semibold p-3  rounded-l-full  my-2`}
    >
      {icon}
      <p>{name}</p>
    </div>
  );
}
