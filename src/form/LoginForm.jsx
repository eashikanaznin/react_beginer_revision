import { useRef, useState } from "react";
// without usestate
export default function LoginForm() {
  const [hasMailError, setHasMailError] = useState(false);
  const [mailErrorMsg, setMailErrorMsg] = useState("");

  const [hasPassError, setHasPassError] = useState(false);
  const [passErrorMsg, setPassErrorMsg] = useState("");

  const [hasMailError2, setHasMailError2] = useState(false);
  const [mailErrorMsg2, setMailErrorMsg2] = useState("");
  const [mailVal2, setMailVal2] = useState("");

  const mailVal = useRef();
  const passVal = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    setHasMailError(false);
    setMailErrorMsg("");

    setHasPassError(false);
    setPassErrorMsg("");

    // mail validation
    if (mailVal.current.value) {
      if (mailVal.current.value.includes("@webdevsimplified.com")) {
        console.log(mailVal.current.value);
      } else {
        setHasMailError(true);
        setMailErrorMsg("Must end in @webdevsimplified.com");
      }
    } else {
      console.log("Empty");
      setHasMailError(true);
      setMailErrorMsg("Please fill the email");
    }
    // Pass validation
    if (passVal.current.value) {
      let pass = passVal.current.value;
      if (!pass.length >= 10) {
        setHasPassError(true);
        setPassErrorMsg("Should be more than 10 chars.");
      } else if (!/[a-z]/.test(pass)) {
        setHasPassError(true);
        setPassErrorMsg("Must include a lowercase letter.");
      } else if (!/[A-Z]/.test(pass)) {
        setHasPassError(true);
        setPassErrorMsg("Must include a Uppercase letter.");
      } else if (!/\d/.test(pass)) {
        setHasPassError(true);
        setPassErrorMsg("Must include a Number.");
      } else {
        console.log(pass);
      }
    } else {
      setHasPassError(true);
      setPassErrorMsg("Please fill the Password");
    }
    if(!hasMailError && !passErrorMsg){
      alert(success)
    }
  }

  // onchange error check with useState
  function checkMailError2(e) {
    setHasMailError2(false);

    setMailVal2(e.target.value);

    if (mailVal2 != "") {
      console.log(hasMailError2);
      if (mailVal2.includes("@webdevsimplified.com")) {
        console.log(mailVal2);
      } else {
        setHasMailError2(true);
        setMailErrorMsg2("Must end in @webdevsimplified.com");
      }
    } else {
      console.log("sssss");
      setHasMailError2(true);
      setMailErrorMsg2("Please fill the email");
    }
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group error">
        <label className="label" htmlFor="email">
          Email
        </label>
        <input className="input" type="email" id="email" ref={mailVal} />
        {hasMailError && <div className="msg">{mailErrorMsg}</div>}
      </div>
      <div className="form-group">
        <label className="label" htmlFor="password">
          Password
        </label>
        <input className="input" ref={passVal} type="password" id="password" />
        {hasPassError && <div className="msg">{passErrorMsg}</div>}
      </div>

      <h3>Bonus part: update error message on change</h3>
      <label className="label" htmlFor="email2">
        Email2
      </label>
      <input
        className="input"
        type="email2"
        id="email2"
        value={mailVal2}
        onChange={checkMailError2}
      />
      {hasMailError2 && <div className="msg">{mailErrorMsg2}</div>}

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}
