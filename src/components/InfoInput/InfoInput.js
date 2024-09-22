import React from "react";
import { useState } from "react";
import "./infoinput.css";
import { Icon } from "@iconify/react/dist/iconify.js";
export default function InfoInput({ type, value, onChange, defValue }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const [typo, setTypo] = useState(type);
  return (
    <div
      className={
        isFocused ? "InfoInput-container-colored" : "InfoInput-container"
      }
    >
      <input
        type={typo}
        value={value}
        defaultValue={defValue}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required
      />
      {type === "password" && (
        <Icon
          className={typo === "password" ? " eyeIcon" : "eyeIcon-activeIcon"}
          icon={typo === "password" ? "heroicons-solid:eye" : "ri:eye-off-fill"}
          role="button"
          onClick={() => {
            setTypo(typo === "password" ? "text" : "password");
          }}
        />
      )}
    </div>
  );
}
