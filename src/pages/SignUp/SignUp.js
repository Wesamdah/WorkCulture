import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import "./SignUp.css";
import Button from "../../components/button/Button";
import DropDown from "../../components/dropdown/DropDown";
import NewInputs from "../../components/newInputs/NewInputs";
import OtpVerifecation from "../../components/otpVerifecation/OtpVerifecation";
import BackGround from "../../assets/imgs/background-2.png";
import defaultImage from "../../assets/imgs/clone of photo.png";
import logo from "../../assets/imgs/logo.png";

const userRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const phoneRegx = /^[0-9-+]{9,18}$/;

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone: "",
    backpoint_id: "",
    direction_id: "",
    subdirection_ids: "",
    image: "",
  });

  const [selectValue1, setSelectValue1] = useState("");
  const [selectValue2, setSelectValue2] = useState("");
  const [selectValue3, setSelectValue3] = useState([]);

  const [backPointData, setBackPointData] = useState([]);
  const [directions, setDirections] = useState([]);
  const subdirection = directions.filter((item) =>
    item.name === selectValue2.name ? null : item
  );

  const [showLoginTwo, setShowLoginTwo] = useState(false);
  const [showLoginThree, setShowLoginThree] = useState(false);
  const [showOtpVerivication, setShowOtpVerivication] = useState(false);

  const [showdrop1, setShowdrop1] = useState(false);
  const [showdrop2, setShowdrop2] = useState(false);
  const [showdrop3, setShowdrop3] = useState(false);

  const [validName, setValidName] = useState(false);
  const [userFocus, setuserFocus] = useState(false);

  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [validPhNum, setValidPhNum] = useState(false);
  const [phNumFocus, setPhNuFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [registerErrMsg, setRegisterErrMsg] = useState("");

  const [imageFile, setImageFile] = useState(null);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFile(reader.result);
        setFormData({ ...formData, image: file });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick1 = (e) => {
    e.preventDefault();
    const v1 = userRegex.test(formData.name);
    const v2 = formData.password === formData.password_confirmation;
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    } else if (v1 && v2) {
      setShowLoginTwo(true);
      return;
    }
  };

  const handleClick2 = () => {
    if (selectValue1 && selectValue2 && selectValue3) {
      setFormData({
        ...formData,
        backpoint_id: selectValue1.id.toString(),
        direction_id: selectValue2.id.toString(),
        subdirection_ids: selectValue3.map((selectedItems) =>
          selectedItems.id.toString()
        ),
      });
      setShowLoginTwo(false);
      setShowLoginThree(true);
    }
  };

  const otpClick = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) {
      const defaultFile = new File([defaultImage.blob], "image.png", {
        type: "image/png",
      });
      setFormData({ ...formData, image: defaultFile });
    }
    if (validPhNum) {
      const formDataTosend = new FormData();
      formDataTosend.append("name", formData.name);
      formDataTosend.append("email", formData.email);
      formDataTosend.append("password", formData.password);
      formDataTosend.append(
        "password_confirmation",
        formData.password_confirmation
      );
      formDataTosend.append("backpoint_id", formData.backpoint_id);
      formDataTosend.append("direction_id", formData.direction_id);
      formDataTosend.append("subdirection_ids[]", formData.subdirection_ids);
      formDataTosend.append("image", formData.image);
      try {
        const response = await axios.post("register", formData, {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response);
        console.log(response.data);
        if (response.status === 200) {
          localStorage.setItem("email", formData.email);
          localStorage.setItem("OtpVerivication", true);
          setShowOtpVerivication(true);
          setShowLoginThree(false);
        }
      } catch (err) {
        console.log(err.response.data);
        const errmesssage = err.response.data.message;
        setRegisterErrMsg(errmesssage.split(".")[0]);
        if (!err?.response) {
          setErrMsg("NO Server Response");
          // } else if (err.response?.status === 409) {
          //   setErrMsg("User Name Taken");
        } else {
          setErrMsg("Registraton Falied");
        }
      }
    } else {
      e.preventDefault();
      return;
    }
  };

  useEffect(() => {
    const getBackPoint = async () => {
      try {
        const response = await axios.get(
          "https://api-workculture.next-ai.pro/api/back-points",
          {
            headers: {
              "content-type": "application/json",
            },
          }
        );
        setBackPointData(response.data.data);
      } catch (err) {
        if (!err?.response) {
          console.log("No Server Response");
        } else {
          console.log("Error: ", err.response.data);
        }
      }
    };

    const getDirections = async () => {
      try {
        const response = await axios.get(
          "https://api-workculture.next-ai.pro/api/directions",
          {
            headers: {
              "content-type": "application/json",
            },
          }
        );
        setDirections(response.data.data);
      } catch (err) {
        if (!err?.response) {
          console.log("No Server Response");
        } else {
          console.log("Error: ", err.response.data);
        }
      }
    };

    getBackPoint();
    getDirections();
  }, []);

  useEffect(() => {
    document.title = "Work Culture | Sign-Up";
    const boolean = localStorage.getItem("OtpVerivication");
    if (boolean) {
      setShowLoginTwo(false);
      setShowLoginThree(false);
      setShowOtpVerivication(true);
    }
  }, []);

  // useEffect(() => {
  //   // const token = localStorage.getItem("userToken");
  //   // token && navigate("/dashbord");
  // }, [navigate]);

  useEffect(() => {
    const result = userRegex.test(formData.name);
    setValidName(result);
  }, [formData.name]);

  useEffect(() => {
    const result = PasswordRegex.test(formData.password);
    setValidPwd(result);
    const match = formData.password === formData.password_confirmation;
    setValidMatch(match);
  }, [formData.password, formData.password_confirmation]);

  useEffect(() => {
    setErrMsg("");
  }, [formData.name, formData.password, formData.password_confirmation]);

  useEffect(() => {
    const result = phoneRegx.test(formData.phone);
    setValidPhNum(result);
  }, [formData.phone]);

  return (
    <>
      <div
        className={registerErrMsg ? "Register-Error on" : "Register-Error off"}
      >
        <div className="img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
          >
            <g clipPath="url(#clip0_945_1094)">
              <path
                d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
                fill="url(#paint0_linear_945_1094)"
              />
              <path
                d="M55.7627 31.6586C54.1264 44.1984 44.193 54.1297 31.6531 55.7637L16.4062 40.5125L15.6406 35.6562L14.4375 22.5312L24.7187 14.1094L40.5956 16.4916L55.7627 31.6586Z"
                fill="url(#paint1_linear_945_1094)"
              />
              <path
                d="M28 10.9375C24.6254 10.9375 21.3265 11.9382 18.5206 13.813C15.7147 15.6879 13.5277 18.3527 12.2363 21.4705C10.9449 24.5882 10.607 28.0189 11.2654 31.3287C11.9237 34.6385 13.5488 37.6788 15.935 40.065C18.3212 42.4512 21.3615 44.0763 24.6713 44.7346C27.9811 45.393 31.4118 45.0551 34.5295 43.7637C37.6473 42.4723 40.3121 40.2853 42.187 37.4794C44.0618 34.6735 45.0625 31.3746 45.0625 28C45.0625 23.4747 43.2649 19.1348 40.065 15.935C36.8652 12.7352 32.5253 10.9375 28 10.9375ZM34.3624 31.2047C34.7809 31.6235 35.0161 32.1914 35.0161 32.7835C35.0161 33.3756 34.7809 33.9435 34.3624 34.3623C33.9435 34.7809 33.3756 35.0161 32.7835 35.0161C32.1914 35.0161 31.6235 34.7809 31.2047 34.3623L28 31.1577L24.7953 34.3623C24.3765 34.7809 23.8086 35.0161 23.2165 35.0161C22.6244 35.0161 22.0565 34.7809 21.6377 34.3623C21.2191 33.9435 20.984 33.3756 20.984 32.7835C20.984 32.1914 21.2191 31.6235 21.6377 31.2047L24.8424 28L21.6377 24.7953C21.2191 24.3765 20.984 23.8086 20.984 23.2165C20.984 22.6244 21.2191 22.0565 21.6377 21.6377C22.0565 21.2191 22.6244 20.9839 23.2165 20.9839C23.8086 20.9839 24.3765 21.2191 24.7953 21.6377L28 24.8423L31.2047 21.6377C31.6235 21.2191 32.1914 20.9839 32.7835 20.9839C33.3756 20.9839 33.9435 21.2191 34.3624 21.6377C34.7809 22.0565 35.0161 22.6244 35.0161 23.2165C35.0161 23.8086 34.7809 24.3765 34.3624 24.7953L31.1577 28L34.3624 31.2047Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_945_1094"
                x1="-14.6452"
                y1="-60.421"
                x2="105.424"
                y2="-32.2943"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FEFC" />
                <stop offset="1" stopColor="#0002FE" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_945_1094"
                x1="18.4833"
                y1="18.4855"
                x2="47.7969"
                y2="47.8002"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0002FE" />
                <stop offset="1" stopColor="#0002FE" />
              </linearGradient>
              <clipPath id="clip0_945_1094">
                <rect width="56" height="56" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p>{registerErrMsg}</p>
      </div>

      <div className="main">
        <motion.div
          className="infoForm"
          initial={{ y: "+100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          exit={{ y: "+100vh" }}
        >
          <div
            className="logo"
            style={{ marginBottom: "15px", marginTop: "160px" }}
          >
            <img src={logo} alt="" />
          </div>
          <p style={{ display: OtpVerifecation ? "none" : "block" }}>Sign Up</p>
          <div
            className="circle"
            style={{
              display: showOtpVerivication ? "none" : "flex",
              cursor: "pointer",
            }}
          >
            <div
              className={showLoginTwo || showLoginThree ? null : "active"}
              onClick={() => {
                setShowLoginTwo(false);
                setShowLoginThree(false);
              }}
            ></div>
            <div
              className={showLoginTwo ? "active" : null}
              onClick={() => {
                setShowLoginTwo(true);
                setShowLoginThree(false);
              }}
            ></div>
            <div
              className={showLoginThree ? "active" : null}
              onClick={() => {
                setShowLoginTwo(false);
                setShowLoginThree(true);
              }}
            ></div>
          </div>
          <div
            className={
              showLoginTwo || showLoginThree || showOtpVerivication
                ? "hiddenLogin"
                : "login-1"
            }
          >
            <p
              className={errMsg ? "errMsg" : "offScreen"}
              aria-live="assertive"
            >
              {errMsg && <Icon icon={"material-symbols:info-outline"} />}
              {errMsg}
            </p>
            <form onSubmit={handleClick1}>
              <NewInputs
                type="text"
                id="username"
                autoComplete="off"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                ariaInvalid={validName ? "false" : "ture"}
                ariaDescribedby="uidnote"
                placeholder={"Full Name"}
                focus={() => setuserFocus(true)}
                blur={() => setuserFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  userFocus && formData.name && !validName
                    ? "instructions"
                    : "offscreen"
                }
              >
                <Icon icon={"material-symbols:info-outline"} />4 to 24
                characters.must begin with a letter. Letters,number,sunderscores
              </p>
              <NewInputs
                type="email"
                id="username-2"
                autoComplete="off"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                placeholder={"Email Address"}
              />
              <div className="password">
                <NewInputs
                  type="password"
                  id="password"
                  autoComplete="off"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                  focus={() => setPwdFocus(true)}
                  blur={() => setPwdFocus(false)}
                  ariaInvalid={validName ? "false" : "ture"}
                  ariaDescribedby="pwdnote"
                  placeholder={"Password"}
                />
              </div>
              <p
                id="pwdnote"
                className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
              >
                <Icon icon={"material-symbols:info-outline"} />8 to 24
                characters. must includes uppercase and lowercase letters , a
                number and a special charechtar.
              </p>
              <div className="password">
                <NewInputs
                  type="password"
                  id="confirm_pwd"
                  autoComplete="off"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password_confirmation: e.target.value,
                    })
                  }
                  required
                  focus={() => setMatchFocus(true)}
                  blur={() => setMatchFocus(false)}
                  ariaInvalid={validMatch ? "false" : "ture"}
                  ariaDescribedby="confirmnote"
                  placeholder={"Confirm Password"}
                />
              </div>
              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatch ? "instructions" : "offscreen"
                }
              >
                <Icon icon={"material-symbols:info-outline"} />
                Must match the first password input field
              </p>
              <Button title="Next" />
            </form>

            <p>
              Already have an account?
              <span style={{ paddingLeft: "10px" }}>
                <Link style={{ color: "#01B9FD" }} to={"/Login"}>
                  Login
                </Link>
              </span>
            </p>
          </div>
          <div className={showLoginTwo ? "login-2" : "hiddenLogin"}>
            <div className="input" onClick={() => setShowdrop1(!showdrop1)}>
              <NewInputs
                type={"text"}
                placeholder={" Select your Back Point"}
                selecter
                selectVlaue={selectValue1.name}
              />
              <Icon
                icon={
                  showdrop1
                    ? "ri:arrow-up-wide-line"
                    : "ri:arrow-down-wide-line"
                }
                className="arrowIcon"
                onClick={() => {
                  setShowdrop1(!showdrop1);
                  setShowdrop2(false);
                }}
              />
              <div
                className="dropDown-menu"
                style={{ position: "relative", zIndex: "100" }}
              >
                <DropDown
                  className={showdrop1 ? "dropDown" : "hidden"}
                  data={backPointData}
                  setSelectValue={setSelectValue1}
                />
              </div>
            </div>
            <div className="input" onClick={() => setShowdrop2(!showdrop2)}>
              <NewInputs
                type={"text"}
                placeholder={" Select your Agency"}
                selecter
                selectVlaue={selectValue2.name}
              />
              <Icon
                icon={
                  showdrop2
                    ? "ri:arrow-up-wide-line"
                    : "ri:arrow-down-wide-line"
                }
                className="arrowIcon"
                onClick={() => {
                  setShowdrop2(!showdrop2);
                }}
              />
              <div
                className="dropDown-menu"
                style={{ position: "relative", zIndex: "100" }}
              >
                <DropDown
                  className={showdrop2 ? "dropDown" : "hidden"}
                  data={directions}
                  setSelectValue={setSelectValue2}
                />
              </div>
            </div>
            <div
              className="input"
              onClick={() => {
                setShowdrop3(!showdrop3);
              }}
            >
              <NewInputs
                type={"text"}
                placeholder={" Select Intrested Agencies"}
                selecter
                selectVlaue={selectValue3.map(
                  (selectedItems) => selectedItems.name
                )}
              />
              <Icon
                icon={
                  showdrop3
                    ? "ri:arrow-up-wide-line"
                    : "ri:arrow-down-wide-line"
                }
                className="arrowIcon"
                onClick={() => {
                  setShowdrop3(!showdrop3);
                }}
              />
              <div
                className="dropDown-menu"
                style={{ position: "relative", zIndex: "100" }}
              >
                <DropDown
                  multiSelect
                  className={showdrop3 ? "dropDown" : "hidden"}
                  data={subdirection}
                  setSelectValue={setSelectValue3}
                  selectValue={selectValue3}
                  multi
                />
              </div>
            </div>
            <Button title={"Next"} handleClick={() => handleClick2()} />
            <p>
              Already have an account? {""}{" "}
              <Link to={"/Login"}>
                <span> Login</span>
              </Link>
            </p>
          </div>
          <div className={showLoginThree ? "login-3" : "hiddenLogin"}>
            <form onSubmit={handleSubmit}>
              <div className="profileImg">
                <img src={imageFile ? imageFile : defaultImage} alt="" />
              </div>
              <input
                type="file"
                id="upload"
                style={{ display: "none" }}
                value={""}
                onChange={handleImageUpload}
                accept="image/*"
              />
              <div style={{ marginBottom: "10px" }}>
                <label htmlFor="upload">
                  <span
                    style={{
                      color: "#23C1FF",
                      fontSize: "14px",
                      textDecoration: "underLine",
                      cursor: "pointer",
                    }}
                  >
                    upload your photo
                  </span>
                </label>
              </div>
              <NewInputs
                type={"tel"}
                id={"number"}
                placeholder={"Phone Number"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
                required
                autoComplete="off"
                focus={() => setPhNuFocus(true)}
                blur={() => setPhNuFocus(false)}
                ariaInvalid={validPhNum ? "false" : "ture"}
                ariaDescribedby="phone"
              />
              <p
                id="phone"
                className={
                  phNumFocus && !validPhNum ? "instructions" : "offscreen"
                }
              >
                <Icon icon={"material-symbols:info-outline"} />9 to 18 degits.
                you can add a + symbol
              </p>
              <Button title={"Sign Up"} />
            </form>
          </div>
          <OtpVerifecation
            className={showOtpVerivication ? "showCode" : "hiddenLogin"}
            email={localStorage.getItem("email")}
            handleClick={otpClick}
          />
        </motion.div>
        <motion.div
          className="img"
          initial={{ x: "+100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
          exit={{ x: "+100vw" }}
        >
          <img src={BackGround} alt="Didn't load" />
        </motion.div>
      </div>
    </>
  );
}
