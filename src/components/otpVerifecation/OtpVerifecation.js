import React from "react";
import "./otpverifivation.css";
import Button from "../button/Button";
import NewInputs from "../newInputs/NewInputs";

export default function OtpVerifecation({
  className,
  email,
  handleOtp,
  handleResendOtp,
  tryRegiser,
  otp,
  setOtp,
}) {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={className}
      style={{ transition: tryRegiser ? "0" : "1.5s" }}
    >
      <p style={{ fontSize: "36px", fontWeight: 700 }}>
        Enter Verification Code
      </p>
      <p>
        We have just sent a verification code to <br /> {email}
      </p>
      <form onSubmit={onSubmit}>
        <div>
          <NewInputs
            oneNumber
            required
            className="number"
            otp={otp}
            setOtp={setOtp}
          />
        </div>
        <Button title={"Verify"} handleClick={handleOtp} />
        <Button
          title={"Resend Code"}
          nonColored
          handleClick={handleResendOtp}
        />
      </form>
    </div>
  );
}
