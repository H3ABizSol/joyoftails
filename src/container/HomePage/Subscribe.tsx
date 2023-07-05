import React, { useEffect } from 'react'
import "./index.scss"
import { GrClose } from "react-icons/gr"
import logo from "../../assets/logo.jpg"




const Subscribe = ({ changeSub }: any) => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <div className="SubScibe">
        <div className="mainSubScibe">
          <div className="closeIcon" onClick={() => { changeSub() }}><GrClose /></div>
          <img src={logo} alt="logo" />
          <div className="head">Subscribe to smartypetindia</div>
          <div className="subHead">Stay up to date with everything important.</div>
          <form >
            <input type="text" placeholder='Email' />
            <div className="agree"><input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree to Linktree's Terms and Conditions and Privacy Notice. (Required)</span></div>
            <button>Subscribe</button>
          </form>
          <div className="container">
          </div>
        </div>
      </div>
    </>
  )
}

export default Subscribe