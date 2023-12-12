import GradintText from "./GradintText";

// eslint-disable-next-line react/prop-types
const SubTitle = ({Title}) => {
    return (
        <div className='font2 text-black text-xl bg-gradient-to-r from-[#b1edd0] to-[#cdf1c2] inline-block py-2 px-5 rounded-md'>
            <GradintText text={Title} ></GradintText>
        </div>
    );
};

export default SubTitle;