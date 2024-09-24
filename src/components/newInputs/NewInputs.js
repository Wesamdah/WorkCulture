import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./newinputs.css";

export default function NewInputs({
  type,
  id,
  autoComplete,
  onChange,
  value,
  required,
  ariaInvalid,
  ariaDescribedby,
  placeholder,
  oneNumber,
  selecter,
  selectVlaue,
  focus,
  blur,
  setOtp,
  otp,
}) {
  const [typo, setTypo] = useState(type);

  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    // Ensure only numeric input and max length of 1 character
    if (isNaN(value) || value.length > 1) return;

    // Update OTP state
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input if a digit is entered
    if (value && index < otp.length - 1) {
      e.target.nextElementSibling.focus();
    }
  };

  // Handle backspace to move focus to the previous input
  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      e.target.previousElementSibling.focus();
    }
  };

  // Combine the OTP digits to get the complete OTP
  // const handleSubmit = () => {
  //   const fullOtp = otp.join(""); // Combine the array into a single string
  //   console.log("OTP:", fullOtp);
  // };

  return (
    <>
      {oneNumber ? (
        otp.map((data, index) => (
          <input
            key={index}
            type="text"
            className="number"
            maxLength="1"
            value={data}
            // onChange={(e) => {
            //   handleOtpChange(e, index);
            // }}
            onChange={(e) => handleOtpChange(e, index)}
            onKeyDown={(e) => handleBackspace(e, index)}
            onFocus={(e) => e.target.select()}
            required={required}
          />
        ))
      ) : (
        <>
          {selecter ? (
            <input
              className="normal"
              type={typo}
              placeholder={placeholder}
              defaultValue={selectVlaue}
            />
          ) : (
            <>
              <input
                className="normal"
                type={typo}
                id={id}
                autoComplete={autoComplete}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                aria-invalid={ariaInvalid}
                aria-describedby={ariaDescribedby}
                onFocus={focus}
                onBlur={blur}
                required
              />
              {type === "password" && (
                <Icon
                  className={
                    typo === "password" ? " eyeIcon" : "eyeIcon-activeIcon"
                  }
                  icon={
                    typo === "password"
                      ? "heroicons-solid:eye"
                      : "ri:eye-off-fill"
                  }
                  role="button"
                  onClick={() => {
                    setTypo(typo === "password" ? "text" : "password");
                  }}
                />
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

//               setOtpInputs(otp.join(""));
