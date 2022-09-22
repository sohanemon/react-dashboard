import data from "./project-data";

const Table = () => {
  return (
    <table className='table-fixed w-full'>
      <thead className='font-semibold border-y'>
        <tr>
          <td className='py-2'>Project title</td>
          <td className='py-2'>Department</td>
          <td className='py-2'>Status</td>
        </tr>
      </thead>
      <tbody>
        {data.map((el, i) => (
          <TableRow key={i} {...el} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

function TableRow({ title, department, statusCode }) {
  return (
    <tr className='font-medium text-gray-500'>
      <td>{title}</td>
      <td>{department}</td>
      <ShowStatus statusCode={statusCode} />
    </tr>
  );
}

function ShowStatus({ statusCode }) {
  return (
    <td className='p-2'>
      {statusCode === 0 ? (
        <div className='flex items-center gap-2'>
          <div className='w-4 h-4 rounded-full bg-blue-600'> </div>
          <span>Review</span>
        </div>
      ) : statusCode === 1 ? (
        <div className='flex items-center gap-2'>
          <div className='w-4 h-4 rounded-full bg-pink-600'> </div>
          <span>In progress</span>
        </div>
      ) : (
        <div className='flex items-center gap-2'>
          <div className='w-4 h-4 rounded-full bg-orange-600'> </div>
          <span>Pending</span>
        </div>
      )}
    </td>
  );
}
