import Btn from "../../Component/Btn";
import CV from "/src/assets/Resume.pdf"
const Navbar = () => {
  const manuItem = (
    <>
      <li><a className="hover:bg-transparent hover:underline decoration-[#1e9f3d]" href={"/"}>Home</a></li>
      <li><a className="hover:bg-transparent hover:underline decoration-[#1e9f3d]" href={"#about"}>About</a></li>
      <li><a className="hover:bg-transparent hover:underline decoration-[#1e9f3d]" href={"#Project"}>Project</a></li>
      <li><a className="hover:bg-transparent hover:underline decoration-[#1e9f3d]" href={"#Education"}>Education</a></li>
      <li><a className="hover:bg-transparent hover:underline decoration-[#1e9f3d]" href={"#Contact"}>Contact</a></li>
    </>
  );

  return (
    <div className='sticky top-0 bg-base-100 z-50 border-b-2 border-[#1e9f3d] '>
      <div className="navbar max-w-7xl m-auto px-5 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 items-center "
            >
              {manuItem}
            </ul>
          </div>
          <a className='logo text-2xl lg:text-3xl font-extrabold' href="/" >
            <span className='text-4xl lg:text-6xl text-[#217f04]'>A</span>sif <span className='hidden md:inline-block'>Talukder</span>
          </a>
        </div>
        
        <div className="navbar-end">
        <div className="hidden lg:flex"><ul className="menu menu-horizontal px-1 font1 font-semibold ">{manuItem}</ul></div>
          
        <a target="blank" href={CV} download><Btn btnName={'Resume'}></Btn></a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
