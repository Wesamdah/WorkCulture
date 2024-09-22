import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./input.css";

export default function Input({
  type,
  placeholder,
  setEmail,
  setPassword,
  setConfirmPassword,
  oneNumber,
  selecter,
  selectVlaue,
}) {
  const [typo, setTypo] = useState(type);

  const [email, setEmailState] = useState("");

  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (event) => {
    const value = event.target.value;
    setEmailState(value);
    if (setEmail) {
      setEmail(value);
    }
  };

  const handlePassword = (event) => {
    const value = event.target.value;
    if (setPassword) {
      setPassword(value);
    } else if (setConfirmPassword) {
      setConfirmPassword(value);
    }
  };

  const handleOtpChange = (e, index) => {
    if (isNaN(e.target.value)) return false;
    setOtp([...otp.map((data, i) => (i === index ? e.target.value : data))]);
    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  return (
    <>
      {oneNumber ? (
        otp.map((data, index) => (
          <input
            type="text"
            className="number"
            maxLength="1"
            value={data}
            onChange={(e) => handleOtpChange(e, index)}
          ></input>
        ))
      ) : (
        <>
          {typo === "email" ? (
            <input
              className="normal"
              type={typo}
              placeholder={placeholder}
              value={email}
              onChange={handleChange}
            />
          ) : (
            <>
              {selecter ? (
                <input
                  className="normal"
                  type={typo}
                  placeholder={placeholder}
                  value={selectVlaue}
                />
              ) : (
                <>
                  <input
                    className="normal"
                    type={typo}
                    placeholder={placeholder}
                    onChange={handlePassword}
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
      )}
    </>
  );
}
