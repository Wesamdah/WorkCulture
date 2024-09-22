import React from "react";
import "./mateinfo.css";

import pforilePic from "./../../../assets/imgs/profiletest.png";

export default function MateInfo({ choosenName }) {
  const handleColor = (agency) => {
    switch (agency.toLowerCase()) {
      case "devsyro":
        return "white";
      case "prosyro":
        return "#23C1FF";
      default:
        return "#A744FF";
    }
  };
  return (
    <div className="mateinfo-container">
      <div className="mate-name">
        <div
          className="image"
          style={{
            borderColor: choosenName && handleColor(choosenName.agency),
          }}
        >
          <img src={pforilePic} alt="" />
        </div>
        <div className="thename">
          <p>{choosenName && choosenName.name}</p>
          <p
            style={{
              color: choosenName && handleColor(choosenName.agency),
            }}
          >
            {choosenName && choosenName.agency}
          </p>
          <p>#56</p>
        </div>
      </div>
      <div className="about-mate">
        <div className="personal-info">
          <div className="email-section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clipPath="url(#clip0_957_6656)">
                <path
                  d="M11.6634 9.74707L10.1559 11.2597C9.54454 11.8732 8.4689 11.8864 7.84435 11.2597L6.33674 9.74707L0.922119 15.1793C1.12367 15.2725 1.34589 15.3281 1.58214 15.3281H16.4181C16.6543 15.3281 16.8765 15.2725 17.078 15.1793L11.6634 9.74707Z"
                  fill="url(#paint0_linear_957_6656)"
                />
                <path
                  d="M16.418 2.67188H1.58207C1.34582 2.67188 1.1236 2.72749 0.922119 2.82069L6.70803 8.6258C6.70842 8.62618 6.70887 8.62625 6.70926 8.62664C6.70965 8.62703 6.70972 8.62755 6.70972 8.62755L8.59103 10.5151C8.79086 10.7149 9.20929 10.7149 9.40912 10.5151L11.29 8.62787C11.29 8.62787 11.2905 8.62703 11.2909 8.62664C11.2909 8.62664 11.2917 8.62618 11.2921 8.6258L17.0779 2.82066C16.8764 2.72742 16.6543 2.67188 16.418 2.67188Z"
                  fill="url(#paint1_linear_957_6656)"
                />
                <path
                  d="M0.168258 3.55835C0.0639844 3.76922 0 4.00329 0 4.25402V13.7462C0 13.9969 0.0639141 14.231 0.168223 14.4419L5.59223 9.00029L0.168258 3.55835Z"
                  fill="url(#paint2_linear_957_6656)"
                />
                <path
                  d="M17.8317 3.55811L12.4077 9.00012L17.8317 14.4418C17.9359 14.2309 17.9999 13.9968 17.9999 13.746V4.25385C17.9999 4.00304 17.9359 3.76897 17.8317 3.55811Z"
                  fill="url(#paint3_linear_957_6656)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_957_6656"
                  x1="-3.30297"
                  y1="3.72545"
                  x2="21.7274"
                  y2="20.699"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00FEFC" />
                  <stop offset="1" stopColor="#0002FE" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_957_6656"
                  x1="-3.30295"
                  y1="-5.95225"
                  x2="26.5457"
                  y2="8.1805"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00FEFC" />
                  <stop offset="1" stopColor="#0002FE" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_957_6656"
                  x1="-1.46249"
                  y1="-8.1844"
                  x2="11.0051"
                  y2="-6.68373"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00FEFC" />
                  <stop offset="1" stopColor="#0002FE" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_957_6656"
                  x1="10.9452"
                  y1="-8.1848"
                  x2="23.4127"
                  y2="-6.68417"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00FEFC" />
                  <stop offset="1" stopColor="#0002FE" />
                </linearGradient>
                <clipPath id="clip0_957_6656">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>obada@mail.com</p>
          </div>
          <div className="phone-section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M18.4829 13.9441L15.8314 11.2926C14.8845 10.3456 13.2746 10.7244 12.8958 11.9555C12.6117 12.8078 11.6648 13.2812 10.8125 13.0918C8.91858 12.6183 6.36177 10.1562 5.88828 8.16759C5.60419 7.31528 6.17237 6.36831 7.02464 6.08426C8.2557 5.70547 8.63449 4.09563 7.68752 3.14866L5.03601 0.497158C4.27844 -0.165719 3.14208 -0.165719 2.4792 0.497158L0.679967 2.29639C-1.11927 4.19033 0.869361 9.20925 5.3201 13.66C9.77085 18.1107 14.7898 20.1941 16.6837 18.3001L18.4829 16.5009C19.1459 15.7433 19.1459 14.607 18.4829 13.9441Z"
                fill="url(#paint0_linear_957_6689)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_957_6689"
                  x1="-4.93844"
                  y1="-20.5"
                  x2="35.7225"
                  y2="-10.995"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00FEFC" />
                  <stop offset="1" stopColor="#0002FE" />
                </linearGradient>
              </defs>
            </svg>
            <p>+976 456 456 45</p>
          </div>
          <div className="interestied-section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
            >
              <path
                d="M17.25 2.4805C17.25 1.11283 16.1427 0 14.7832 0H3.21675C1.85733 0 0.75 1.11283 0.75 2.4805V20.4142C0.75 21.01 1.07817 21.5499 1.60617 21.8231C2.13142 22.0935 2.75658 22.0495 3.23875 21.7067L8.88542 17.6889C8.95325 17.6403 9.04583 17.6403 9.11458 17.6889L14.7613 21.7067C15.0335 21.9001 15.3525 21.9982 15.6724 21.9982C15.919 21.9982 16.1656 21.9404 16.3938 21.8231C16.9218 21.5508 17.25 21.0109 17.25 20.4151V2.4805ZM13.6035 10.1099L9.49958 14.4513C9.36942 14.5887 9.18883 14.6667 9 14.6667C8.81117 14.6667 8.63058 14.5887 8.50042 14.4522L4.3965 10.1108C3.20667 8.85317 3.20667 6.80625 4.3965 5.54767C5.57075 4.30558 7.63967 4.30558 8.81575 5.54767L9 5.74292L9.18425 5.54767C10.3594 4.30558 12.4283 4.30558 13.6035 5.54767C14.7933 6.80533 14.7933 8.85225 13.6035 10.1099Z"
                fill="url(#paint0_linear_957_6693)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_957_6693"
                  x1="-3.56509"
                  y1="-23.7355"
                  x2="32.6361"
                  y2="-17.3749"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00FEFC" />
                  <stop offset="1" stopColor="#0002FE" />
                </linearGradient>
              </defs>
            </svg>
            <p>ArtSyro , ISyro</p>
          </div>
        </div>
        <div className="state-info">
          <p>Bio</p>
          <p>
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliqlit. Nunc vulputate
            libero et velit interdum, ac aliq
          </p>
        </div>
      </div>
    </div>
  );
}
