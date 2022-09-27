import React, { useState } from "react";
function Hello(props) {
  useState(props.text);
}

function Header(props) {
  return (
    <>
      <div className="header" onClick={Hello}>
        <h1>{props.text}</h1>
        <div className="box-1">
          <div className="btn btn-one">
            <span>Login/SignUp</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
