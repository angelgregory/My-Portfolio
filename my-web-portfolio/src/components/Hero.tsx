import { useState } from "react";
import Navbar from "./Navbar";
import makayama from "../assets/makayama.svg";
import "./Hero.css";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Hero = () => {
   return (
      <div className="">
         <Navbar />
         <div className="grid grid-cols-1 md:grid-cols-3 hero h-[90vh]">
            <div className="col-span-1 h-[90vh]">asdasdasd</div>
            <div className="col-span-2 h-screen md:h-[90vh]">
               <div className="flex items-center h-[75vh] px-10 gap-10">
                  <div>
                     <img src={makayama} alt="" className="" />
                  </div>
                  <div className="text-end self-center">
                     <div className="text-rose-800 font-bold">
                        <h2 className="text-3xl">ANGEL GREGORY</h2>
                        <h1 className="text-5xl">LANSANGAN</h1>
                     </div>
                     <p className="text-gray-800 font-bold text-3xl">
                        #MyPortfolio
                     </p>

                     <p className="text-gray-800 font-normal text-xl">
                        <br />A kapampangan Software Engineer - passionate in
                        creating user-friendly and visually appealing websites
                        and applications. Front-end development allows me to
                        combine my creativity with technical skills to bring
                        designs to life and provide a great user experience.
                     </p>
                  </div>
               </div>
               <div className="md:flex justify-end gap-10 md:h-[15vh]">
                  <div className="align-middle text-end self-center px-10">
                     <p className="text-gray-800 font-normal text-xl">
                        Makayama ing Bie - bie mangasikanan, kababan-a-lub,
                        ampong kapibabatan
                     </p>
                     <br />
                     <p className="text-gray-800 font-medium text-xl">-Greg</p>
                  </div>
                  <div className="flex justify-end">
                     <ul className="flex gap-1">
                        <li className="box box-1 text-white flex  justify-center py-8">
                           <FaFacebookF size={100} />
                        </li>
                        <li className="box box-2 text-white flex  justify-center py-8">
                           <FaLinkedinIn size={100} />
                        </li>
                        <li className="box box-3 text-white flex  justify-center py-8">
                           <FaGithub size={100} />
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
