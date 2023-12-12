/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import GradintText from "../../Component/GradintText";
import SubTitle from "../../Component/SubTitle";
import Btn from "../../Component/Btn";

const Projects = ({myProject}) => {

console.log(myProject)

  return (
    <div id="Project" className=" py-20 bg-[#cbf1c349]">
      <div className="max-w-7xl m-auto text-center space-y-2 px-3">
        <SubTitle Title={"My Project"}></SubTitle>
        <h2 className="text-4xl text-[#25292d] font-bold">
         My Recent <GradintText text={"Projects"}></GradintText>
        </h2>
        <p className=" font1 m-auto font-medium md:max-w-[50%]">
        Explore a few of my recent projects below. Each one showcases my skills and passion for creating innovative digital solutions.
        </p>
      </div>

      <div className="max-w-7xl m-auto px-3 text-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {
          myProject?.map((project, i )=> 

          <div key={i} className="mt-5 mb-5 relative abc bg-[#ffffff] border border-gray-200 hover:border-[#F86161] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="p-3 m-auto" src={project?.image} alt="product image" />
          <div className="px-5 pb-7 space-y-2 ">
            <h5 className="text-2xl font-semibold text-center tracking-tight text-gray-900 dark:text-white">
             {project?.name}
            </h5>



            <div className="flex items-center justify-evenly">

              <Link to={project?.liveLink}>
                <Btn btnName="Live Link" ></Btn>
              </Link>
              <Link to={project.githubLink}>
                <Btn btnName={"GitHub"} ></Btn>
              </Link>
            </div>
          </div>
        </div>
          )
        }

      </div>
    </div>
  );
};

export default Projects;
