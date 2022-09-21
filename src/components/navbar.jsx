import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className='flex justify-between bg-white items-center shadow-md p-4'>
      <div className='flex items-center gap-2'>
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
            className='h-12 w-12 rounded-full'
            src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt=''
          />
        </div>
        <div>
          <h4 className='font-semibold '>John Don</h4>
          <p className='text-sm text-gray-400'>Super Admin</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
