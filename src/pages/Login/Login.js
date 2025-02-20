import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
//css files
import "./login.css";
// compnents
import NewInputs from "../../components/newInputs/NewInputs";
import Button from "../../components/button/Button";
import OtpVerifecation from "../../components/otpVerifecation/OtpVerifecation";
// assetes
import BackGround from "../../assets/imgs/backgound.png";
import logo from "..//../assets/imgs/logo.png";
// custom hooks
import useValidOtp from "../../hooks/useValidOtp";
import useEnterUserData from "../../hooks/useEnterUserData";
// api
import axios from "../../api/axios";

const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Login() {
  const navigate = useNavigate();

  const { formData, setFormData } = useEnterUserData();
  const [remember, setRemember] = useState(false);
  const [loginErrMsg, setLoginErrMsg] = useState("");

  const [appearLogin, setAppearLogin] = useState(true);
  const [showRest, setShowReset] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const [errMsg, setErrMsg] = useState("");
  const { handleOtpRegister, handleResendOtp } = useValidOtp(setErrMsg, otp);

  const [validNewPwd, setValidNewPwd] = useState(false);
  const [newPwdFocus, setNewPwdFocus] = useState(false);

  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const storeUserRole = (role) => {
    return new Promise((resolve) => {
      localStorage.setItem("userRole", role);
      resolve();
    });
  };

  const storeUserToken = (token) => {
    return new Promise((resolve) => {
      localStorage.setItem("userToken", token);
      resolve();
    });
  };

  const storeInStorage = (itemNmae, token) => {
    return new Promise((resolve) => {
      localStorage.setItem(itemNmae, token);
      resolve();
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShowCode(true);
    setFormData({ ...formData, password: "" });
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    setShowReset(true);
    setShowCode(false);
  };

  const handleClick3 = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("remember", remember);
    try {
      const response = await axios.post("login", formDataToSend, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });
      const accessToken = response?.data?.data?.authorization?.token;
      const role =
        response?.data?.data?.user?.is_admin === 0 ? "user" : "admin";
      const userName = response?.data?.data?.user?.name;
      const email = response?.data?.data?.user?.email;
      const directionName = response?.data?.data?.user?.direction.name;
      const profileImageUrl = response?.data?.data?.user_image?.original_url;

      await storeUserRole(role);
      await storeUserToken(accessToken);
      await storeInStorage("userName", userName);
      await storeInStorage("email", email);
      await storeInStorage("directionName", directionName);
      await storeInStorage("profileImageUrl", profileImageUrl);

      if (role === "user") {
        navigate("/dashbord/home");
      }
      if (role === "admin") {
        navigate("/dashbord/analytics");
      }

      setLoginErrMsg("");
    } catch (err) {
      // catch (err) {
      //   if (err.response.status === 400) setLoginErrMsg("No Server Response");
      //   else {
      //     setLoginErrMsg("Invalid Entry");
      //     if (
      //       err.response?.status &&
      //       err.response.data.message === "Account not verified"
      //     ) {
      //       setLoginErrMsg(err.response.data.message);
      //     }
      //   }
      // }
      if (!err.response) {
        setLoginErrMsg("No Server Response");
      } else if (err.response.status === 400) {
        setLoginErrMsg("Bad Request");
      } else {
        setLoginErrMsg("Invalid Entry");
        if (
          err.response?.status &&
          err.response.data?.message === "Account not verified"
        ) {
          setLoginErrMsg(err.response.data.message);
        }
      }
      console.error("Login Error:", err);
    }
  };

  useEffect(() => {
    document.title = "Work Culture | Login";
    const boolean = localStorage.getItem("OtpVerivication");
    if (boolean) {
      setAppearLogin(false);
      setShowReset(false);
      setShowCode(true);
    }
  }, []);

  // useEffect(() => {
  //   const token = localStorage.getItem("userToken");
  //   token && navigate("/dashbord");
  // }, [navigate]);

  useEffect(() => {
    const result = PasswordRegex.test(formData.password);
    setValidNewPwd(result);
    const match = formData.password === formData.password_confirmation;
    if (!match) {
      setValidMatch(match);
      return;
    } else {
      setValidMatch(match);
      return;
    }
  }, [formData.password, formData.password_confirmation]);

  return (
    <>
      <div
        className={
          loginErrMsg ? "Error-Message onLogin" : "Error-Message offLogin"
        }
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
        <p>{loginErrMsg}</p>
      </div>

      <div className="mainLogin">
        <motion.div
          className="img"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
          exit={{ x: "-100vw" }}
        >
          <img src={BackGround} alt="Didn't load" />
        </motion.div>

        <motion.div
          className="infoFormLogin"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div
            className="logo"
            style={{ marginBottom: "20px", marginTop: "150px" }}
          >
            <img src={logo} alt="logo Didn't load" />
          </div>
          <div className={appearLogin ? "loginBlock" : "disappear"}>
            <p>Login</p>
            <p
              className={errMsg ? "errMsg" : "offscreen"}
              style={{ color: "red" }}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <form onSubmit={handleSubmit}>
              <NewInputs
                type="email"
                id="email"
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
                  placeholder={"Password"}
                />
              </div>
              <div className="infoPassword">
                <div className="remember">
                  <div
                    onClick={() => setRemember(!remember)}
                    className={remember ? " square-1" : "square"}
                    id="button"
                  >
                    <span style={{ opacity: remember ? "1" : "0" }}>
                      <Icon icon={"material-symbols:check"} />
                    </span>
                  </div>
                  <p onClick={() => setRemember(!remember)}>Remember me</p>
                </div>
                <p
                  style={{
                    color: "#01B9FD",
                    textDecoration: "underline",
                  }}
                  onClick={() => setAppearLogin(false)}
                >
                  Forget Password
                </p>
              </div>
              <Button title="Log In" />
            </form>
            <p className="lastP">
              Don't have an account yet?
              <span style={{ paddingLeft: "10px" }}>
                <Link style={{ color: "#01B9FD" }} to={"/SignUp"}>
                  Create account
                </Link>
              </span>
            </p>
          </div>
          <div
            className={
              !appearLogin && !showCode && !showRest
                ? " recoverLogin"
                : "disappear"
            }
          >
            <p style={{ fontSize: "36px", fontWeight: 700 }}>
              Recover your password
            </p>
            <p className="recoverText">
              <span style={{ color: "white", fontWeight: 700 }}>
                Enter the email
              </span>
              that you used when register to recover your password. You will
              receive a
              <span style={{ color: "white", fontWeight: 700 }}>
                password reset link.
              </span>
            </p>
            <form onSubmit={handleClick}>
              <NewInputs
                type="email"
                id="email-2"
                autoComplete="off"
                // onChange={(e) => setEmail(e.target.value)}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                placeholder={"Email Address"}
              />
              <Button title={"Send Link"} />
            </form>
            <p
              onClick={() => {
                setAppearLogin(true);
              }}
            >
              <Icon
                icon="tabler:arrow-left"
                style={{ marginRight: "10px", fontSize: "20px" }}
              />
              Back to Login
            </p>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
                fontWeight: "400",
              }}
            >
              If you need further assistance
            </p>
            <p>Contact our support team</p>
          </div>
          <OtpVerifecation
            className={showCode && !appearLogin ? "showCode" : "disappear"}
            email={
              formData.email ? formData.email : localStorage.getItem("email")
            }
            handleOtp={formData.email ? handleClick2 : handleOtpRegister}
            handleResendOtp={handleResendOtp}
            tryRegiser={localStorage.getItem("OtpVerivication")}
            otp={otp}
            setOtp={setOtp}
          />

          <div className={showRest ? "restPass" : "disappear"}>
            <p style={{ fontSize: "36px", fontWeight: 700 }}>Reset Password</p>
            <p>Enter your New Password to access your account</p>
            <form onSubmit={handleClick3}>
              <div className="password">
                <NewInputs
                  type="password"
                  id="password-2"
                  autoComplete="off"
                  // onChange={(e) => setNewPwd(e.target.value)}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                  focus={() => setNewPwdFocus(true)}
                  blur={() => setNewPwdFocus(false)}
                  ariaInvalid={validNewPwd ? "false" : "ture"}
                  ariaDescribedby="pwdnote"
                  placeholder={"Password"}
                />
              </div>
              <p
                id="pwdnote"
                className={
                  newPwdFocus && !validNewPwd ? "instructions" : "offscreen"
                }
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
                  // onChange={setMatcPwd}
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
            </form>
            <Button title={"Reset Password"} />
          </div>
        </motion.div>
      </div>
    </>
  );
}
