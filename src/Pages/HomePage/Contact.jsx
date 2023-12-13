/* eslint-disable no-unused-vars */
import GradintText from "../../Component/GradintText";
import SubTitle from "../../Component/SubTitle";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {

    const form = useRef();


    const handelEmail = (e) =>{
        e.preventDefault();



        emailjs.sendForm('service_l7g49no', 'template_e0znv8jk', form.current, 'n6jQjj4qomMi52ltk')
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "We have received your message",
          showConfirmButton: false,
          timer: 1500
        });
      }, (error) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${error.text}`,
            showConfirmButton: false,
            timer: 1500
          });
      });


        // const form = e.target;
        // const name = form.Name.value;
        // const email = form.Email.value;
        // const subject = form.Subject.value;
        // const number = form.Number.value;
        // const details = form.Details.value;
        // console.log(name, email, subject, number, details)
    }



  return (
    <div id="Contact" className="max-w-7xl py-10 m-auto">
      <div className="text-center">
        <SubTitle Title={"Contact Me"}></SubTitle>
        <h1 className=" text-2xl mt-2 lg:text-4xl text-[#25292D] font-bold">
          Get in <GradintText text={"Touch"}></GradintText>
        </h1>
        <p className="py-6 font1 m-auto max-w-[95%] md:max-w-[70%] lg:max-w-[60%] font-medium">
          You can contact me if you have any questions about me or need any kind
          of help
        </p>
      </div>

      <div className="flex flex-col w-full md:flex-row">
        <div className="grid flex-grow md:w-[40%] card rounded-box place-items-center">
<div>
            <div className="card w-[90%] lg:w-100% md:ml-0 m-auto card-side p-2 md:p-5 bg-base-100  rounded  ">
            <div className="w-[10%]">
              <IoCallOutline className="text-5xl  bg-gradient-to-r from-[#b1edd0] to-[#cdf1c2] p-2 text-[#20820b] rounded-full" />
            </div>
            <div className="pl-10 md:pl-5">
              <h2 className="text-lg text-[#25292D] font-bold">Phone</h2>
              <p className="text-[#666] text-sm">01885049289</p>
            </div>
          </div>

          <div className="card w-[90%] lg:w-100% md:ml-0 m-auto card-side p-2 md:p-5 bg-base-100  rounded  ">
            <div className="w-[10%]">
              <MdOutlineMarkEmailRead className="text-5xl  bg-gradient-to-r from-[#b1edd0] to-[#cdf1c2] p-2 text-[#20820b] rounded-full" />
            </div>
            <div className="pl-10 md:pl-5">
              <h2 className="text-lg text-[#25292D] font-bold">Email</h2>
              <p className="text-[#666] text-sm">
                asif.talukder.aj.10@gmail.com
              </p>
            </div>
          </div>

          <div className="card w-[90%] lg:w-100% md:ml-0 m-auto card-side p-2 md:p-5 bg-base-100  rounded  ">
            <div className="w-[10%]">
              <IoLocationOutline className="text-5xl  bg-gradient-to-r from-[#b1edd0] to-[#cdf1c2] p-2 text-[#20820b] rounded-full" />
            </div>
            <div className="pl-10 md:pl-5">
              <h2 className="text-lg text-[#25292D] font-bold">Address</h2>
              <p className="text-[#666] text-sm">
                Masumpur, Sirajganj, Bangladesh
              </p>
            </div>
          </div>
</div>
        </div>
        <div className="divider divide-blue-200 md:divider-horizontal">OR</div>
        <div className="grid flex-grow md:w-[58%] card rounded-box place-items-center">



          
          




        

<form ref={form} onSubmit={handelEmail} className="w-[80%] mx-auto">

  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="user_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1dbf73] focus:outline-none focus:ring-0 focus:border-[#1dbf73] peer" placeholder=" " required />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1dbf73] peer-focus:dark:text-[#1dbf73] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your name</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="email"  name="user_email" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1dbf73] focus:outline-none focus:ring-0 focus:border-[#1dbf73] peer"  placeholder=" " required />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1dbf73] peer-focus:dark:text-[#1dbf73] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
    </div>
  </div>
  
  <div className="relative z-0 w-full mb-5 group">
      <textarea name="message" id="floating_email" className="block min-h-[150px] py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1dbf73] focus:outline-none focus:ring-0 focus:border-[#1dbf73] peer" placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1dbf73] peer-focus:dark:text-[#1dbf73] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Details</label>
  </div>

  <button className="bg-gradient-to-r from-[#1dbf73] to-[#217c00] hover:from-[#217c00] hover:to-[#1dbf73] text-white px-3 py-2 md:px-4 md:py-3 text-sm md:text-base rounded-lg "
 type="submit">Submit</button>
</form>













        </div>
      </div>
    </div>
  );
};

export default Contact;
