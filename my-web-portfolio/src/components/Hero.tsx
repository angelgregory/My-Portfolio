import { useState } from "react";
import makayama from "../assets/makayama.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Hero = () => {
   const navLists = ["About", "Education", "Skills", "Project", "Contact"];
   const [nav, setNav] = useState(true);

   function navHandler() {
      setNav(!nav);
   }

   return (
      <div>
         <header>
            <nav className="flex h-[10vh] px-10 items-center justify-end ">
               <div className="hidden md:flex gap-8">
                  {navLists.map((item, index) => (
                     <ul
                        key={index}
                        className="list-item  text-rose-800 font-bold"
                     >
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
                           ? "fixed right-0 top-0 text-right"
                           : "fixed right-[100%]"
                     }
                  >
                     {navLists.map((item, index) => (
                        <ul
                           key={index}
                           className="pt-16 pr-10 text-rose-800 font-bold"
                        >
                           <li>{item}</li>
                        </ul>
                     ))}
                  </div>
               </div>
            </nav>
         </header>
         <div className="hero h-[90vh]">
            <div></div>
         </div>
      </div>
   );
};

export default Hero;
