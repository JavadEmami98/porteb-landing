import React, { Fragment } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Drawer } from "@mui/material";

function HamMenu() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Fragment>
        <MenuIcon
          onClick={() => setOpen(true)}
          sx={{
            width: "1rem",
            color: "#545454 !important",
            height: "1rem",
            cursor: "pointer",
            /*   padding: ".75rem", */
            borderRadius: "50%",
            "&:hover": { backgroundColor: "#f8f8f8" },
          }}
        />
        <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
          <div className="w-[280px] h-full ">
            <div className="flex items-center justify-between px-2 py-2 shadow-sm">
              <div className="flex items-end ">
                <img
                  src="/image/logo.svg"
                  alt=""
                  loading="lazy"
                  className="h-[30px] object-cover"
                />
                <p className="text-[#2F5E2B] text-[12px] font-medium mr-1">
                  سامانه پرتب
                </p>
              </div>
              <CloseIcon
                onClick={() => setOpen(false)}
                sx={{
                  opacity: "50%",
                  color: "#000000",
                  cursor: "pointer",
                  width: "1.25rem",
                  height: "1.25rem",
                  borderRadius: "50%",
                  ":hover": { background: "#f8f8f8" },
                }}
              />
            </div>
            <Box sx={{ padding: "0.5rem" }}>
              <div className="flex items-center py-3 px-2 border-b">
                <p className="text-[#2F5E2B] text-[10px] font-medium mr-1">
                  درباره ما
                </p>
              </div>
              <div className="flex items-center py-3 px-2 border-b">
                <p className="text-[#2F5E2B] text-[10px] font-medium mr-1">
                  ارتباط با ما
                </p>
              </div>
              <div className="flex items-center py-3 px-2 border-b">
                <p className="text-[#2F5E2B] text-[10px] font-medium mr-1">
                  حریم شخصی
                </p>
              </div>
              <div className="flex items-center py-3 px-2 border-b">
                <p className="text-[#2F5E2B] text-[10px] font-medium mr-1">
                  قوانین و مقرارت
                </p>
              </div>
            </Box>
          </div>
        </Drawer>
      </Fragment>
    </div>
  );
}

export default HamMenu;
