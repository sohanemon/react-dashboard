import { MdArrowForward } from "react-icons/md";

export default function ProjectHead() {
  return (
    <div className='flex justify-between '>
      <h1 className='text-2xl font-semibold'>Recent Projects</h1>
      <button className='flex items-center gap-2 bg-pink-500 text-white hover:bg-pink-600 px-2 py-1 rounded-lg'>
        Show all
        <MdArrowForward />
      </button>
    </div>
  );
}
