import ProjectHead from "../projects/project-head";
import { IoMdContact } from "react-icons/io";
import { MdCall, MdOutlineMessage } from "react-icons/md";
import data from "./data";
const Customer = () => {
  return (
    <div className='col-span-1  bg-white m-4 rounded-md'>
      <div className='p-4'>
        <ProjectHead title={"New Customer"} />
      </div>
      <br />
      <section className='p-2 space-y-5'>
        {data.map((el) => (
          <TableRow {...el} key={el.image} />
        ))}
      </section>
    </div>
  );
};

export default Customer;

function TableRow({ image, name, job }) {
  return (
    <div className='grid grid-cols-7 gap-2 items-center '>
      <div className='col-span-1'>
        <img src={image} className='w-10 h-10 rounded-full ' alt={name} />
      </div>
      <div className='col-span-3'>
        <div>
          <h2 className=' font-semibold text-gray-800'>{name}</h2>
          <p className='font-semibold text-gray-500'>{job}</p>
        </div>
      </div>
      <div className='col-span-2 text-pink-400 text-2xl mr-auto  flex items-center gap-2'>
        <IoMdContact className='cursor-pointer' />
        <MdOutlineMessage className='cursor-pointer' />
        <MdCall className='cursor-pointer' />
      </div>
    </div>
  );
}
