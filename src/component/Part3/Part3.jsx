import { Box, Button } from "@mui/material";
import React from "react";

const Part3 = () => {
  return (
    <div className="container lg:px-0 px-[15px] py-[2rem]">
      <div className="flex items-center justify-between w-full">
        <h3 className="lg:text-[40px] md:text-[28px] text-[10px] text-[#2D2D2D] font-medium">
          جدول زمانبندی رزرو ویزیت پزشک
        </h3>
        <div className="flex items-center">
          <Box
            component={"img"}
            src="/image/taghvim.svg"
            alt=""
            loading="lazy"
            sx={{
              width: { lg: "54px", md: "30px", xs: "11px", sm: "11px" },
              height: { lg: "54px", md: "30px", xs: "11px", sm: "11px" },
              objectFit: "cover",
            }}
          />
          <p className="lg:text-[36px] md:text-[22px] text-[8px] text-[#2D2D2D] font-medium mr-2">
            بهمن ۷-۱
          </p>
          {/*    <div className="flex items-center mr-5">
            <Button
              variant="contained"
              sx={{
                width: {lg:"96px",md:"50px",xs:"19.89px",sm:"19.89px"},
                height: {lg:"49px",md:"30px",xs:"10px",sm:"10px"},
                bgcolor: "#354B44",
                color: "#fff",
                fontSize: {lg:"24px",md:"16px",xs:"6.26px",sm:"6.26px"},
                borderTopLeftRadius: "0px",
                borderBottomLeftRadius: "0px",
                "&:hover": { bgcolor: "#354B44" },
              }}
            >
              صبح
            </Button>
            <Button
              variant="contained"
              sx={{
                width: {lg:"96px",md:"50px",xs:"19.89px",sm:"19.89px"},
                height: {lg:"49px",md:"30px",xs:"10px",sm:"10px"},
                bgcolor: "#fff",
                color: "#000",
                fontSize: {lg:"24px",md:"16px",xs:"6.26px",sm:"6.26px"},
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px",
                "&:hover": { bgcolor: "#FFF" },
              }}
            >
              ظهر
            </Button>
          </div> */}
        </div>
      </div>
      <div className="grid grid-cols-7 mt-4">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="lg:text-[28px] md:text-[14px] text-[7px] text-[#2D2D2D] font-normal">
              شنبه
            </p>
            <p className="lg:text-[28px] md:text-[14px] text-[7px] text-[#2D2D2D] font-normal">
              {" "}
              ۱۴۰۲/۱۱/۷
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 mt-3">
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#2D2D2D] font-normal">
                ۸ صبح
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#2D2D2D] font-normal">
                9 صبح
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#2D2D2D] font-normal">
                10 صبح
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#2D2D2D] font-normal">
                11 صبح
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="lg:text-[28px] md:text-[14px] text-[7px] text-[#2D2D2D] font-normal">
              یک شنبه
            </p>
            <p className="lg:text-[28px] md:text-[14px] text-[7px] text-[#2D2D2D] font-normal">
              {" "}
              ۱۴۰۲/۱۱/1
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 mt-3">
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#2D2D2D] font-normal">
                ۸ صبح
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#2D2D2D] font-normal">
                9 صبح
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#2D2D2D] font-normal">
                10 صبح
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#2D2D2D] font-normal">
                11 صبح
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="lg:text-[28px] md:text-[14px] text-[7px] text-[#2D2D2D] font-normal">
              دو شنبه
            </p>
            <p className="lg:text-[28px] md:text-[14px] text-[7px] text-[#2D2D2D] font-normal">
              {" "}
              ۱۴۰۲/۱۱/2
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 mt-3">
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#2D2D2D] font-normal">
                ۸ صبح
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#2D2D2D] font-normal">
                9 صبح
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#2D2D2D] font-normal">
                10 صبح
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#A1A0A0] font-normal">
                11 صبح
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="lg:text-[28px] md:text-[14px] text-[7px] text-[#2D2D2D] font-normal">
              سه شنبه
            </p>
            <p className="lg:text-[28px] md:text-[14px] text-[7px] text-[#2D2D2D] font-normal">
              {" "}
              ۱۴۰۲/۱۱/3
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 mt-3">
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#2D2D2D] font-normal">
                ۸ صبح
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#2D2D2D] font-normal">
                9 صبح
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-[#354B44] border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#fff] font-normal">
                10 صبح
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#2D2D2D] font-normal">
                11 صبح
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="lg:text-[28px] md:text-[14px] text-[7px] text-[#2D2D2D] font-normal">
              چهار شنبه
            </p>
            <p className="lg:text-[28px] md:text-[14px] text-[7px] text-[#2D2D2D] font-normal">
              {" "}
              ۱۴۰۲/۱۱/4
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 mt-3">
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#2D2D2D] font-normal">
                ۸ صبح
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#A1A0A0] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#A1A0A0] font-normal">
                9 صبح
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#2D2D2D] font-normal">
                10 صبح
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#2D2D2D] font-normal">
                11 صبح
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="lg:text-[28px] md:text-[14px] text-[7px] text-[#2D2D2D] font-normal">
              {" "}
              پنج شنبه
            </p>
            <p className="lg:text-[28px] md:text-[14px] text-[7px] text-[#2D2D2D] font-normal">
              {" "}
              ۱۴۰۲/۱۱/۵
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 mt-3">
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#2D2D2D] font-normal">
                ۸ صبح
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#2D2D2D] font-normal">
                9 صبح
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#2D2D2D] font-normal">
                10 صبح
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#2D2D2D] font-normal">
                11 صبح
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="lg:text-[28px] md:text-[14px] text-[7px] text-[#A1A0A0] font-normal">
              جمعه
            </p>
            <p className="lg:text-[28px] md:text-[14px] text-[7px] text-[#A1A0A0] font-normal">
              {" "}
              ۱۴۰۲/۱۱/۶{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 mt-3">
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#A1A0A0] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#A1A0A0] font-normal">
                ۸ صبح
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#A1A0A0] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#A1A0A0] font-normal">
                9 صبح
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#A1A0A0] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#A1A0A0] font-normal">
                10 صبح
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#A1A0A0] rounded-[4px]">
              <p className="lg:text-[26px] md:text-[14px] text-[6.25px] text-[#A1A0A0] font-normal">
                11 صبح
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
