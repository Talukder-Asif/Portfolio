import GradintText from "../../Component/GradintText";
import SubTitle from "../../Component/SubTitle";
import tick from "/src/assets/WordPress_blue_logo.svg-min.png";
import tick2 from "/src/assets/free-code-forces-3628695-3029920.webp";
import tick3 from "/src/assets/MERN-Stack-Best-for-Developing-Web-Apps.webp";
import Lottie from "lottie-react";
import skillsLottie from "/src/assets/Lottie/Exp.json";
const MyExp = () => {
  return (
    <div id="Experiences" className="py-10 max-w-7xl m-auto">
      <div className="hero md:min-h-[500px] max-w-7xl m-auto relative">
        <div className="hero-content flex-col-reverse md:flex-row-reverse">
          <div className="md:w-5/12">
            <Lottie animationData={skillsLottie} loop={true} />;
          </div>
          <div className="md:w-7/12">
            <SubTitle Title={"My Experiences"}></SubTitle>
            <h1 className=" text-2xl mt-2 lg:text-4xl text-[#25292D] font-bold">
              My <GradintText text={"Professional"}></GradintText> journey
            </h1>
            <p className="py-6 font1 font-medium">
              These diverse experiences have not only enriched my technical
              skills but also made me a versatile and adaptable developer, ready
              to take on new challenges.
            </p>
            <div className="space-y-5">
              <div className="card w-[90%] lg:w-100% md:ml-0 m-auto md:card-side p-5 bg-base-100 border border-[#20993061] hover:border-[#209931] hover:scale-105 rounded ">
                <figure>
                  <img className="w-10" src={tick} alt="Movie" />
                </figure>
                <div className="md:pl-5">
                  <h2 className="text-lg text-[#25292D] font-bold">
                    Wordpress | Fiverr
                  </h2>
                  <p className="text-[#666] text-sm">
                    I have built many websites with WordPress between 2020 and
                    2022.
                  </p>
                </div>
              </div>

              <div className="card w-[90%] lg:w-100% md:ml-0 m-auto md:card-side p-5 bg-base-100 border border-[#20993061] hover:border-[#209931] hover:scale-105 rounded">
                <figure>
                  <img className="w-10" src={tick2} alt="Movie" />
                </figure>
                <div className="md:pl-5">
                  <h2 className="text-lg text-[#25292D] font-bold">
                    Competitive Programming | Codeforces
                  </h2>
                  <p className="text-[#666] text-sm">
                    I have solved over 250 Codeforce problems in the last 1 year
                    with C & C++.
                  </p>
                </div>
              </div>

              <div className="card w-[90%] lg:w-100% md:ml-0 m-auto md:card-side p-5 bg-base-100 border border-[#20993061] hover:border-[#209931] hover:scale-105 rounded  ">
                <img className="w-12 h-12 m-auto" src={tick3} alt="Movie" />
                <div className="md:pl-5">
                  <h2 className="text-lg text-[#25292D] font-bold">
                    Web Development | MERN
                  </h2>
                  <p className="text-[#666] text-sm">
                    I&apos;ve been learning MERN stack since 2023, I am not
                    saying I am a MERNstack developer, but I can say I am a
                    frontend developer with MERN stack knowledge.
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

export default MyExp;
