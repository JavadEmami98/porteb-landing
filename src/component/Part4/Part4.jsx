import { Button } from "@mui/material";
import React from "react";

const Part4 = () => {
  return (
    <div className="container py-[2rem] lg:px-0 px-[15px]">
      <div className="flex flex-col justify-center  items-center border-[1.5px] border-[#747474] rounded-[17px] bg-white w-full h-[97px] lg:h-[392px]">
        <p className="lg:text-[40px] md:text-[24px] text-[10px] text-[#354B44] font-light">
          تاریخ: سه شنبه - ۱۴۰۲/۱۱/۳{" "}
        </p>
        <p className="lg:text-[40px] md:text-[24px] text-[10px] text-[#354B44] font-light">ساعت: ۱۰ صبح </p>
        <div className="flex items-center">
          <p className="lg:text-[40px] md:text-[24px] text-[10px] text-[#354B44] font-light">مبلغ رزرو : </p>
          <p className="lg:text-[40px] md:text-[24px] text-[10px] text-[#2D2D2D] font-medium mr-9">
            {" "}
            ۲۰۰ هزار تومان{" "}
          </p>
        </div>{" "}
        <Button
          variant="contained"
          sx={{
            width: {lg:"273px",md:"150px",xs:"67px",sm:"67px"},
            height:{lg:"76px",md:"50px",xs:"19px",sm:"19px"},
            bgcolor: "#354B44",
            color: "#fff",
            fontSize: {lg:"44px",md:"24px",sm:"11px",xs:"11px"},
            fontWeight: 500,
            mt: "1rem",
            "&:hover": { bgcolor: "#354B44" },
          }}
        >
          رزرو
        </Button>
      </div>
    </div>
  );
};

export default Part4;
