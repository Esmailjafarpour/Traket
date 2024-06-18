import React from "react";
import { sendOtp } from "services/auth";
import styles from "./sendOtpForm.module.css";

const SendOtpForm = ({ mobile, setMobile, setStep }) => {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (mobile.length !== 11) return;
    const { response, error } = await sendOtp(mobile);
    if (response) setStep(2);
    if (error) console.log("err", error.response.data.message);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات تراکت،لطفا شماره موبایل خود را وارد کنید، که کد
        تایید برایتان ارسال شود
      </span>
      <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="شماره موبایل خود را وارد کنید"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">ارسال کد  تایید</button>
    </form>
  );
};

export default SendOtpForm;
