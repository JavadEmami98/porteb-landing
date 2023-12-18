import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import Part4 from "../Part4/Part4";

const days = [
  {
    day: "شنبه",
    date: " ۱۴۰۲/۱۱/5",
    visitTimes: [
      { hour: "  8 صبح", capacity: 3 },
      { hour: "  9 صبح", capacity: 0 },
      { hour: "  10 صبح", capacity: 0 },
      { hour: "  11 صبح", capacity: 0 },
    ],
  },
  {
    day: "یکشنبه",
    date: " ۱۴۰۲/۱۱/2",
    visitTimes: [
      { hour: "  8 صبح", capacity: 3 },
      { hour: "  9 صبح", capacity: 0 },
      { hour: "  10 صبح", capacity: 0 },
      { hour: "  11 صبح", capacity: 0 },
    ],
  },
  {
    day: "دوشنبه",
    date: " ۱۴۰۲/۱۱/۷",
    visitTimes: [
      { hour: "  8 صبح", capacity: 3 },
      { hour: "  9 صبح", capacity: 0 },
      { hour: "  10 صبح", capacity: 0 },
      { hour: "  11 صبح", capacity: 0 },
    ],
  },
  {
    day: "سه شنبه",
    date: " ۱۴۰۲/۱۱/۷",
    visitTimes: [
      { hour: "  8 صبح", capacity: 3 },
      { hour: "  9 صبح", capacity: 0 },
      { hour: "  10 صبح", capacity: 0 },
      { hour: "  11 صبح", capacity: 0 },
    ],
  },
  {
    day: "چهارشنبه",
    date: " ۱۴۰۲/۱۱/۷",
    visitTimes: [
      { hour: "  8 صبح", capacity: 3 },
      { hour: "  9 صبح", capacity: 0 },
      { hour: "  10 صبح", capacity: 0 },
      { hour: "  11 صبح", capacity: 0 },
    ],
  },
  {
    day: "پنج شنبه",
    date: " ۱۴۰۲/۱۱/۷",
    visitTimes: [
      { hour: "  8 صبح", capacity: 3 },
      { hour: "  9 صبح", capacity: 0 },
      { hour: "  10 صبح", capacity: 0 },
      { hour: "  11 صبح", capacity: 0 },
    ],
  },
  {
    day: "جمعه",
    date: " ۱۴۰۲/۱۱/7",
    visitTimes: [
      { hour: "  8 صبح", capacity: 3 },
      { hour: "  9 صبح", capacity: 0 },
      { hour: "  10 صبح", capacity: 2 },
      { hour: "  11 صبح", capacity: 0 },
    ],
  },
];

const Part3 = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleVisitTimeClick = (day) => {
    setSelectedDate(day.day);
  };
  /*  -> /api/slots/available-slots -> method get // public api
  -> /api/slots/initialize-slots -> method post // no body // public api */
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
        </div>
      </div>
      <div className="grid grid-cols-7 mt-4">
        {days.map((day, dayIndex) => (
          <div key={dayIndex} className="flex flex-col">
            <div className="flex flex-col">
              <p className="lg:text-[28px] md:text-[14px] text-[7px] text-[#2D2D2D] font-normal">
                {day.day}
              </p>
              <p className="lg:text-[28px] md:text-[14px] text-[7px] text-[#2D2D2D] font-normal">
                {day.date}
              </p>
            </div>
            <div className="flex flex-col items-center gap-6 mt-3">
              {day.visitTimes.map((visitTimes, timeIndex) => (
                <div
                  key={timeIndex}
                  className="flex items-center justify-center lg:w-[105px] w-fit lg:p-0 p-2 lg:h-[48px] h-[12px] bg-white border-[1.5px] border-[#5D8A7C] rounded-[4px]"
                >
                  <Button
                    disabled={visitTimes.capacity === 0 ? "disabled" : ""}
                    sx={{
                      fontSize: {
                        lg: "26px",
                        md: "14px",
                        xs: "6.25px",
                        sm: "6.25px",
                      },
                      width: "100%",
                      height: "100%",
                      color: "#2D2D2D",
                      fontWeight: 400,
                    }}
                    onClick={() => handleVisitTimeClick(day)}
                    selectedDate={selectedDate}
                  >
                    {visitTimes.hour}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Part4 selectedDate={selectedDate} />
    </div>
  );
};

export default Part3;
