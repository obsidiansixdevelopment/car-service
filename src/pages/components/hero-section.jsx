import { dummyData } from "@/styles/dummy-data";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

// Import Swiper styles

const HeroSection = () => {
  
  return (
    <>
      <Swiper
        // navigation={true}
        modules={[Navigation]}
        className="mySwiper md:h-[40vw] sm:h-[60vw] h-[80vw] relative"
      >
        {dummyData.HeroSectionData.map((ele, i) => (
          <SwiperSlide key={i} className="h-full relative w-full -z-10">
            <Image
              src={ele.img}
              alt=""
              fill
              className="object-cover"
            />
            <div className="h-full w-full bg-black/30 absolute top-0 left-0" />
            <div className="absolute top-20 left-[12vw] z-10 md:mt-16 mt-10 ">
              <div className="xl:text-[3.5rem] md:text-4xl sm:text-3xl text-xl text-white font-semibold max-w-2xl md:leading-[4rem]">
                {ele.val1}
                <span className="text-primary-main">
                  {" "}
                 {ele.val2}
                </span>{" "}
                {ele.val3}
              </div>
              <button className="text-primary-main font-medium md:text-base sm:text-sm text-xs border border-primary-main p-2 px-4 rounded md:mt-10 sm:mt-8 mt-2">
                Make an Appointment
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="md:absolute bottom-4  w-full z-10 max-md:mt-4">
        <div className=" bottom-0 bg-[#222222] rounded-md w-full shadow-[0px_7px_16px_0px_rgba(255,255,255,0.05)] p-7 max-w-6xl mx-auto grid md:grid-cols-6 sm:grid-cols-4 grid-cols-2 md:gap-16 sm:gap-8 gap-4 justify-items-center">
          <div >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="36"
              viewBox="0 0 55 36"
              fill="none"
            >
              <path
                d="M39.6699 1.76931C36.2635 0.649949 32.041 0 27.4638 0C22.8865 0 18.664 0.649949 15.2576 1.76931C6.2095 4.73019 0 10.8686 0 17.9458C0 27.9117 12.2771 36 27.4283 36C42.5795 36 54.8565 27.9117 54.8565 17.9458C54.9275 10.8686 48.718 4.73019 39.6699 1.76931ZM27.4638 28.2728C25.1928 28.2728 23.3477 23.7593 23.2413 18.0542C24.5896 18.1625 26.009 18.2347 27.4638 18.2347C28.9186 18.2347 30.3024 18.1625 31.6862 18.0542C31.5798 23.7232 29.7347 28.2728 27.4638 28.2728ZM23.5252 13.5767C24.1284 9.56871 25.6541 6.75226 27.4638 6.75226C29.2379 6.75226 30.7637 9.56871 31.4024 13.5767C30.1605 13.6851 28.8121 13.7573 27.4638 13.7573C26.1154 13.7573 24.8025 13.7212 23.5252 13.5767ZM33.8152 13.2879C32.8926 7.00501 30.4088 2.52758 27.4638 2.52758C24.5187 2.52758 22.0349 7.00501 21.1123 13.2879C15.5415 12.3852 11.6384 10.3992 11.6384 8.05215C11.6384 4.87462 18.6995 2.31093 27.4283 2.31093C36.1571 2.31093 43.2182 4.87462 43.2182 8.05215C43.2891 10.3992 39.386 12.4213 33.8152 13.2879ZM4.04505 17.2959C4.04505 14.2267 5.21598 11.3741 7.20303 8.91875C7.16754 9.0993 7.16754 9.27984 7.16754 9.42427C7.16754 13.2879 12.8448 16.5376 20.7575 17.7292C20.7575 18.0181 20.7575 18.3069 20.7575 18.5958C20.7575 25.7452 22.709 31.8114 25.4057 33.9057C13.4125 33.1836 4.04505 26.0341 4.04505 17.2959ZM29.5572 33.9057C32.2539 31.8114 34.2055 25.7452 34.2055 18.5958C34.2055 18.3069 34.2055 18.0181 34.2055 17.7292C42.1182 16.5376 47.7954 13.2518 47.7954 9.42427C47.7954 9.24373 47.7954 9.06319 47.76 8.91875C49.7825 11.3741 50.9179 14.2628 50.9179 17.2959C50.9179 26.0341 41.515 33.1836 29.5572 33.9057Z"
                fill="#858587"
              />
            </svg>
            <p className="text-[#858587] font-medium mt-3 text-center md:text-base sm:text-sm text-xs">
              Toyota
            </p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="91"
              height="32"
              viewBox="0 0 91 32"
              fill="none"
            >
              <path
                d="M64.1553 19.7126C64.1716 19.794 64.2694 19.8673 64.3754 19.908C64.4162 19.9243 64.4325 19.9487 64.3917 20.0301C64.0982 20.6571 63.8292 21.0154 63.4705 21.5528C63.1363 22.0576 62.7532 22.4485 62.2967 22.823C61.6038 23.393 60.6418 24.02 59.8511 23.5966C59.5006 23.4174 59.3457 22.9207 59.3538 22.5218C59.3701 21.3981 59.8674 20.25 60.7967 19.1182C61.9217 17.734 63.1689 17.0174 63.9841 17.4083C64.8319 17.8072 64.5629 18.7843 64.1797 19.5579C64.1471 19.6067 64.1471 19.6637 64.1553 19.7126ZM73.2202 10.9675C73.2773 10.8617 73.2202 10.7803 73.0816 10.7803C72.3724 10.7803 71.4512 10.7803 70.7176 10.7803C70.5464 10.7803 70.4485 10.8047 70.367 10.9675C70.098 11.4887 66.7883 16.4393 66.177 17.4001C66.071 17.5467 65.9487 17.5223 65.9324 17.3594C65.8672 16.7894 65.3781 16.1299 64.5955 15.8205C64.0004 15.5843 63.4216 15.5355 62.8184 15.6169C61.7342 15.7635 60.7641 16.3335 59.9082 16.9849C58.6283 17.962 57.5197 19.224 56.0849 20.1604C55.3023 20.6653 54.2344 21.1131 53.5171 20.4536C52.8731 19.851 52.9465 18.5238 53.9328 17.4897C54.0388 17.3838 54.1611 17.4734 54.1448 17.5711C54.0551 18.0352 54.1692 18.4994 54.5198 18.8251C54.9518 19.2159 55.5714 19.2566 56.1012 18.9961C56.7289 18.6866 57.0958 18.0922 57.2017 17.4164C57.3648 16.366 56.5577 15.4378 55.5469 15.3645C54.7236 15.3075 53.9328 15.5925 53.1666 16.2276C52.7834 16.5452 52.5633 16.7813 52.2291 17.2536C52.1476 17.3676 52.0253 17.3838 52.0253 17.2128C52.066 15.8693 51.5036 15.1121 50.3949 15.0877C49.5308 15.0632 48.6096 15.5355 47.8841 16.1055C47.0934 16.7406 46.4086 17.5793 45.6668 18.3691C45.5772 18.4668 45.4956 18.4586 45.4712 18.2714C45.4467 17.3838 45.2266 16.5126 44.8109 15.9019C44.6641 15.6902 44.3544 15.5843 44.1017 15.7309C43.9794 15.796 43.5636 15.9833 43.262 16.2276C43.1153 16.3497 43.0501 16.5289 43.1234 16.7569C43.5229 18.0922 43.4332 19.5986 42.8952 20.8851C42.3979 22.0576 41.436 23.1162 40.2947 23.4663C39.5448 23.7024 38.7703 23.5884 38.2894 22.9289C37.6291 22.0169 37.8981 20.4291 38.8763 19.11C39.7485 17.9457 41.0039 17.2128 42.2512 16.7324C42.3979 16.6754 42.4305 16.5777 42.3898 16.4556C42.3245 16.252 42.2104 15.967 42.1697 15.8449C42.0555 15.5355 41.7295 15.4866 41.3382 15.5355C40.4252 15.6413 39.61 15.9508 38.7948 16.3905C36.6671 17.5304 35.6074 19.7289 35.1346 20.9014C34.9063 21.4632 34.7188 21.8215 34.4661 22.1309C34.1319 22.5543 33.708 22.937 32.9417 23.6047C32.8684 23.6698 32.8195 23.792 32.8765 23.9141C32.958 24.077 33.3575 24.6388 33.4716 24.6877C33.5939 24.7528 33.7406 24.6632 33.7977 24.6225C34.3357 24.2561 34.9797 23.678 35.2976 23.2871C35.4118 23.1569 35.5177 23.2057 35.5829 23.4093C35.8764 24.4597 36.6427 25.3146 37.7106 25.6729C39.6589 26.3324 41.6805 25.3798 43.205 23.7268C44.175 22.6765 44.5256 22.0006 44.8924 21.5365C45.5201 20.7548 46.7673 19.0123 48.2428 17.8968C48.789 17.4815 49.4248 17.1721 49.7509 17.3757C50.0118 17.5467 50.0933 17.9294 49.6775 18.6866C48.1694 21.4388 45.9521 24.6714 45.5445 25.4531C45.4712 25.5915 45.5364 25.6973 45.675 25.6973C46.4657 25.6973 47.2483 25.6973 47.9656 25.6973C48.0879 25.6892 48.1368 25.6403 48.2021 25.5508C49.3596 23.7431 50.452 22.0169 51.6177 20.2337C51.6829 20.1279 51.74 20.2093 51.7481 20.2581C51.7726 20.6734 51.8704 21.2352 52.1231 21.6098C52.5633 22.2938 53.191 22.5869 53.8839 22.595C54.4382 22.6032 54.7154 22.5136 55.3105 22.2938C55.7915 22.1146 56.1827 21.8785 56.4844 21.6668C56.6556 21.5447 56.6882 21.7482 56.6882 21.7808C56.4192 23.2139 56.7534 24.9238 58.18 25.624C59.8919 26.4627 61.7668 25.2821 62.851 24.2154C62.957 24.1095 63.0711 24.1258 63.0792 24.3457C63.1037 24.7528 63.283 25.2413 63.6254 25.5752C64.5303 26.4871 66.3645 26.1207 68.1986 24.7039C69.3806 23.792 70.6116 22.5136 71.7202 21.1538C71.761 21.105 71.7936 21.0154 71.7121 20.934C71.5409 20.7548 71.2963 20.5513 71.1252 20.3966C71.0518 20.3314 70.9377 20.3477 70.8724 20.3966C69.7312 21.4795 68.704 22.7172 67.2204 23.7431C66.7231 24.0933 65.9243 24.3701 65.5656 23.8897C65.427 23.7024 65.4433 23.4419 65.5819 23.0999C66.0058 22.0006 72.8615 11.5782 73.2202 10.9675Z"
                fill="#858587"
              />
              <path
                d="M40.965 12.2179C40.9976 12.3726 41.0547 12.4052 41.1281 12.3889C41.4786 12.3156 41.8617 12.0306 42.0818 11.6968C42.2856 11.3955 42.3834 10.964 42.1796 10.7848C42.0003 10.6301 41.6987 10.6708 41.4786 10.8662C41.0384 11.2571 40.908 11.8108 40.965 12.2179ZM23.4874 25.6449C20.9277 25.6611 18.6778 24.0815 18.4169 21.3538C18.2702 19.8393 18.7022 18.4876 19.5582 17.3802C20.3163 16.3869 21.6043 15.5645 22.6966 15.369C23.0553 15.3039 23.5281 15.3446 23.7238 15.5807C24.0335 15.939 23.9439 16.338 23.6341 16.4927C22.8026 16.9161 21.7999 17.6408 21.3108 18.6342C20.9114 19.4403 20.8299 20.4174 21.4412 21.3456C22.4684 22.8927 25.3297 22.9334 27.9872 20.4662C28.6475 19.8637 29.2344 19.2774 29.8377 18.5935C31.0116 17.2581 31.4029 16.7695 32.9599 14.6118C32.9762 14.5874 32.9843 14.5548 32.9762 14.5385C32.9599 14.5059 32.9436 14.5059 32.8946 14.4978C31.8512 14.5304 30.9463 14.8398 30.0659 15.4912C29.8132 15.6785 29.4464 15.654 29.2834 15.4098C29.104 15.1329 29.2344 14.7746 29.5279 14.5711C30.9463 13.5858 32.4952 13.4067 34.0767 13.138C34.0767 13.138 34.1826 13.1461 34.2805 13.024C34.9326 12.1935 35.4217 11.4444 36.1146 10.5975C36.8157 9.74258 37.7124 8.9609 38.3972 8.3665C39.3591 7.5441 39.9705 7.26726 40.5982 6.92528C40.7612 6.83571 40.5737 6.738 40.5248 6.738C37.0277 6.07846 33.3919 5.23164 29.9274 6.51815C27.5226 7.41383 26.471 9.31917 26.9764 10.5894C27.3351 11.4932 28.5252 11.6398 29.642 11.0942C30.5632 10.6383 31.4192 9.91357 32.0305 8.97718C32.3729 8.45606 33.0821 8.83062 32.699 9.73444C31.68 12.1202 29.7399 14.0092 27.3758 14.0907C25.3623 14.1558 24.0662 12.6739 24.0662 10.85C24.0743 7.25097 28.085 4.88151 32.2996 4.53138C37.3782 4.11612 42.1796 5.45963 47.2175 6.07031C51.0815 6.53444 54.7825 6.55072 58.6628 5.65505C59.1193 5.55734 59.4453 5.85047 59.4127 6.31459C59.372 6.98227 58.8584 7.62553 57.5786 8.32578C56.1275 9.12375 54.6031 9.35988 53.0135 9.37616C49.174 9.40873 45.5953 7.91052 41.8943 7.11255C41.9025 7.2754 41.9432 7.47082 41.8047 7.56853C39.7504 9.08304 37.8999 10.6138 36.6608 12.7716C36.6201 12.8204 36.6364 12.8693 36.7179 12.8612C37.7939 12.8042 38.764 12.7797 39.7748 12.6983C39.9542 12.682 39.9542 12.6413 39.9379 12.511C39.8482 11.7701 40.0683 10.9232 40.7205 10.337C41.3889 9.73444 42.2286 9.6693 42.7829 10.1008C43.4106 10.5894 43.3617 11.4769 43.0111 12.1365C42.6606 12.8123 42.0818 13.1706 41.5193 13.3416C41.5193 13.3416 41.4052 13.366 41.4215 13.4718C41.446 13.6428 42.2041 14.0662 42.2693 14.1721C42.3345 14.2779 42.3019 14.4408 42.1878 14.5711C42.1063 14.6606 41.984 14.7502 41.821 14.7502C41.6905 14.7502 41.609 14.7014 41.446 14.6118C41.1036 14.4245 40.6797 14.1232 40.3944 13.765C40.2966 13.6428 40.2477 13.6428 40.0031 13.651C38.9107 13.7161 37.2151 13.879 36.0657 14.0174C35.7886 14.05 35.7478 14.107 35.6907 14.1965C33.8566 17.2174 31.9001 20.4744 29.748 22.6566C27.441 25.0098 25.5253 25.6286 23.4874 25.6449Z"
                fill="#858587"
              />
              <path
                d="M45.7172 1.31908C21.8078 1.31908 2.43074 7.91451 2.43074 15.9919C2.43074 24.0692 21.8078 30.6646 45.7172 30.6646C69.6185 30.6646 88.9956 24.0692 88.9956 15.9919C88.9956 7.92265 69.6185 1.31908 45.7172 1.31908ZM45.7172 32C20.9437 32 0.857422 24.8346 0.857422 16C0.857422 7.15725 20.9437 0 45.7172 0C70.4908 0 90.577 7.1654 90.577 16C90.577 24.8346 70.4908 32 45.7172 32Z"
                fill="#858587"
              />
            </svg>
            <p className="text-[#858587] font-medium mt-3 text-center md:text-base sm:text-sm text-xs">Ford</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="93"
              height="32"
              viewBox="0 0 93 32"
              fill="none"
            >
              <path
                d="M16.5777 1.88281C12.8763 2.00626 9.37162 3.57923 6.81916 6.26264C4.2667 8.94605 2.87089 12.525 2.93263 16.2279C2.99436 19.9309 4.50869 23.4613 7.14918 26.0582C9.78966 28.655 13.3448 30.1103 17.0483 30.1103C20.7518 30.1103 24.3069 28.655 26.9474 26.0582C29.5879 23.4613 31.1023 19.9309 31.164 16.2279C31.2257 12.525 29.8299 8.94605 27.2775 6.26264C24.725 3.57923 21.2203 2.00626 17.5189 1.88281H16.5777ZM36.3424 1.88281C32.641 2.00626 29.1363 3.57923 26.5839 6.26264C24.0314 8.94605 22.6356 12.525 22.6973 16.2279C22.7591 19.9309 24.2734 23.4613 26.9139 26.0582C29.5544 28.655 33.1095 30.1103 36.813 30.1103C40.5165 30.1103 44.0716 28.655 46.7121 26.0582C49.3526 23.4613 50.867 19.9309 50.9287 16.2279C50.9904 12.525 49.5946 8.94605 47.0422 6.26264C44.4897 3.57923 40.985 2.00626 37.2836 1.88281H36.3424ZM56.1071 1.88281C52.4057 2.00626 48.901 3.57923 46.3486 6.26264C43.7961 8.94605 42.4003 12.525 42.462 16.2279C42.5238 19.9309 44.0381 23.4613 46.6786 26.0582C49.3191 28.655 52.8742 30.1103 56.5777 30.1103C60.2812 30.1103 63.8363 28.655 66.4768 26.0582C69.1173 23.4613 70.6316 19.9309 70.6934 16.2279C70.7551 12.525 69.3593 8.94605 66.8068 6.26264C64.2544 3.57923 60.7497 2.00626 57.0483 1.88281H56.1071ZM75.8718 1.88281C72.1704 2.00626 68.6657 3.57923 66.1133 6.26264C63.5608 8.94605 62.165 12.525 62.2267 16.2279C62.2885 19.9309 63.8028 23.4613 66.4433 26.0582C69.0838 28.655 72.6389 30.1103 76.3424 30.1103C80.0459 30.1103 83.601 28.655 86.2415 26.0582C88.882 23.4613 90.3963 19.9309 90.4581 16.2279C90.5198 12.525 89.124 8.94605 86.5715 6.26264C84.0191 3.57923 80.5144 2.00626 76.813 1.88281H75.8718Z"
                stroke="#858587"
                stroke-width="3"
              />
            </svg>
            <p className="text-[#858587] font-medium mt-3 text-center md:text-base sm:text-sm text-xs">Audi</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="103"
              height="24"
              viewBox="0 0 103 24"
              fill="none"
            >
              <g clip-path="url(#clip0_1_1236)">
                <path
                  d="M59.6508 21.2863C59.6508 21.4802 59.7033 21.5859 59.8259 21.5859C59.9134 21.5859 59.9835 21.5507 60.071 21.4978L91.6616 0.828194C92.222 0.45815 92.7298 0.264317 93.4828 0.264317H100.435C101.503 0.264317 102.221 0.986784 102.221 2.06167V15.4009C102.221 17.0044 101.871 17.9383 100.435 18.8018L92.0118 23.8943C91.9067 23.9648 91.8017 24 91.7316 24C91.6266 24 91.539 23.9295 91.539 23.63V8.05286C91.539 7.87665 91.4865 7.7533 91.3639 7.7533C91.2763 7.7533 91.2063 7.78855 91.1187 7.84141L68.0212 22.9427C67.3733 23.3656 66.848 23.489 66.2526 23.489H50.9301C49.8619 23.489 49.1439 22.7665 49.1439 21.6916V2.48458C49.1439 2.34361 49.0739 2.22026 48.9688 2.22026C48.8813 2.22026 48.8112 2.25551 48.7237 2.30837L33.4888 11.5242C33.3312 11.6123 33.2961 11.7004 33.2961 11.7709C33.2961 11.8414 33.3136 11.8943 33.4362 12L44.3108 22.9427C44.4509 23.0837 44.556 23.2071 44.556 23.3128C44.556 23.4361 44.3983 23.5066 44.2057 23.5066H34.3643C33.5938 23.5066 32.9984 23.3833 32.5782 22.9604L25.9764 16.3172C25.9063 16.2467 25.8538 16.2115 25.7837 16.2115C25.7312 16.2115 25.6437 16.2467 25.5736 16.2819L14.5414 22.9604C13.876 23.3656 13.4207 23.489 12.7553 23.489H2.59866C1.53047 23.489 0.8125 22.7665 0.8125 21.6916V8.59912C0.8125 6.97797 1.16273 6.06167 2.59866 5.19824L11.0742 0.0704846C11.1617 0.0176211 11.2318 0 11.3018 0C11.4244 0 11.4944 0.140969 11.4944 0.422908V17.9383C11.4944 18.1145 11.547 18.2026 11.6696 18.2026C11.7396 18.2026 11.8272 18.1498 11.9147 18.0969L40.5458 0.77533C41.2288 0.370044 41.6491 0.246696 42.4371 0.246696H57.8471C58.9153 0.246696 59.6333 0.969163 59.6333 2.04405L59.6508 21.2863Z"
                  fill="#858587"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1236">
                  <rect
                    width="101.408"
                    height="24"
                    fill="white"
                    transform="translate(0.8125)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="text-[#858587] font-medium mt-3 text-center md:text-base sm:text-sm text-xs">KIA</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
            >
              <path
                d="M20.1667 38.0681C10.1892 38.0681 2.09929 29.9782 2.09929 20.0007C2.09929 10.0232 10.1892 1.93328 20.1667 1.93328C30.1442 1.93328 38.2341 10.0232 38.2341 20.0007C38.2341 29.9782 30.1442 38.0681 20.1667 38.0681ZM20.1667 0.980469C9.65884 0.980469 1.14648 9.49283 1.14648 20.0007C1.14648 30.5086 9.65884 39.0209 20.1667 39.0209C30.6746 39.0209 39.1869 30.5086 39.1869 20.0007C39.1869 9.49283 30.6656 0.980469 20.1667 0.980469ZM20.1667 38.2209C22.6296 38.2209 25.0117 37.7355 27.2588 36.7917C29.4251 35.8749 31.3757 34.5625 33.0476 32.8906C34.7195 31.2187 36.0319 29.2681 36.9487 27.1018C37.9015 24.8546 38.3779 22.4726 38.3779 20.0097C38.3779 17.5468 37.8926 15.1647 36.9487 12.9175C36.0319 10.7513 34.7195 8.80069 33.0476 7.12878C31.3757 5.45687 29.4251 4.14451 27.2588 3.22766C25.0117 2.27485 22.6296 1.79845 20.1667 1.79845C17.7038 1.79845 15.3218 2.28384 13.0746 3.22766C10.9083 4.14451 8.95772 5.45687 7.28581 7.12878C5.6139 8.80069 4.30154 10.7513 3.38469 12.9175C2.43188 15.1647 1.95547 17.5468 1.95547 20.0097C1.95547 22.4726 2.44087 24.8546 3.38469 27.1018C4.30154 29.2681 5.6139 31.2187 7.28581 32.8906C8.95772 34.5625 10.9083 35.8749 13.0746 36.7917C15.3218 37.7355 17.7038 38.2209 20.1667 38.2209ZM20.1667 1.13328C22.7105 1.13328 25.1824 1.62766 27.5105 2.61642C29.7577 3.56923 31.7802 4.92654 33.506 6.66137C35.2409 8.3962 36.5982 10.4097 37.551 12.6569C38.5308 14.985 39.0341 17.4569 39.0341 20.0007C39.0341 22.5445 38.5397 25.0164 37.551 27.3445C36.5982 29.5917 35.2409 31.6052 33.506 33.34C31.7712 35.0749 29.7577 36.4322 27.5105 37.385C25.1824 38.3647 22.7105 38.8681 20.1667 38.8681C17.6229 38.8681 15.151 38.3737 12.8229 37.385C10.5757 36.4322 8.55323 35.0749 6.82738 33.34C5.10154 31.6052 3.73525 29.5917 2.78244 27.3445C1.80266 25.0164 1.29929 22.5445 1.29929 20.0007C1.29929 17.4569 1.80266 14.985 2.78244 12.6569C3.73525 10.4097 5.09255 8.3962 6.82738 6.66137C8.56221 4.92654 10.5757 3.56923 12.8229 2.61642C15.142 1.62766 17.6139 1.13328 20.1667 1.13328Z"
                fill="#858587"
              />
              <path
                d="M8.95731 8.37749C8.7236 8.17974 8.35506 8.17075 8.19326 8.36851L6.79102 10.0404L7.65394 10.7685L9.03821 9.11457C9.21798 8.89884 9.21798 8.59323 8.95731 8.37749ZM10.6562 10.3101C10.8539 10.0764 10.818 9.71682 10.5393 9.48311C10.2876 9.27637 9.91911 9.3303 9.75731 9.52806L8.28315 11.2809L9.2 12.0449L10.6562 10.3101Z"
                fill="#858587"
              />
              <path
                d="M20.167 1.93164C10.1895 1.93164 2.09961 10.0215 2.09961 19.9991C2.09961 29.9766 10.1895 38.0665 20.167 38.0665C30.1446 38.0665 38.2344 29.9766 38.2344 19.9991C38.2344 10.0215 30.1446 1.93164 20.167 1.93164ZM17.3985 2.59681H18.8367L20.1401 6.00355L21.4344 2.59681H22.8726V7.36984H21.9198V4.03501L20.6614 7.36984H19.6187L18.3603 4.03501V7.36984H17.4075L17.3985 2.59681ZM5.35354 10.453L7.68163 7.67546C8.16703 7.10018 8.84118 6.64175 9.47938 7.18108C9.67714 7.35187 9.75804 7.4058 10.0007 7.83726C10.0547 7.99007 10.0996 8.27771 9.99174 8.54737C10.549 8.2058 11.1423 8.31366 11.5288 8.69119C12.1221 9.26647 12.0322 9.93164 11.4749 10.5968L9.02096 13.5271L5.35354 10.453ZM20.167 32.1159C13.4794 32.1159 8.05017 26.6957 8.05017 19.9991C8.05017 13.3114 13.4704 7.8822 20.167 7.8822C26.8547 7.8822 32.2839 13.3024 32.2839 19.9991C32.2749 26.6867 26.8547 32.1159 20.167 32.1159ZM31.367 13.3564L30.549 12.3676L32.1131 10.0125L32.1041 10.0036L29.4974 11.1182L28.6704 10.1384L31.394 6.53389L32.0861 7.36984L30.3783 9.66198L33.0299 8.48445L33.776 9.38333L32.1401 11.7653L34.7019 10.5069L35.394 11.3429L31.367 13.3564Z"
                fill="#858587"
              />
              <path
                d="M8.76953 20.0001H20.1583V8.61133C13.8751 8.61133 8.76953 13.708 8.76953 20.0001ZM20.1673 20.0001V31.3889C26.4594 31.3889 31.556 26.2922 31.556 20.0001H20.1673Z"
                fill="#858587"
              />
            </svg>
            <p className="text-[#858587] font-medium mt-3 text-center md:text-base sm:text-sm text-xs">BMW</p>
          </div>
          <div className="grid justify-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
            >
              <g clip-path="url(#clip0_1_1231)">
                <path
                  d="M21.1291 19.9009L22.0005 19.3669L33.1319 26.9846L21.1291 19.9009ZM20.4826 19.4793L19.6674 19.0014L20.595 4.46875L20.4826 19.4793ZM19.4988 19.4231L15.8164 22.487L20.2296 19.8728L19.4988 19.4231Z"
                  fill="#858587"
                />
                <path
                  d="M20.7067 0.167969C9.74397 0.167969 0.861328 9.05061 0.861328 20.0134C0.861328 30.9761 9.74397 39.8588 20.7067 39.8588C31.6695 39.8588 40.5521 30.9761 40.5521 20.0134C40.5521 9.05061 31.6695 0.167969 20.7067 0.167969ZM20.7067 38.7625C16.1811 38.7625 11.9365 37.2446 8.76013 34.4898C5.69618 31.7913 3.30687 27.4905 2.71656 22.9368C4.12205 31.6226 11.6273 38.2284 20.7067 38.2284C30.77 38.2284 38.9218 30.0766 38.9218 20.0134C38.9218 15.825 37.3757 11.7491 34.9864 8.68519C37.3757 10.5404 39.4558 15.7969 39.4558 20.0134C39.484 30.3858 31.0792 38.7625 20.7067 38.7625ZM18.992 18.5798L20.5943 2.13564H20.7348L20.9035 19.4512L23.6582 17.7927L20.9035 2.13564C30.6856 2.21997 38.5844 10.2031 38.5844 19.9853C38.5844 23.1335 37.7693 26.085 36.3357 28.6711L23.9393 18.2987L22.7587 18.9733L36.2514 28.8398C36.2232 28.896 36.1951 28.9522 36.1389 29.0084L20.9597 20.2664V23.3303L36.0265 29.149C32.9063 34.3493 27.2 37.8349 20.7067 37.8349C14.2134 37.8349 8.50715 34.3493 5.38698 29.1771L20.4537 23.3303V20.2382L5.27454 28.9522C5.24643 28.896 5.21832 28.8398 5.1621 28.7836L18.5985 18.9452L17.4179 18.2706L5.04966 28.5868C3.64418 26.0288 2.829 23.1054 2.829 19.9571C2.829 10.2312 10.6154 2.33241 20.2851 2.10753L17.8677 17.9333L18.992 18.5798ZM20.7067 1.23613C10.3624 1.23613 1.9576 9.64091 1.9576 19.9853C1.9576 24.2017 3.47552 28.1652 5.80862 31.6226C6.59569 33.1125 7.43898 34.012 8.59148 35.2207C4.12205 31.6508 1.22675 26.1413 1.22675 19.9853C1.22675 9.21927 9.94074 0.505284 20.7067 0.505284C31.4727 0.505284 40.3554 9.6128 40.018 19.9853C39.7651 9.86579 30.9105 1.23613 20.7067 1.23613Z"
                  fill="#858587"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1231">
                  <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(0.720703)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="text-[#858587] font-medium mt-3 md:text-base sm:text-sm text-xs">Mercedes-Benz</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
