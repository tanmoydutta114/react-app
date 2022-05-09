import React, { useState } from "react";
import "./style.css";

import { FetchData } from "./FetchData";

export const Basic_form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const [show, setShow] = useState(false);
  const [rData, setRdata] = useState([]);
  const [text, settext] = useState("Show Data");

  const submitForm = (e) => {
    // e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
    sendData(newEntry);
  };

  async function sendData(data) {
    const fromatedData = { data };
    const response = await fetch("/dataRecive", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fromatedData),
    });
    if (response.ok) {
      console.log("Data Send Successfuly!");
    }
  }
  async function reciveData() {
    // console.log("inside handleGetJson");
    // fetch("/data", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((messages) => {
    //     setRdata(messages);
    //   });
    // console.log(rData);
    // {
    //   rData.map((d) => <li>{d}</li>);
    // }
    setShow(!show);
    var text = show ? "Show Data" : "Hide Data";
    settext(text);
  }

  

  return (
    <>
      <div>
        <meta charSet="utf-8" />
        <title>Sign in</title>
        <link rel="stylesheet" type="text/css" href="style.css" />
        <form action="http://localhost:3000/" onSubmit={submitForm}>
          <div className="login-root">
            <div
              className="box-root padding-top--24 flex-flex flex-direction--column"
              style={{ flexGrow: 1, zIndex: 9 }}
            >
              <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                <h1>
                  <a
                    href="https://github.com/tanmoydutta114/react-app"
                    rel="dofollow"
                    target="_blank"
                  >
                    Sign Up
                  </a>
                </h1>
              </div>

              <div className="formbg-outer">
                <div className="formbg">
                  <div className="formbg-inner padding-horizontal--48">
                    <span className="padding-bottom--15">
                      Sign in to your account
                    </span>
                    <div className="field padding-bottom--24">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="field padding-bottom--24">
                      <div className="grid--50-50">
                        <label htmlFor="password">Password</label>
                      </div>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="field padding-bottom--24">
                      <input
                        type="submit"
                        name="submit"
                        defaultValue="Continue"
                        onClick={sendData}
                      />
                    </div>

                    <div className="field padding-bottom--24">
                      <input
                        type="button"
                        name="show data"
                        defaultValue={text}
                        onClick={reciveData}
                      />
                    </div>
                  </div>
                  <div>{show ? <FetchData /> : null}</div>
                </div>
                <div className="footer-link padding-top--24">
                  <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                    <span>
                      <a
                        href="https://github.com/tanmoydutta114/react-app"
                        target="_blank"
                      >
                        © Tanmoy_Dutta
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://github.com/tanmoydutta114/react-app"
                        target="_blank"
                      >
                        Contact
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* <div>{show ? <FetchData /> : null}</div> */}
      </div>
    </>
  );
};
