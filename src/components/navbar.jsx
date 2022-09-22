import { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { SidebarContext } from "../App";

const Navbar = () => {
  const { setSidebarVisibility } = useContext(SidebarContext);
  return (
    <div className='flex justify-between bg-white items-center shadow-md p-4'>
      <div
        onClick={() => setSidebarVisibility((i) => !i)}
        className='flex items-center gap-2 cursor-pointer'
      >
        <GiHamburgerMenu size={"20px"} />
        <h2 className='font-semibold text-xl'>Dashboard</h2>
      </div>
      <div>
        <div className=' border-2  rounded-full py-2 px-3 flex items-center gap-5'>
          <AiOutlineSearch size={"20px"} color={"gray"} />
          <input type='text' placeholder='search here' />
        </div>
      </div>
      <div className='flex gap-4'>
        <div>
          <img
            className='h-12 w-12 rounded-full '
            src='https://avatars.githubusercontent.com/u/42204040?s=400&u=116dd62a437a73c9b15468d1ea34afae9d895871&v=4'
            alt=''
          />
        </div>
        <div>
          <h4 className='font-semibold '>Sohan Emon</h4>
          <p className='text-sm text-gray-400'>Super Admin</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
