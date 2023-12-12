import GradintText from "../../Component/GradintText";
import SubTitle from "../../Component/SubTitle";

const Study = () => {
  return (
    <div id="Education" className="max-w-7xl py-10 m-auto">
      <div className="text-center">
        <SubTitle Title={"My Education"}></SubTitle>
        <h1 className=" text-2xl mt-2 lg:text-4xl text-[#25292D] font-bold">
          My <GradintText text={"Educational"}></GradintText> journey
        </h1>
        <p className="py-6 font1 m-auto max-w-[95%] md:max-w-[70%] lg:max-w-[60%] font-medium">
        My education has been a catalyst for exploring the endless possibilities within the realm of computer science, instilling in me a passion for continuous learning and a drive to contribute to the ever-evolving tech landscape.
        </p>
      </div>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-[#1f9f3b]"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start  md:text-end mb-10">
            <time className="font-mono italic">2018</time>
            <div className="text-lg font-black">Passed SSC exam in science</div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5  text-[#1f9f3b]"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2020</time>
            <div className="text-lg font-black">Passed HSC exam in science</div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5  text-[#1f9f3b]"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono  italic">2022</time>
            <div className="text-lg font-black">
              Start studying BSc in <br /> Computer Science and Engineering
            </div>
            I will pass BSc in CSE in 2026
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-[#1f9f3b]"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2023</time>
            <div className="text-lg font-black">
              Complete web development course <br /> from ProgrammingHero
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Study;
