import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-[100px] lg:h-[391px] h-[200px] w-full bg-[#354B44]">
        <div className="flex flex-col gap-8">
          <p className="lg:text-[24px] md:text-[14px] text-[6px] text-[#ECF7EF] font-bold">درباره ما</p>
          <p className="lg:text-[24px] md:text-[14px] text-[6px] text-[#ECF7EF] font-bold"> ارتباط با ما</p>
        </div>
        <div className="flex flex-col gap-8">
          <p className="lg:text-[24px] md:text-[14px] text-[6px] text-[#ECF7EF] font-bold"> حریم شخصی</p>
          <p className="lg:text-[24px] md:text-[14px] text-[6px] text-[#ECF7EF] font-bold">
            قوانین و مقرارت{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
