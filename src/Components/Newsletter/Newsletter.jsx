import React, { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [userEmail, setUserEmail] = useState();

  return (
    <div className="newsletter">
      <div className="newsletter-left">
        <p>KNOW IT ALL FIRST!</p>
        <p>Never miss anything from GlamCart by signing up to our newsletter</p>
      </div>
      <div className="newsletter-right">
        <input
          type="text"
          placeholder="Enter your Email"
          value={userEmail}
          onChange={(event) => setUserEmail(event.target.value)}
        />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
