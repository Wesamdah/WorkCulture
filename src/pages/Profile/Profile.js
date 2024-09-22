import React from "react";
import { useState, useEffect } from "react";
import "./profile.css";
import InfoInput from "../../components/InfoInput/InfoInput";
import InputPic from "../../components/InputProfilePic/InputPic";
import DropDown from "../../components/dropdown/DropDown";
import Button from "../../components/button/Button";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Profile() {
  const [isFocused, setIsFoucesd] = useState(false);

  const [name, setName] = useState("Maya");
  const [email, setEmail] = useState("Maya");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [bio, setBio] = useState("");

  const [showdrop, setshowdrop] = useState(false);
  const [selectValue, setselectValue] = useState("");

  const data = [
    { color: "#ee9c50", text: "AISyro" },
    { color: "#A744FF", text: "ARTSyro" },
    { color: "#018DFD", text: "ProSyro" },
    { color: "#FFFF", text: "DevSyro" },
  ];

  const handleFocus = () => {
    setIsFoucesd(true);
  };

  const handleBlur = () => {
    setIsFoucesd(false);
  };

  useEffect(() => {
    document.title = "Work Culture | Profile";
  }, []);

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <div className="pic-container">
          <InputPic />
        </div>
        <div className="info-container">
          <div className="personal-info">
            <p style={{ marginBottom: "10px" }}>Personal Info</p>
            <span>Name</span>
            <InfoInput
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span>Email</span>
            <InfoInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <span>Phone Number</span>
            <InfoInput
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <p style={{ marginBottom: "10px", marginTop: "20px" }}>Password</p>
            <span>New Password</span>
            <InfoInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Rewrite New Password</span>
            <InfoInput
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="state">
            <span>Bio</span>
            <div className={isFocused ? "colored-text-area" : "text-area"}>
              <textarea
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
              <span>Intersted Agencies</span>
              <div
                className="agencies-conatiner"
                onFocus={() => setshowdrop(true)}
                onBlur={() => setshowdrop(false)}
              >
                <InfoInput
                  type={"text"}
                  placeholder={" Select your Back Point"}
                  value={selectValue}
                  onChange={(e) => selectValue}
                />
                <Icon
                  icon={
                    showdrop
                      ? "ri:arrow-up-wide-line"
                      : "ri:arrow-down-wide-line"
                  }
                  className="arrowIcon"
                  onClick={() => {
                    setshowdrop(!showdrop);
                  }}
                />
                <div
                  className="dropDown-menu"
                  style={{ position: "relative", zIndex: "100" }}
                >
                  <DropDown
                    className={showdrop ? "dropDown" : "hidden"}
                    data={data}
                    setSelectValue={setselectValue}
                    selectValue={selectValue}
                    multi
                  />
                </div>
              </div>
            </div>
            <div className="profile-btns">
              <Button title="Cancel" nonColored nonBorder />
              <Button title="Save" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
