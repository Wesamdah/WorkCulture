import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function useValidOtp(setRegisterErrMsg, setErrMsg, otp) {
  const Navigate = useNavigate();
  const [otpInputs, setOtpInputs] = useState("");
  const handleOtpRegister = async (e) => {
    console.log(otpInputs);
    e.preventDefault();
    try {
      const response = await axios.post(
        "register/verify",
        JSON.stringify({
          email: localStorage.getItem("email"),
          otp: otpInputs,
        }),

        {
          headers: { "Content-Type": "aplication/json" },
        }
      );
      if (response.status === 200) {
        localStorage.removeItem("email");
        localStorage.removeItem("OtpVerivication");
        Navigate("/login");
      }
    } catch (err) {
      console.log(otpInputs);
      console.log(err.response.data);
      //   const errmesssage = err.response.data.message;
      setRegisterErrMsg(err.response.data.error);
      if (!err?.response) {
        setErrMsg("NO Server Response");
        // } else if (err.response?.status === 409) {
        //   setErrMsg("User Name Taken");
      } else {
        setErrMsg("Registraton Falied");
      }
    }
  };

  const handleResendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "otp/send",
        JSON.stringify({
          email: localStorage.getItem("email"),
        }),
        {
          headers: { "Content-Type": "aplication/json" },
        }
      );
      console.log(response.message);
    } catch (err) {
      console.log(err.response.data);
      if (!err?.response) {
        setErrMsg("NO Server Response");
        // } else if (err.response?.status === 409) {
        //   setErrMsg("User Name Taken");
      } else {
        setErrMsg("Registraton Falied");
      }
    }
  };

  useEffect(() => {
    otp && setOtpInputs(otp.join(""));
  }, [otp]);

  return { handleOtpRegister, handleResendOtp };
}
