/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Btn = ({url, btnName}) => {
  return (
    <Link to={url}>
        <button
      type="button"
      className="bg-gradient-to-r from-[#1dbf73] to-[#217c00] hover:from-[#217c00] hover:to-[#1dbf73] text-white px-3 py-2 md:px-4 md:py-3 text-sm md:text-base rounded-lg "
    >
      {btnName}
    </button>
    </Link>
  );
};

export default Btn;
