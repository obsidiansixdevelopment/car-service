/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Footer = () => {
  return (
    // <div>
    //     <footer className="bg-[#333333] text-white pt-8 ">
    //         <div className="container px-4 flex justify-between gap-8 max-w-7xl mx-auto ">
 
    //             <div  className="w-[40vw]">
                // <div className="flex items-center mb-4">
                //     <img
                //     src="/assests/logo.png"
                //     alt="BestAutoRepair Logo"
                //     className="h-14 w-auto"
                //     />
                // </div>
    //             <p className="text-white text-2xl font-medium max-w-xs my-10 pr-5">
    //                 We manage your car renewal - Convenience Door to Door Service.
    //             </p>
    //             </div>
    //             <div className="w-[25vw]">
    //             <h3 className="text-white font-semibold mb-4 text-2xl">Menu</h3>
    //             <ul className="text-white space-y-4 text-xl font-normal">
    //                 <li>
    //                 <a href="#" className="hover:text-red-500">
    //                     Home
    //                 </a>
    //                 </li>
    //                 <li>
    //                 <a href="#" className="hover:text-red-500">
    //                     Our Services
    //                 </a>
    //                 </li>
    //                 <li>
    //                 <a href="#" className="hover:text-red-500">
    //                     Pricing Plan
    //                 </a>
    //                 </li>
    //                 <li>
    //                 <a href="#" className="hover:text-red-500">
    //                     Blog
    //                 </a>
    //                 </li>
    //                 <li>
    //                 <a href="#" className="hover:text-red-500">
    //                     About Us
    //                 </a>
    //                 </li>
    //                 <li>
    //                 <a href="#" className="hover:text-red-500">
    //                     Contact Us
    //                 </a>
    //                 </li>
    //             </ul>
    //             </div>
    //             <div className="w-[33vw]">
    //             <h3 className="text-white font-semibold mb-4 text-2xl">Connect with us</h3>
    //             <ul className="text-white space-y-2 text-xl">
    //                 <li className="flex items-center">
    //                 <span className="text-red-500 mr-2">
    //                     <i className="fas fa-phone-alt" />
    //                 </span>
    //                 055 1199 065 / +971 522336618
    //                 </li>
    //                 <li className="flex items-center">
    //                 <span className="text-red-500 mr-2">
    //                     <i className="fas fa-envelope" />
    //                 </span>
    //                 Albayadhgmc@gmail.com
    //                 </li>
    //                 <li className="flex items-center">
    //                 <span className="text-red-500 mr-2">
    //                     <i className="fas fa-map-marker-alt" />
    //                 </span>
    //                 Al bayadh garage, New industrial area 2 - Ajman-UAE
    //                 </li>
    //             </ul>
    //             </div>
    //         </div>
    //         <div className="text-center text-white mt-8 border-t border-gray-700 pt-4 bg-primary-main">
    //             © Copyright 2024. All Rights Reserved.
    //         </div>
    //         </footer>

    // </div>
    <footer className="h-[428px] w-full bg-[#333] shrink-0 relative flex justify-between  pl-[135px] pr-[90px]">
  <div className="part1 pt-[26px]">
  <div className="flex items-center mb-4">
                    <img
                    src="/assests/logo.png"
                    alt="BestAutoRepair Logo"
                    className="h-14 w-auto"
                    />
                </div>
    <p className="w-[283px] mt-[40px] text-[#FFF] text-[24px] font-[500] leading-[32px] capitalize	">
      We manage your car renewal - convenience door to door service.
    </p>
  </div>
  <div className="part2 flex flex-col gap-[24px] pt-[26px]">
    <h1 className="w-[131px] text-[24px] font-[600] leading-[130%] text-[#FFF]">
      Menu
    </h1>
    <div className="menu flex flex-col gap-[16px]">
      <h3 className="text-[21px] font-[400] leading-[150%] text-[#FFF] self-stretch">
        Home
      </h3>
      <h3 className="text-[21px] font-[400] leading-[150%] text-[#FFF] self-stretch">
        Our Services
      </h3>
      <h3 className="text-[21px] font-[400] leading-[150%] text-[#FFF] self-stretch">
        Pricing
      </h3>
      <h3 className="text-[21px] font-[400] leading-[150%] text-[#FFF] self-stretch">
        Blog
      </h3>
      <h3 className="text-[21px] font-[400] leading-[150%] text-[#FFF] self-stretch">
        About us
      </h3>
      <h3 className="text-[21px] font-[400] leading-[150%] text-[#FFF] self-stretch">
        Contact us
      </h3>
    </div>
  </div>
  <div className="part3 flex flex-col gap-[24px] pt-[26px]">
    <h1 className="w-[197px] text-[24px] font-[600] leading-[130%] text-[#FFF]">
      Connect with us
    </h1>
    <div className="contact flex flex-col gap-[24px] items-start">
      <div className="phone flex items-center gap-[23px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={28}
          height={28}
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M9.06761 2.84593L10.3229 2.4446C11.5001 2.06893 12.7578 2.67676 13.2618 3.86443L14.2651 6.23043C14.7014 7.2606 14.4588 8.47276 13.6654 9.22643L11.4546 11.3241C11.5911 12.5794 12.0134 13.8149 12.7204 15.0306C13.3918 16.2068 14.2924 17.2362 15.3688 18.0581L18.0241 17.1714C19.0298 16.8366 20.1264 17.2228 20.7424 18.1293L22.1809 20.2409C22.8984 21.2956 22.7689 22.7493 21.8788 23.6429L20.9256 24.6008C19.9759 25.5539 18.6191 25.9004 17.3649 25.5084C14.4016 24.5844 11.6798 21.8416 9.19478 17.2799C6.70628 12.7113 5.82778 8.83326 6.56044 5.6506C6.86844 4.31126 7.82161 3.24376 9.06761 2.84593Z"
            fill="#DC323F"
          />
        </svg>
        <div className="w-[349px]">
          <p className="font-[400] text-[21px] text-[#FFF] leading-[150%]">
            055 1199 065
          </p>
          <p className="font-[400] text-[21px] text-[#FFF] leading-[150%]">
            +971 522336618
          </p>
        </div>
      </div>
      <div className="email flex items-center gap-[34px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={16}
          viewBox="0 0 20 16"
          fill="none"
        >
          <g clipPath="url(#clip0_157_177)">
            <path
              d="M19.2505 0H13.2505C12.8385 0 12.2615 0.239 11.9705 0.53L4.53151 7.969C4.39125 8.10993 4.3125 8.30067 4.3125 8.4995C4.3125 8.69833 4.39125 8.88907 4.53151 9.03L10.9705 15.469C11.1114 15.6093 11.3022 15.688 11.501 15.688C11.6998 15.688 11.8906 15.6093 12.0315 15.469L19.4705 8.03C19.7625 7.738 20.0005 7.162 20.0005 6.75V0.75C20 0.55125 19.9208 0.360791 19.7803 0.220253C19.6397 0.079715 19.4493 0.000527891 19.2505 0V0ZM15.5005 6C15.3035 5.99993 15.1084 5.96106 14.9263 5.88559C14.7443 5.81012 14.5789 5.69954 14.4396 5.56016C14.3004 5.42078 14.1899 5.25533 14.1145 5.07325C14.0392 4.89118 14.0004 4.69605 14.0005 4.499C14.0006 4.30195 14.0395 4.10685 14.1149 3.92482C14.1904 3.7428 14.301 3.57742 14.4404 3.43813C14.5797 3.29884 14.7452 3.18837 14.9273 3.11303C15.1093 3.03768 15.3045 2.99893 15.5015 2.999C15.8995 2.99913 16.2811 3.15735 16.5624 3.43884C16.8437 3.72033 17.0016 4.10204 17.0015 4.5C17.0014 4.89796 16.8432 5.27956 16.5617 5.56087C16.2802 5.84217 15.8985 6.00013 15.5005 6Z"
              fill="#DC323F"
            />
            <path
              d="M2.00051 8.5L10.5005 0H9.25051C8.83851 0 8.26151 0.239 7.97051 0.53L0.531514 7.969C0.391247 8.10993 0.3125 8.30067 0.3125 8.4995C0.3125 8.69833 0.391247 8.88907 0.531514 9.03L6.97051 15.469C7.11144 15.6093 7.30218 15.688 7.50101 15.688C7.69985 15.688 7.89059 15.6093 8.03151 15.469L8.50151 14.999L2.00151 8.499L2.00051 8.5Z"
              fill="#DC323F"
            />
          </g>
          <defs>
            <clipPath id="clip0_157_177">
              <rect width={20} height={16} fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p className="w-[349px] font-[400] text-[21px] text-[#FFF] leading-[150%]">
          Albayadhgmc@gmail.com
        </p>
      </div>
      <div className="address flex items-center gap-[32px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={19}
          height={26}
          viewBox="0 0 19 26"
          fill="none"
        >
          <path
            d="M9.47664 25.1863C11.1865 23.7278 12.7715 22.1288 14.2149 20.4061C16.3809 17.819 18.9531 13.9662 18.9531 10.2947C18.9541 8.41967 18.3987 6.58649 17.3574 5.02718C16.3161 3.46786 14.8356 2.25251 13.1033 1.53492C11.371 0.81733 9.46479 0.629768 7.62586 0.995969C5.78692 1.36217 4.09795 2.26567 2.7727 3.59213C1.89036 4.47055 1.19101 5.51523 0.715097 6.66573C0.239191 7.81622 -0.0038147 9.04968 0.000148773 10.2947C0.000148773 13.9662 2.57234 17.819 4.73839 20.4061C6.18179 22.1288 7.76673 23.7278 9.47664 25.1863ZM9.47664 6.23336C10.5538 6.23336 11.5868 6.66125 12.3484 7.42291C13.1101 8.18456 13.538 9.21758 13.538 10.2947C13.538 11.3719 13.1101 12.4049 12.3484 13.1665C11.5868 13.9282 10.5538 14.3561 9.47664 14.3561C8.3995 14.3561 7.36648 13.9282 6.60483 13.1665C5.84317 12.4049 5.41528 11.3719 5.41528 10.2947C5.41528 9.21758 5.84317 8.18456 6.60483 7.42291C7.36648 6.66125 8.3995 6.23336 9.47664 6.23336Z"
            fill="#DC323F"
          />
        </svg>
        <p className="w-[349px] font-[400] text-[21px] text-[#FFF] leading-[150%]">
          Al bayadh garage New industrial <br /> area 2 - Ajman-UAE
        </p>
      </div>
    </div>
  </div>
  <div className="copyright h-[56px] w-full bg-[#DC323F] shrink-0 flex items-center justify-center pt-[15px] pb-[15.885px] absolute bottom-0 left-0">
    <p className="text-[#FFF] font-[400] text-[16px] leading-[24px]">
      © Copyright 2024. All Rights Reserved.
    </p>
  </div>
</footer>

  )
}

export default Footer