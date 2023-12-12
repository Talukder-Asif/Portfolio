import { Link } from "react-router-dom";
import GradintText from "../../Component/GradintText";
import SubTitle from "../../Component/SubTitle";
import pizza from "/src/assets/Pizza.png";
import star from "/src/assets/Star 6.svg";
import clock from "/src/assets/clock 1.svg";
import Btn from "../../Component/Btn";
import { BsCart2 } from "react-icons/bs";

const PopularProduct = () => {
  return (
    <div className=" py-20 bg-[#ece0e2]">
      <div className="max-w-7xl m-auto text-center space-y-2 px-3">
        <SubTitle Title={"Our Menu"}></SubTitle>
        <h2 className="text-4xl text-[#25292d] font-bold">
          Our popular Tranding <GradintText text={"Product"}></GradintText>
        </h2>
        <p className=" font1 m-auto font-medium md:max-w-[50%]">
          We connect buyers and sellers of natural, organic, environmentally
          sound products. We find the best suppliers and makers of natural and
          organic products.
        </p>
      </div>

      <div className="max-w-7xl m-auto px-3 text-center md:grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        <div className="mt-5 mb-5 relative abc bg-[#ffffff] border border-gray-200 hover:border-[#F86161] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="p-3 rounded-full m-auto" src={pizza} alt="product image" />
          <div className="px-5 pb-7 space-y-2 ">
            <h5 className="text-2xl font-semibold text-center tracking-tight text-gray-900 dark:text-white">
              Vegetarian Pizza
            </h5>

            <div className="flex justify-start gap-5">
            <div className="flex justify-start gap-2 items-center">
            <img className="inline-block w-5" src={star} alt="" />
            <p className="font-semibold">4.5</p>
             </div>
            <div className="flex justify-start gap-2 items-center">
            <img className="inline-block w-5" src={clock} alt="" />
            <p className=" text-[#25292D] font-medium ">10-30 MIN</p>
             </div>


            </div>

            <div className="flex items-center justify-between">
              <p className=" font-bold">
                <del>$40.00</del>
                <span className="ml-1 text-F86161">$30.00</span>
              </p>
              <Link>
                <Btn btnName={<BsCart2 />} ></Btn>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-5 relative abc bg-[#ffffff] border border-gray-200 hover:border-[#F86161] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="p-3 rounded-full m-auto" src={pizza} alt="product image" />
          <div className="px-5 pb-7 space-y-2 ">
            <h5 className="text-2xl font-semibold text-center tracking-tight text-gray-900 dark:text-white">
              Vegetarian Pizza
            </h5>

            <div className="flex justify-start gap-5">
            <div className="flex justify-start gap-2 items-center">
            <img className="inline-block w-5" src={star} alt="" />
            <p className="font-semibold">4.5</p>
             </div>
            <div className="flex justify-start gap-2 items-center">
            <img className="inline-block w-5" src={clock} alt="" />
            <p className=" text-[#25292D] font-medium ">10-30 MIN</p>
             </div>


            </div>

            <div className="flex items-center justify-between">
              <p className=" font-bold">
                <del>$40.00</del>
                <span className="ml-1 text-F86161">$30.00</span>
              </p>
              <Link>
                <Btn btnName={<BsCart2 />} ></Btn>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-5 relative abc bg-[#ffffff] border border-gray-200 hover:border-[#F86161] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="p-3 rounded-full m-auto" src={pizza} alt="product image" />
          <div className="px-5 pb-7 space-y-2 ">
            <h5 className="text-2xl font-semibold text-center tracking-tight text-gray-900 dark:text-white">
              Vegetarian Pizza
            </h5>

            <div className="flex justify-start gap-5">
            <div className="flex justify-start gap-2 items-center">
            <img className="inline-block w-5" src={star} alt="" />
            <p className="font-semibold">4.5</p>
             </div>
            <div className="flex justify-start gap-2 items-center">
            <img className="inline-block w-5" src={clock} alt="" />
            <p className=" text-[#25292D] font-medium ">10-30 MIN</p>
             </div>


            </div>

            <div className="flex items-center justify-between">
              <p className=" font-bold">
                <del>$40.00</del>
                <span className="ml-1 text-F86161">$30.00</span>
              </p>
              <Link>
                <Btn btnName={<BsCart2 />} ></Btn>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-5 relative abc bg-[#ffffff] border border-gray-200 hover:border-[#F86161] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="p-3 rounded-full m-auto" src={pizza} alt="product image" />
          <div className="px-5 pb-7 space-y-2 ">
            <h5 className="text-2xl font-semibold text-center tracking-tight text-gray-900 dark:text-white">
              Vegetarian Pizza
            </h5>

            <div className="flex justify-start gap-5">
            <div className="flex justify-start gap-2 items-center">
            <img className="inline-block w-5" src={star} alt="" />
            <p className="font-semibold">4.5</p>
             </div>
            <div className="flex justify-start gap-2 items-center">
            <img className="inline-block w-5" src={clock} alt="" />
            <p className=" text-[#25292D] font-medium ">10-30 MIN</p>
             </div>


            </div>

            <div className="flex items-center justify-between">
              <p className=" font-bold">
                <del>$40.00</del>
                <span className="ml-1 text-F86161">$30.00</span>
              </p>
              <Link>
                <Btn btnName={<BsCart2 />} ></Btn>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PopularProduct;
