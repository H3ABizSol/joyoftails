import React, { useState } from 'react'
import "./index.scss"
import { HashLink as Link } from "react-router-hash-link"
import { RxCross2 } from "react-icons/rx"
import { FiInstagram, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi"

const Navbar = () => {
  const [show, setshow] = useState(false)
  const [navbar, setNavbar] = useState(false)
  
  const openMenuFunction=()=>{
    setshow(true)
    document.body.classList.add("activeClass")
  }
  const changeFunction = () => {
    setshow(false)
    document.body.classList.remove("activeClass")
  }

  // onscroll navbar background color changes 
  const changeNavbar=()=>{
    if(window.scrollY >= 80){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  window.addEventListener("scroll",changeNavbar)
  // const user = {
  //   name: 'John',
  //   address: {
  //     street: '123 Main St.',
  //     city: 'Anytown',
  //     state: 'CA',
  //     zip: '12345'
  //   }
  // };
  // // const street = user.address?.street;
  // // const country = user.address?.country
  // // console.log(country);
  
  




  const Mobile = () => {
    console.log("akhilesh");
    return (
      <>
        <div className={show ? "mobileView" : "active"} >
          <div className="mainMobileView">
            <div className="crossButton" onClick={() => changeFunction()}><RxCross2 /></div>
            <div className="moibleMenu">
              <ul>
                 <Link to="#intro" smooth onClick={() => changeFunction()}> Home</Link>
                <Link to="#about" smooth onClick={() => changeFunction()}> About</Link>
                <Link to="#portfolio" smooth onClick={() => changeFunction()}> PortFolio</Link>
                <Link to="#skills" smooth onClick={() => changeFunction()}> Skills</Link>
                <Link to="#contact" smooth onClick={() => changeFunction()}> Contact</Link>
              </ul>
            </div>
          </div>
          <div className="socilaMediaIcons">
            <a href="https://www.instagram.com/accounts/onetap/?next=%2F" target="_blank" rel="noreferrer" onClick={() => changeFunction()}><FiInstagram /></a>
            <a href="https://twitter.com/akhilesh121002" target="_blank" rel="noreferrer" onClick={() => changeFunction()}><FiTwitter /></a>
            <a href="https://github.com/SaxenaAkhilesh" target="_blank" rel="noreferrer" onClick={() => changeFunction()}><FiGithub /></a>
            <a href="https://www.linkedin.com/in/akhilesh-saxena-485031258/" target="_blank" rel="noreferrer" onClick={() => changeFunction()}><FiLinkedin /></a>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className={!navbar ? "Navbar":"Navbar activeBg"} >
        <div className="name">Akhilesh</div>
        <div className="menu">
          <ul>
             <Link to="#intro" smooth> Home</Link>
            <Link to="#about" smooth> About</Link>
            <Link to="#portfolio" smooth> PortFolio</Link>
            <Link to="#skills" smooth> Skills</Link>
            <Link to="#contact" smooth> Contact</Link>
          </ul>
        </div>
        {show ? <Mobile /> :
          <div className="menuCover" >

            <div className="contained" onClick={() => openMenuFunction()}>
              <div className="lines1"></div>
              <div className="lines2"></div>
              <div className="lines3"></div>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default Navbar