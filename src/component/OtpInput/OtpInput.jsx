import React, { useState } from "react";
import OtpInput from "react-otp-input";

export default function OtpCode() {
  const [otp, setOtp] = useState("");

  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={3}
      inputType="number"
      inputStyle={{
        width: "3.2rem",
        height: "3.2rem",
        margin: "1rem",
        fontSize: "1.3rem",
        borderBottom: "1px solid #000",
        direction: "rtl",
        float: "right",
        outline: "none",
        backgroundColor: "#FFF",
        color: "#000", // Specify a valid color value
      }}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
  );
}
