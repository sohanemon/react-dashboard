import ProjectHead from "./project-head";
import Table from "./table";

const Projects = () => {
  return (
    <div className='p-4 col-span-2 bg-white m-4 rounded-md'>
      <ProjectHead title={"Recent Project"} />
      <br />
      <Table />
    </div>
  );
};

export default Projects;
