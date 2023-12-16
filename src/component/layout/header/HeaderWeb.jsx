import { Box } from "@mui/material";
import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

function HeaderWeb() {
  return (
    <div>
      <Box
        sx={{
          boxShadow:
            "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        }}
        className="flex justify-between lg:h-[85px] h-[40px] lg:px-10 px-[15px] py-[10px] lg:py-4 items-center"
      >
        <div className="lg:hidden block">
          <Box
            component={GiHamburgerMenu}
            sx={{ width: "19px", height: "19px" }}
          />
        </div>
        <div className="flex items-center justify-center ">
          <Box
            component={"img"}
            src="/image/logo.svg"
            alt=""
            loading="lazy"
            sx={{
              width: { lg: "83px", md: "63px", xs: "30px", sm: "30px" },
              height: { lg: "83px", md: "63px", xs: "30px", sm: "30px" },
              objectFit: "cover",
            }}
          />
          <h1 className="text-[#2F5E2B] lg:text-[32px] md:text-[26px] text-[8px] font-medium mr-1">
            سامانه پرتب
          </h1>
        </div>
        <div className="lg:flex hidden  items-center gap-9 text-[22px] text-[#414241]">
          <p className="cursor-pointer">درباره ما</p>
          <p className="cursor-pointer">ارتباط با ما</p>
          <p className="cursor-pointer">حریم شخصی</p>
          <p className="cursor-pointer">قوانین و مقرارت</p>
        </div>
        <Box
          component={MdAccountCircle}
          sx={{
            width: { lg: "57px", md: "50px", xs: "19px", sm: "19px" },
            height: { lg: "57px", md: "50px", xs: "19px", sm: "19px" },
          }}
        />
      </Box>
    </div>
  );
}

export default HeaderWeb;
