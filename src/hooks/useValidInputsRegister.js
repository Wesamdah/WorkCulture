import { useEffect, useState } from "react";

const userRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const phoneRegx = /^[0-9-+]{9,18}$/;

export default function useValidInputsRegister(formData) {
  const [validName, setValidName] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [validMatch, setValidMatch] = useState(false);
  const [validPhNum, setValidPhNum] = useState(false);
  const [errMsg, setErrMsg] = useState("");

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

  return {
    userRegex,
    validName,
    validPwd,
    validMatch,
    validPhNum,
    errMsg,
    setErrMsg,
  };
}
