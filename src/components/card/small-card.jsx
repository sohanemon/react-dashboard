export default function SmallCard({ value, title, icon }) {
  return (
    <div className='flex basis-full md:basis-1/5 bg-white items-center rounded-md shadow-sm gap-10 px-10 py-6 w-max'>
      <div>
        <h1 className='text-3xl font-bold'>{value}</h1>
        <h3 className='text-gray-400'>{title}</h3>
      </div>
      <div className='text-pink-400 text-6xl pb-4'>{icon}</div>
    </div>
  );
}
