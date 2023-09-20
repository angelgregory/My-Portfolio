
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "animate.css";
const Navbar = () => {
   const navLists = ["ABOUT", "EDUCATION", "SKILLS", "PROJECT", "CONTACT"];
   const [nav, setNav] = useState(true);

   function navHandler() {
      setNav(!nav);
   }
   return (
      <div>
         <header className=" text-rose-800 font-bold">
            <nav className="flex h-[10vh]  px-10 items-center justify-end animate__animated animate__fadeInDown animate__faster ">
               <div className="hidden md:flex gap-8 ">
                  {navLists.map((item, index) => (
                     <ul key={index} className="list-item   hover:underline ">
                        <li>{item}</li>
                     </ul>
                  ))}
               </div>
               <div onClick={navHandler} className="z-10 block md:hidden ">
                  {!nav ? (
                     <AiOutlineClose size={20} />
                  ) : (
                     <AiOutlineMenu size={20} />
                  )}
                  <div
                     className={
                        !nav
                           ? "fixed pt-16 right-0 top-0 text-right animate__animated animate__fadeInRight animate__faster"
                           : "fixed right-[100%] "
                     }
                  >
                     {navLists.map((item, index) => (
                        <ul key={index} className="py-8 pr-10">
                           <li className="">{item}</li>
                        </ul>
                     ))}
                  </div>
               </div>
            </nav>
         </header>
      </div>
   );
};

export default Navbar;
