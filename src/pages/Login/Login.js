import React from "react";
import "./login.css";
import BackGround from "../../assets/imgs/backgound.png";
import logo from "..//../assets/imgs/logo.png";
import Button from "../../components/button/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NewInputs from "../../components/newInputs/NewInputs";
import UseAuth from "../../hooks/useAuth";
import OtpVerifecation from "../../components/otpVerifecation/OtpVerifecation";

const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Login() {
  const [check, setCheck] = useState(false);
  const [appearLogin, setAppearLogin] = useState(true);
  const [showCode, setShowCode] = useState(false);
  const [showRest, setShowReset] = useState(false);

  const navigate = useNavigate();
  const { auth, setAuth } = UseAuth();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const [newPwd, setNewPwd] = useState("");
  const [validNewPwd, setValidNewPwd] = useState(false);
  const [newPwdFocus, setNewPwdFocus] = useState(false);

  const [matchPwd, setMatcPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowCode(true);
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
    if (email === "admin@admin.com" && pwd === "admin") {
      localStorage.setItem("userToken", true);
      navigate("/dashbord");
    } else {
      localStorage.removeItem("userToken");
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
    setErrMsg("");
  }, [email, pwd]);

  useEffect(() => {
    const result = PasswordRegex.test(newPwd);
    setValidNewPwd(result);
    const match = newPwd === matchPwd;
    if (!match) {
      setErrMsg("Invalid Entry");
      setValidMatch(match);
      return;
    } else {
      setValidMatch(match);
      return;
    }
  }, [newPwd, matchPwd]);

  return (
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
        <div className="logo" style={{ marginBottom: "20px" }}>
          <img src={logo} alt="logo Didn't load" />
        </div>
        <div className={appearLogin ? "loginBlock" : "disappear"}>
          <p>Login</p>
          <p className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">
            {errMsg}
          </p>
          <form onSubmit={handleSubmit}>
            <NewInputs
              type="email"
              id="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              placeholder={"Email Address"}
            />
            <div className="password">
              <NewInputs
                type="password"
                id="password"
                placeholder={"Password"}
                autoComplete="off"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </div>
            <div className="infoPassword">
              <div className="remember">
                <div
                  onClick={() => setCheck(!check)}
                  className={check ? " square-1" : "square"}
                  id="button"
                >
                  <span style={{ opacity: !check ? "0" : "1" }}>
                    <Icon icon={"material-symbols:check"} />
                  </span>
                </div>
                <p onClick={() => setCheck(!check)}>Remember me</p>
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
              onChange={(e) => setEmail(e.target.value)}
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
          email={email ? email : localStorage.getItem("email")}
          handleClick={handleClick2}
          tryRegiser={localStorage.getItem("OtpVerivication")}
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
                onChange={(e) => setNewPwd(e.target.value)}
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
              <Icon icon={"material-symbols:info-outline"} />8 to 24 characters.
              must includes uppercase and lowercase letters , a number and a
              special charechtar.
            </p>
            <div className="password">
              <NewInputs
                type="password"
                id="confirm_pwd"
                autoComplete="off"
                onChange={setMatcPwd}
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
  );
}
