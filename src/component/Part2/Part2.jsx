import { Box } from "@mui/material";
import React from "react";

const Part2 = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="text-[#2D2D2D] font-medium lg:text-[42px] md:text-[25px] text-[10.5px] border-b w-fit text-center border-[#000000] pb-3">
          خدمات ما
        </h2>
        <p className="lg:text-[24px] md:text-[16px] text-[6px] text-[#2D2D2D] font-light mt-4">
          با خدمات ما، می‌توانید به‌آسانی از رزرو آنلاین بهره‌مند شده و از
          پشتیبانی ۲۴ ساعته <br />
          لذت ببرید. خدماتی که راحتی و اطمینان شما را در اولویت قرار می‌دهند.
        </p>
        <div className="lg:flex lg:flex-row h-full lg:gap-8 flex-col lg:justify-between justify-center w-full items-center py-9">
          <div className="flex flex-col items-center justify-center border-[1.5px] border-[#747474] lg:h-[156px] lg:w-full  lg:min-w-[192px] lg:mx-0 mx-[110px]  h-[39px] lg:rounded-[17px] rounded-[4.25px]  lg:px-[35px] bg-[#F9F8F6]">
            <Box
              component={"img"}
              src="/image/pic1.svg"
              alt=""
              loading="lazy"
              sx={{
                width: { lg: "84px", md: "50px", xs: "16px", sm: "16px" },
                height: { lg: "84px", md: "50px", xs: "16px", sm: "16px" },
                objectFit: "cover",
              }}
            />
            <p className="lg:text-[24px] md:text-[16px] text-[6px] mt-1 font-bold text-[#2D2D2D]">
              الویت اول شما: راحتی و دقت
            </p>
          </div>
          <div className="flex flex-col lg:mt-0 mt-5 items-center justify-center border-[1.5px] border-[#747474] lg:h-[156px] lg:w-full lg:min-w-[192px] lg:mx-0 mx-[110px]  h-[39px] lg:rounded-[17px] rounded-[4.25px]  lg:px-[35px] bg-[#F9F8F6]">
            <Box
              component={"img"}
              src="/image/pic2.svg"
              alt=""
              loading="lazy"
              sx={{
                width: { lg: "84px", md: "50px", xs: "16px", sm: "16px" },
                height: { lg: "84px", md: "50px", xs: "16px", sm: "16px" },
                objectFit: "cover",
              }}
            />
            <p className="lg:text-[24px] md:text-[16px] text-[6px] mt-1 font-bold text-[#2D2D2D]">
              رزرو آنلاین سریع و آسان
            </p>
          </div>
          <div  className="flex flex-col lg:mt-0 mt-5 items-center justify-center border-[1.5px] border-[#747474] lg:h-[156px]  lg:w-full lg:min-w-[192px] lg:mx-0 mx-[110px]  h-[39px] lg:rounded-[17px] rounded-[4.25px]  lg:px-[35px] bg-[#F9F8F6]">
            <Box
              component={"img"}
              src="/image/pic3.svg"
              alt=""
              loading="lazy"
              sx={{
                width:{ lg: "84px", md: "50px", xs: "16px", sm: "16px" },
                height: { lg: "84px", md: "50px", xs: "16px", sm: "16px" },
                objectFit: "cover",
              }}
            />
            <p className="lg:text-[24px] md:text-[16px] text-[6px] mt-1 font-bold text-[#2D2D2D]">
              پشتیبانی ۲۴ ساعته
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part2;
