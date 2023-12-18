import { Box, Button } from "@mui/material";
import React from "react";

const Part1 = () => {
  return (
    <div className="lg:block flex lg:my-0 my-[30px]  justify-center lg:mx-[70px] lg:mt-[80px] lg:h-[750px] lg:min-h-[100vh]">
      <Box
        sx={{
          display: "flex",
          backgroundImage: {
            lg: "url('/image/doctor.svg')",
            md: "none",
            xs: "none",
            sm: "none",
          },
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
          /*  backgroundSize: "cover", */
          height: { lg: "718px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: {
              lg: "flex-start",
              md: "center",
              xs: "center",
              sm: "center",
            },

            gap: 2,
          }}
        >
          <p className="lg:text-[55px] text-[20px] text-[#000000] font-bold lg:text-start text-center">
            بهترین گزینه های رزرو <br />
            وقت پزشکی در ایران
          </p>
          <p className="lg:text-[36px] text-[13px] text-[#2D2D2D] font-normal lg:text-start text-center">
            با بهترین سامانه رزرو وقت <br />
            پزشکی بروز باشید
          </p>
          <Button
            sx={{
              width: { lg: "404px", md: "300px", xs: "147px", sm: "147px" },
              height: { lg: "74px", md: "50px", xs: "27px", sm: "27px" },
              bgcolor: "#FBC16A",
              color: "#000000",
              borderRadius: { lg: "17px", md: "12px", xs: "6px", sm: "6px" },
              fontSize: { lg: "24px", md: "18px", xs: "8px", sm: "8.77px" },
              boxShadow: "none",
              fontWeight: 700,
              "&:hover": { bgcolor: "#FBC16A", boxShadow: "none" },
            }}
            variant="contained"
          >
            درخواست زمان
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Part1;
