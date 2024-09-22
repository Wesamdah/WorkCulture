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
}) {
  const [typo, setTypo] = useState(type);

  const [otp, setOtp] = useState(new Array(4).fill(""));

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
            key={index}
            type="text"
            className="number"
            maxLength="1"
            value={data}
            onChange={(e) => handleOtpChange(e, index)}
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
