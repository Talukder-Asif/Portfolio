import Btn from "../../Component/Btn";
import GradintText from "../../Component/GradintText";
import bannerImg from "/src/assets/hero image 1.png"
import letsGo from "/src/assets/letsGo.svg"
const Banner = () => {
  return (
    <div className="bg-gradient-to-l to-[#ffffff] from-[#cbf1c349]">
      <div className="hero md:min-h-[500px] max-w-7xl m-auto relative">
        <div className="hero-content flex-col-reverse md:flex-row-reverse">
          <div className="md:w-[400px] ">
          <img
            src={bannerImg}
            className=" max-h-64 -mb-4 md:mb-0 md:max-h-96 md:absolute bottom-0 right-5 lg:right-32"
          />
          </div>
          <div className="">
            <h1 className=" text-3xl lg:text-5xl text-[#25292D] font-bold"><span className="text-3xl">Hey there,</span><br /> I&apos;m <GradintText text={"Asif Talukder."}></GradintText><br />A Frontend Web Developer</h1>
            <p className="py-6 md:max-w-[80%] font1 font-medium">
            With a love for crafting beautiful and functional web experiences, I bring creativity and precision to every line of code.
            </p>
            <div className=" flex gap-5">
            <Btn btnName={'Resume'}></Btn>
            <button className="flex gap-3 items-center font-semibold"><img className="w-10 md:w-12" src={letsGo} alt="" />How It Work</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
