import React from "react";
import { checkOtp } from "services/auth";
import {setCookie} from "utils/cookie";

const CheckOtpCode = ({ code, setCode, mobile, setStep }) => {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (code.length !== 5) return
    const {response , error} = await checkOtp(mobile,code)
    if (response) {
     setCookie(response.data)
    }
    if (error) {
     console.log("error",error.response.data.message);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد پیامک شده</p>
      <span>کد پیامک شده به شماره موبایل {mobile} را وارد کنید</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        type="text"
        id="input"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ارسال کد تایید</button>
      <button onClick={() => setStep(1)}>تغیر شماره موبایل</button>
    </form>
  );
};

export default CheckOtpCode;
