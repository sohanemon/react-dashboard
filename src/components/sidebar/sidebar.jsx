import { MdBorderColor, MdInventory2, MdDashboard } from "react-icons/md";
import { BiConfused } from "react-icons/bi";
import { RiCustomerService2Fill, RiAccountPinCircleFill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";
import { useContext, useEffect, useRef } from "react";
import { SidebarContext } from "../../App";
const Sidebar = (props) => {
  const sidebar = useRef();
  const { sidebarVisibility, setSidebarVisibility } =
    useContext(SidebarContext);
  useEffect(() => {
    // if (sidebarVisibility) sidebar.current.classList.remove("hidden");
    // else sidebar.current.classList.add("hidden");
    return () => {};
  }, [sidebarVisibility]);

  return (
    <nav className='bg-pink-500 h-full pl-8' ref={sidebar}>
      <header className='text-4xl text-white pt-4 pb-8 flex items-center gap-4'>
        <BiConfused />
        Accusoft
      </header>
      <section>
        <div className='flex items-center text-xl gap-3 cursor-pointer font-semibold p-3 bg-white rounded-l-full text-pink-500 my-2'>
          <MdDashboard />
          <p>Dashbaord</p>
        </div>
        <div className='flex items-center text-xl gap-3 cursor-pointer font-semibold p-3  rounded-l-full text-white my-2'>
          <RiCustomerService2Fill />
          <p>Customer</p>
        </div>
        <div className='flex items-center text-xl gap-3 cursor-pointer font-semibold p-3  rounded-l-full text-white my-2'>
          <AiFillProject />
          <p>Projects</p>
        </div>
        <div className='flex items-center text-xl gap-3 cursor-pointer font-semibold p-3  rounded-l-full text-white my-2'>
          <MdBorderColor />
          <p>Orders</p>
        </div>
        <div className='flex items-center text-xl gap-3 cursor-pointer font-semibold p-3  rounded-l-full text-white my-2'>
          <MdInventory2 />
          <p>Inventory</p>
        </div>
        <div className='flex items-center text-xl gap-3 cursor-pointer font-semibold p-3  rounded-l-full text-white my-2'>
          <RiAccountPinCircleFill />
          <p>Accounts</p>
        </div>
      </section>
    </nav>
  );
};

export default Sidebar;
