import React,{useState} from 'react';
import SendOtpForm from "components/template/SendOtpForm";
import CheckOtpCode from "components/template/CheckOtpCode";

const AuthPage = () => {
     const [step, setStep] = useState(1);
     const [mobile, setMobile] = useState("");
     const [code, setCode] = useState("");
     return (
          <div>
               {step === 1 && <SendOtpForm setStep={setStep} mobile={mobile} setMobile={setMobile}/>}
               {step === 2 && <CheckOtpCode mobile={mobile} code={code} setCode={setCode} setStep={setStep}/>}
          </div>
     );
}

export default AuthPage;
