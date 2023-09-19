import myPic from "../assets/greyscale-dark.png";
import "./Hero.css";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import "animate.css";

const Hero = () => {
   return (
      <div className="">
         {/* MY IAMGE SECTION */}
         <div className="grid grid-cols-1 md:grid-cols-2 hero xl:h-[90vh]">
            <div className="flex col-span-1 items-center xl:h-[90vh] relative ">
               <div className="flex justify-between md:w-[25vw] h-[90vh] ">
                  <img
                     src={myPic}
                     alt=""
                     className="md:absolute h-[90vh] transform-none object-contain object-bottom xl:left-10"
                  />
                  <svg
                     viewBox="0 0 240 875"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className=" max-h-[90vh] pb-24 md:max-h-[70vh] mt-[10vh] absolute invert min-w-fit right-0 xl:right-24"
                  >
                     <g id="Makayama ing Bie">
                        <g id="ka">
                           <path
                              id="Vector"
                              d="M53.3901 229C90.0701 192.32 149.54 192.32 186.22 229"
                              stroke="black"
                              stroke-width="16"
                              stroke-miterlimit="10"
                           />
                           <path
                              id="Vector_2"
                              d="M155.75 162.49C133.57 153.22 107.85 152.41 83.8604 162.26"
                              stroke="black"
                              stroke-width="16"
                              stroke-miterlimit="10"
                           />
                        </g>
                        <g id="ma1">
                           <path
                              id="Vector_3"
                              d="M135.17 58.5C135.17 30.61 157.78 8 185.67 8"
                              stroke="black"
                              stroke-width="16"
                              stroke-miterlimit="10"
                           />
                           <path
                              id="Vector_4"
                              d="M135.17 58.5C135.17 71.37 124.74 81.8 111.87 81.8C99.0003 81.8 88.5703 71.37 88.5703 58.5"
                              stroke="black"
                              stroke-width="16"
                              stroke-miterlimit="10"
                           />
                           <path
                              id="Vector_5"
                              d="M174.14 53.58C137.05 38.08 94.0502 36.73 53.9302 53.19"
                              stroke="black"
                              stroke-width="16"
                              stroke-miterlimit="10"
                           />
                        </g>
                        <g id="ma2">
                           <path
                              id="Vector_6"
                              d="M135.17 511.5C135.17 483.61 157.78 461 185.67 461"
                              stroke="black"
                              stroke-width="16"
                              stroke-miterlimit="10"
                           />
                           <path
                              id="Vector_7"
                              d="M135.17 511.5C135.17 524.37 124.74 534.8 111.87 534.8C99.0003 534.8 88.5703 524.37 88.5703 511.5"
                              stroke="black"
                              stroke-width="16"
                              stroke-miterlimit="10"
                           />
                           <path
                              id="Vector_8"
                              d="M174.14 506.58C137.05 491.08 94.0502 489.73 53.9302 506.19"
                              stroke="black"
                              stroke-width="16"
                              stroke-miterlimit="10"
                           />
                        </g>
                        <g id="ya1">
                           <g id="Group">
                              <path
                                 id="Vector_9"
                                 d="M74.0602 356.26C65.8302 356.26 59.1602 349.59 59.1602 341.36C59.1602 333.13 65.8302 326.5 74.0602 326.5C81.2802 326.62 87.0102 332.66 87.0102 339.89V340.24C87.0102 358.68 114.6 359.56 115.53 341.14C115.55 340.65 115.57 340.16 115.57 339.67V302.4"
                                 stroke="black"
                                 stroke-width="16"
                                 stroke-miterlimit="10"
                              />
                           </g>
                           <g id="Group_2">
                              <g id="Group_3">
                                 <path
                                    id="Vector_10"
                                    d="M115.56 337.86C126.85 338.05 135.8 347.5 135.8 358.79V359.34C135.8 388.17 178.92 389.54 180.38 360.75C180.42 359.99 180.44 359.22 180.44 358.45C180.44 333.79 160.45 313.81 135.8 313.81"
                                    stroke="black"
                                    stroke-width="16"
                                    stroke-miterlimit="10"
                                 />
                              </g>
                              <path
                                 id="Vector_11"
                                 d="M116.34 387.6C116.34 376.23 125.56 367.01 136.93 367.01"
                                 stroke="black"
                                 stroke-width="16"
                                 stroke-miterlimit="10"
                              />
                           </g>
                        </g>
                        <g id="ing">
                           <g id="Group_4">
                              <g id="Group_5">
                                 <path
                                    id="Vector_12"
                                    d="M22.9 689.06C14.67 689.06 8 682.39 8 674.16C8 665.93 14.67 659.3 22.9 659.3C30.12 659.42 35.85 665.46 35.85 672.69V673.04C35.85 691.48 63.44 692.36 64.37 673.94C64.39 673.45 64.41 672.96 64.41 672.47V635.2"
                                    stroke="black"
                                    stroke-width="16"
                                    stroke-miterlimit="10"
                                 />
                              </g>
                              <path
                                 id="Vector_13"
                                 d="M64.4102 628.79C64.4102 617.42 73.6302 608.2 85.0002 608.2"
                                 stroke="black"
                                 stroke-width="16"
                                 stroke-miterlimit="10"
                              />
                           </g>
                           <g id="Group_6">
                              <path
                                 id="Vector_14"
                                 d="M89.7202 635.2C110.1 635.2 126.62 651.72 126.62 672.1C126.62 692.48 110.1 709 89.7202 709"
                                 stroke="black"
                                 stroke-width="16"
                                 stroke-miterlimit="10"
                              />
                              <path
                                 id="Vector_15"
                                 d="M126.62 672.1C126.62 662.7 134.24 655.08 143.64 655.08C153.04 655.08 160.66 662.7 160.66 672.1"
                                 stroke="black"
                                 stroke-width="16"
                                 stroke-miterlimit="10"
                              />
                              <path
                                 id="Vector_16"
                                 d="M160.66 672.1C160.66 662.6 168.44 654.92 177.97 655.08C187.3 655.24 194.7 663.05 194.7 672.38V672.83C194.7 696.66 230.35 697.79 231.55 674C231.58 673.37 231.6 672.74 231.6 672.1C231.6 651.72 215.08 635.2 194.7 635.2"
                                 stroke="black"
                                 stroke-width="16"
                                 stroke-miterlimit="10"
                              />
                           </g>
                        </g>
                        <g id="bie">
                           <g id="Group_7">
                              <g id="Group_8">
                                 <path
                                    id="Vector_17"
                                    d="M190.1 841.47C181.87 841.47 175.2 834.8 175.2 826.57C175.2 818.34 181.87 811.71 190.1 811.71C197.32 811.83 203.05 817.87 203.05 825.1V825.45C203.05 843.89 230.64 844.77 231.57 826.35C231.59 825.86 231.61 825.37 231.61 824.88V787.61"
                                    stroke="black"
                                    stroke-width="16"
                                    stroke-miterlimit="10"
                                 />
                              </g>
                              <g id="Group_9">
                                 <g id="Group_10">
                                    <path
                                       id="Vector_18"
                                       d="M93.3799 823.07C104.67 823.26 113.62 832.71 113.62 844V844.55C113.62 873.38 156.74 874.75 158.2 845.96C158.24 845.2 158.26 844.43 158.26 843.66C158.26 819 138.27 799.02 113.62 799.02"
                                       stroke="black"
                                       stroke-width="16"
                                       stroke-miterlimit="10"
                                    />
                                 </g>
                                 <path
                                    id="Vector_19"
                                    d="M94.1597 872.82C94.1597 861.45 103.38 852.23 114.75 852.23"
                                    stroke="black"
                                    stroke-width="16"
                                    stroke-miterlimit="10"
                                 />
                              </g>
                           </g>
                           <g id="Group_11">
                              <path
                                 id="Vector_20"
                                 d="M41.93 864.15C60.669 864.15 75.86 848.959 75.86 830.22C75.86 811.481 60.669 796.29 41.93 796.29C23.191 796.29 8 811.481 8 830.22C8 848.959 23.191 864.15 41.93 864.15Z"
                                 stroke="black"
                                 stroke-width="16"
                                 stroke-miterlimit="10"
                              />
                              <path
                                 id="Vector_21"
                                 d="M65.5298 790.05C69.7498 782.74 79.0998 780.23 86.4198 784.45"
                                 stroke="black"
                                 stroke-width="16"
                                 stroke-miterlimit="10"
                              />
                           </g>
                        </g>
                     </g>
                  </svg>
               </div>
               <div className="h-[90vh] relative"></div>
            </div>
            <div className="col-span-1 h-screen md:h-[70vh]">
               <div className="flex items-center h-[70vh] px-10 gap-10">
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
               {/* ABOUT-SECTION */}
               <div className="xl:h-[20vh] xl:flex">
                  <div className="text-end mr-10 self-center 2xl:text-xl">
                     <p className="text-gray-800 font-normal  pl-52 md:pl-0">
                        Makayama ing Bie - bie mangasikanan, kababan-a-lub,
                        ampong kapibabatan
                     </p>
                     <p className="text-gray-800 font-medium ">-Greg</p>
                  </div>
                  <ul className="flex justify-end pr-10 xl:pr-0">
                     <li className="box box-1 text-white relative">
                        <h1 className="icons">
                           <FaFacebookF className="icon" />
                        </h1>
                     </li>
                     <li className="box box-2 text-white relative ">
                        <h1 className="icons">
                           <FaLinkedinIn className="icon" />
                        </h1>
                     </li>
                     <li className="box box-3 text-white relative">
                        <h1 className="icons">
                           <FaGithub className="icon" />
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
