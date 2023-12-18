import { Box, Button } from "@mui/material";
import React from "react";

import OtpCode from "../OtpInput/OtpInput";

const SmsCode = () => {
  return (
    <div>
      <div className="bg-[#ECF7EF]">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100%",
            backgroundImage: "url('/image/back-login.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "73%",
          }}
        >
          <div className="flex flex-col  lg:px-[100px] md:px-[80px] px-[22px] py-7   min-h-[600px] bg-[#F9F8F6] rounded-[17px] border-[1.5px] border-[#747474]">
            <div className="flex items-center justify-center ">
              <Box
                component={"img"}
                src="/image/logo.svg"
                alt=""
                loading="lazy"
                sx={{
                  width: { lg: "83px", md: "63px", xs: "63px", sm: "63px" },
                  height: { lg: "83px", md: "63px", xs: "63px", sm: "63px" },
                  objectFit: "cover",
                }}
              />
              <h1 className="text-[#2F5E2B] lg:text-[32px] text-[26px] font-medium mr-1">
                سامانه پرتب
              </h1>
            </div>
            <div className="mt-[100px]">
              <div className="flex items-center flex-col gap-2">
                <h3 className="lg:text-[32px] text-[26px]">کد تایید </h3>
                <OtpCode />
              </div>
              <div className="flex items-center mt-4 justify-center">
                <Button
                  variant="contained"
                  sx={{
                    height: "60px",
                    width: "100%",
                    bgcolor: "#FBC16A",
                    color: "#000",
                    fontSize: {
                      lg: "32px",
                      md: "26px",
                      xs: "26px",
                      sm: "26px",
                    },
                    ":hover": { bgcolor: "#FBC16A" },
                  }}
                >
                  ثبت
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default SmsCode;
