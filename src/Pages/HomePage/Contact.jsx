import GradintText from "../../Component/GradintText";
import SubTitle from "../../Component/SubTitle";

const Contact = () => {
  return (
    <div className="max-w-7xl py-10 m-auto">
      <div className="text-center">
        <SubTitle Title={"Contact Me"}></SubTitle>
        <h1 className=" text-2xl mt-2 lg:text-4xl text-[#25292D] font-bold">
          Get in <GradintText text={"Touch"}></GradintText>
        </h1>
        <p className="py-6 font1 m-auto max-w-[95%] md:max-w-[70%] lg:max-w-[60%] font-medium">
        You can contact me if you have any questions about me or need any kind of help
        </p>
      </div>

      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow md:w-[49%] card rounded-box place-items-center">
        
        
        content
        
        
        </div> 
        <div className="divider lg:divider-horizontal">OR</div> 
        <div className="grid flex-grow md:w-[49%] card rounded-box place-items-center">content</div>
    </div>



    </div>
  );
};

export default Contact;
