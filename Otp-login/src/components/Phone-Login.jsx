import React from "react";
import { useState } from "react";
import OtpInput from "./Otp-input";

function PhoneOtpForm() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtpInput, setShowOtpInput] = useState(false)

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
      event.preventDefault();
      
      //phone validation
      const regex = /[^0-9]/g;
      if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
          alert("Invalid phone number")
          return;
      }

      //call backend api
      //show otp field
      setShowOtpInput(true)
  };
    
    const onOtpSubmit = (otp) => {
        console.log("Login successful", otp)
    }

  return (
    <div>
     {!showOtpInput ? <form onSubmit={handlePhoneSubmit}>
        <input
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumber}
          placeholder="Enter phhone number"
        />
        <button type="submit">Submit</button>
          </form> : <div>
                  <p>Enter the OTP send to Number {phoneNumber}</p>
                  <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
          </div>}
    </div>
  );
}

export default PhoneOtpForm;
