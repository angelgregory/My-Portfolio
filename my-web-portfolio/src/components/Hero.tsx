import myPic from "../assets/greyscale-dark.png";
import "./Hero.css";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import "animate.css";
import myLogo from "../assets/logo-ag.svg";

const Hero = () => {
   return (
      <div className="">
         {/* MY IAMGE SECTION */}
         <div className="grid grid-cols-1 md:grid-cols-2 hero xl:h-[90vh]">
            <div className="flex col-span-1 items-center xl:h-[90vh] relative px-10">
               <div className=" md:w-[25vw] h-[90vh]">
                  <div className="container">
                     <div className="absolute bottom-0 animate__animated animate__fadeInUpBig">
                        <img
                           src={myPic}
                           alt=""
                           className=" h-[80vh] object-contain xl:left-10 z-10 "
                        />
                     </div>
                     <div className="">
                        <div className="absolute blocks block-1 animate__animated animate__bounceInUp "></div>
                        <div className="absolute blocks block-2 animate_animated animate__bounceIn "></div>
                        <div className="absolute blocks block-3 animate__animated animate__bounceInDown "></div>
                        <div className="absolute blocks block-4 animate__animated animate__bounceInLeft "></div>
                     </div>
                  </div>
                  <svg
                     viewBox="0 0 240 875"
                     overflow="visible"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className=" max-h-[90vh] pb-[18vh] md:max-h-[70vh] mt-[10vh] absolute invert min-w-fit right-0 xl:right-28 z-10 fade-in"
                  >
                     <g id="makayama" clip-path="url(#clip0_72_103)">
                        <g id="Ma1_1_" className="ma">
                           <g id="Group">
                              <path
                                 id="Vector_2_1_"
                                 d="M23.42 64.71C26.81 79.05 35.13 90.87 49.58 90.87C64.03 90.87 75.74 79.16 75.74 64.71C75.74 33.39 101.13 8 132.46 8"
                                 stroke="black"
                                 stroke-width="16"
                                 stroke-miterlimit="10"
                              />
                           </g>
                           <g id="Group_1_">
                              <g id="Group_2_1_">
                                 <path
                                    id="Vector_3_1_"
                                    d="M153.99 8C183.89 8 208.12 32.24 208.12 62.13C208.12 63.06 208.1 63.99 208.05 64.92C206.28 99.83 153.99 98.16 153.99 63.21V62.55C153.99 16.55 8 58.32 8 58.32"
                                    stroke="black"
                                    stroke-width="16"
                                    stroke-miterlimit="10"
                                 />
                              </g>
                              <path
                                 id="Vector_4_1_"
                                 d="M155.36 72.52C141.57 72.52 130.39 83.7 130.39 97.49"
                                 stroke="black"
                                 stroke-width="16"
                                 stroke-miterlimit="10"
                              />
                           </g>
                        </g>
                        <g id="Ka_1_" className="ka">
                           <path
                              id="Vector_5_1_"
                              d="M8 264.97C63.26 209.71 152.86 209.71 208.13 264.97"
                              stroke="black"
                              stroke-width="16"
                              stroke-miterlimit="10"
                           />
                           <path
                              id="Vector_6_1_"
                              d="M162.22 164.76C128.8 150.79 90.06 149.57 53.91 164.41"
                              stroke="black"
                              stroke-width="16"
                              stroke-miterlimit="10"
                           />
                        </g>
                        <g id="ea_1_" className="ya">
                           <g id="Group_3_1_">
                              <g id="Group_4_1_">
                                 <path
                                    id="Vector_7_1_"
                                    d="M100.66 350.42C114.35 350.65 125.2 362.1 125.2 375.8V376.46C125.2 411.41 177.49 413.08 179.26 378.17C179.31 377.25 179.33 376.32 179.33 375.38C179.33 345.48 155.09 321.25 125.2 321.25"
                                    stroke="black"
                                    stroke-width="16"
                                    stroke-miterlimit="10"
                                 />
                              </g>
                              <path
                                 id="Vector_8_1_"
                                 d="M101.6 410.75C101.6 396.96 112.78 385.78 126.57 385.78"
                                 stroke="black"
                                 stroke-width="16"
                                 stroke-miterlimit="10"
                              />
                           </g>
                           <g id="Group_5_1_">
                              <path
                                 id="Vector_9_1_"
                                 d="M51.69 377.74C43.46 377.74 36.79 371.07 36.79 362.84C36.79 354.61 43.46 347.98 51.69 347.98C58.91 348.1 64.64 354.14 64.64 361.37V361.72C64.64 380.16 92.23 381.04 93.16 362.62C93.18 362.13 93.2 361.64 93.2 361.15V323.88"
                                 stroke="black"
                                 stroke-width="16"
                                 stroke-miterlimit="10"
                              />
                           </g>
                        </g>
                        <g id="ma2_1_" className="ma2">
                           <path
                              id="Vector_11_1_"
                              d="M23.42 523.75C26.81 538.09 35.13 549.91 49.58 549.91C64.03 549.91 75.74 538.2 75.74 523.75C75.74 492.43 101.13 467.04 132.45 467.04"
                              stroke="black"
                              stroke-width="16"
                              stroke-miterlimit="10"
                           />
                           <g id="Group_6_1_">
                              <g id="Group_7_1_">
                                 <path
                                    id="Vector_12_1_"
                                    d="M153.99 467.04C183.89 467.04 208.12 491.28 208.12 521.17C208.12 522.1 208.1 523.03 208.05 523.96C206.28 558.87 153.99 557.2 153.99 522.25V521.59C153.99 475.59 8 517.36 8 517.36"
                                    stroke="black"
                                    stroke-width="16"
                                    stroke-miterlimit="10"
                                 />
                              </g>
                              <path
                                 id="Vector_13_1_"
                                 d="M155.36 531.55C141.57 531.55 130.39 542.73 130.39 556.52"
                                 stroke="black"
                                 stroke-width="16"
                                 stroke-miterlimit="10"
                              />
                           </g>
                        </g>
                        <g id="ing_1_" className="ing">
                           <g id="Group_8_1_">
                              <g id="Group_9_1_">
                                 <path
                                    id="Vector_14_1_"
                                    d="M21.34 685.19C13.97 685.19 8 679.22 8 671.85C8 664.48 13.97 658.55 21.34 658.55C27.8 658.66 32.93 664.07 32.93 670.53V670.84C32.93 687.34 57.62 688.13 58.45 671.65C58.47 671.21 58.48 670.78 58.48 670.33V636.97"
                                    stroke="black"
                                    stroke-width="16"
                                    stroke-miterlimit="10"
                                 />
                              </g>
                              <path
                                 id="Vector_15_1_"
                                 d="M58.48 631.25C58.48 621.07 66.73 612.82 76.91 612.82"
                                 stroke="black"
                                 stroke-width="16"
                                 stroke-miterlimit="10"
                              />
                           </g>
                           <g id="Group_10_1_">
                              <path
                                 id="Vector_16_1_"
                                 d="M81.14 636.99C99.38 636.99 114.17 651.78 114.17 670.02C114.17 688.26 99.38 703.05 81.14 703.05"
                                 stroke="black"
                                 stroke-width="16"
                                 stroke-miterlimit="10"
                              />
                              <path
                                 id="Vector_18_1_"
                                 d="M114.16 670.01C114.16 661.6 120.98 654.78 129.39 654.78C137.8 654.78 144.62 661.6 144.62 670.01H144.63C144.63 661.51 151.59 654.64 160.13 654.78C168.48 654.92 175.1 661.91 175.1 670.26V670.66C175.1 691.98 207 693 208.08 671.7C208.11 671.14 208.12 670.57 208.12 670C208.12 651.76 193.33 636.97 175.09 636.97"
                                 stroke="black"
                                 stroke-width="16"
                                 stroke-miterlimit="10"
                              />
                           </g>
                        </g>
                        <g id="bie_1_" className="bie">
                           <g id="Group_11_1_">
                              <g id="Group_12_1_">
                                 <path
                                    id="Vector_19_1_"
                                    d="M170.98 812.21C163.61 812.21 157.64 806.24 157.64 798.87C157.64 791.5 163.61 785.57 170.98 785.57C177.44 785.68 182.57 791.09 182.57 797.55V797.86C182.57 814.36 207.26 815.15 208.09 798.67C208.11 798.23 208.12 797.8 208.12 797.35V764"
                                    stroke="black"
                                    stroke-width="16"
                                    stroke-miterlimit="10"
                                 />
                              </g>
                              <g id="Group_13_1_">
                                 <g id="Group_14_1_">
                                    <path
                                       id="Vector_20_1_"
                                       d="M84.42 795.74C94.53 795.91 102.54 804.36 102.54 814.47V814.96C102.54 840.76 141.14 841.99 142.44 816.22C142.47 815.54 142.49 814.85 142.49 814.16C142.49 792.09 124.6 774.21 102.54 774.21"
                                       stroke="black"
                                       stroke-width="16"
                                       stroke-miterlimit="10"
                                    />
                                 </g>
                                 <path
                                    id="Vector_21_1_"
                                    d="M85.11 840.26C85.11 830.08 93.36 821.83 103.54 821.83"
                                    stroke="black"
                                    stroke-width="16"
                                    stroke-miterlimit="10"
                                 />
                              </g>
                           </g>
                           <g id="Group_15_1_">
                              <path
                                 id="Vector_22_1_"
                                 d="M38.36 832.49C55.13 832.49 68.72 818.9 68.72 802.13C68.72 785.36 55.13 771.77 38.36 771.77C21.59 771.77 8 785.36 8 802.13C8 818.9 21.59 832.49 38.36 832.49Z"
                                 stroke="black"
                                 stroke-width="16"
                                 stroke-miterlimit="10"
                              />
                              <path
                                 id="Vector_23_1_"
                                 d="M59.49 766.18C63.27 759.63 71.64 757.39 78.18 761.17"
                                 stroke="black"
                                 stroke-width="16"
                                 stroke-miterlimit="10"
                              />
                           </g>
                        </g>
                     </g>
                  </svg>
                  <div className="relative h-[90vh] w-full h">
                     <div className="inter-line hidden xl:block">
                        <div className="absolute line-v md:left-[25vw] xl:left-[30vw] left-[60vw]"></div>
                        <div className="absolute line-h xl:bottom-[18vh] bottom-[20vh]"></div>
                     </div>
                  </div>
               </div>
               <div className="h-[90vh] relative"></div>
            </div>
            <div className="col-span-1 h-screen md:h-[70vh]">
               <div className="flex items-center h-[70vh] px-10 gap-10">
                  <div className="text-end self-center">
                     <div className="text-rose-800 font-bold">
                        <div className="flex justify-end">
                           <p className="self-end tracking-[0.25rem] text-3xl">
                              • • • •
                           </p>
                           <img src={myLogo} alt="" className="h-[10vh]" />
                        </div>
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
                     <br />
                  </div>
               </div>
               {/* ABOUT-SECTION */}
               <div className="xl:h-[20vh] xl:flex">
                  <div className="text-end mr-10 self-center 2xl:text-xl">
                     <p className="text-gray-800 font-normal  pl-52 md:pl-0">
                        Makayama ing Bie - A healthy, humble, and prudent life
                     </p>
                     <p className="text-gray-800 font-medium ">-Greg</p>
                  </div>
                  <ul className="flex justify-end pr-10 xl:pr-0 text-white">
                     <li className="box box-1  relative">
                        <h1 className="icons">
                           <FaGithub className="icon" />
                        </h1>
                     </li>
                     <li className="box box-2  relative ">
                        <h1 className="icons">
                           <FaLinkedinIn className="icon" />
                        </h1>
                     </li>
                     <li className="box box-3  relative">
                        <h1 className="icons">
                           <FaFacebookF className="icon" />
                        </h1>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
