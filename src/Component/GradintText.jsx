/* eslint-disable react/prop-types */

const GradintText = ({text}) => {
    return (
        <span className=" bg-gradient-to-r from-[#217c00] to-[#1dbf73] text-transparent bg-clip-text ">
            {text}
        </span>
    );
};

export default GradintText;