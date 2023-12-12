import GradintText from "../../Component/GradintText";
import SubTitle from "../../Component/SubTitle";
import tick from "/src/assets/tick.svg";
import "/src/index.css"
import Lottie from "lottie-react";
import skillsLottie from "/src/assets/Lottie/Skills.json"
const About = () => {
  return (
    <div className="py-20 max-w-7xl m-auto">
      <div className="hero md:min-h-[500px] max-w-7xl m-auto relative">
        <div className="hero-content flex-col-reverse md:flex-row">
          <div className="md:w-5/12 ">



            <Lottie animationData={skillsLottie} loop={true} />;




          </div>
          <div className="md:w-7/12">
            <SubTitle Title={"About Me"}></SubTitle>

            <h1 className=" text-2xl mt-2 lg:text-4xl text-[#25292D] font-bold">
              My <GradintText text={"Skills"}></GradintText>
            </h1>
            <p className="py-2 font1 font-medium">
            As a dedicated Frontend Web Developer, I&apos;ve honed a versatile skill set to bring digital ideas to life. Here&apos;s a glimpse into my toolkit:
            </p>


            <div className="space-y-2">
              <div className="card w-[90%] lg:w-100% md:ml-0 m-auto md:card-side p-5 bg-base-100 border border-[#20993061] hover:border-[#209931] hover:scale-105 rounded">
                <figure>
                  <img src={tick} alt="Movie" />
                </figure>
                <div className="md:pl-5">
                  <h2 className="text-lg text-[#25292D] font-bold">
                  Programming Languages:
                  </h2>
                  <p className="text-[#666] text-sm">
                  JavaScript, HTML, CSS, C, C++
                  </p>
                </div>
              </div>

              
              <div className="card w-[90%] lg:w-100% md:ml-0 m-auto md:card-side p-5 bg-base-100 border-2 border-[#20993061] hover:border-[#209931] hover:scale-105 rounded">
                <figure>
                  <img src={tick} alt="Movie" />
                </figure>
                <div className="md:pl-5">
                  <h2 className="text-lg text-[#25292D] font-bold">
                  Web Development:
                  </h2>
                  <p className="text-[#666] text-sm">
                  React JS, Node.js, Express.js
                  </p>
                </div>
              </div>


              <div className="card w-[90%] lg:w-100% md:ml-0 m-auto md:card-side p-5 bg-base-100 border-2 border-[#20993061] hover:border-[#209931] hover:scale-105 rounded">
                <figure>
                  <img src={tick} alt="Movie" />
                </figure>
                <div className="md:pl-5">
                  <h2 className="text-lg text-[#25292D] font-bold">
                  UI Framework:
                  </h2>
                  <p className="text-[#666] text-sm">
                  Tailwind CSS
                  </p>
                </div>
              </div>


              <div className="card w-[90%] lg:w-100% md:ml-0 m-auto md:card-side p-5 bg-base-100 border-2 border-[#20993061] hover:border-[#209931] hover:scale-105 rounded">
                <figure>
                  <img src={tick} alt="Movie" />
                </figure>
                <div className="md:pl-5">
                  <h2 className="text-lg text-[#25292D] font-bold">
                  Databases:
                  </h2>
                  <p className="text-[#666] text-sm">
                  Firebase, MongoDB
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
