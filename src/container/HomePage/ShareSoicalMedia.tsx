import React, { useState,useEffect } from 'react'
import "./index.scss"
import { GrClose } from "react-icons/gr"
import { InstapaperShareButton, FacebookShareButton, WhatsappShareButton, EmailShareButton } from "react-share"
import { BsInstagram } from "react-icons/bs"
import { ImWhatsapp } from "react-icons/im"
import { CiFacebook } from "react-icons/ci"
import { IoMailOutline } from "react-icons/io5"
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ShareSoicalMedia = ({ changeComponent }: any) => {
  const [link, setLink] = useState('https://tree-link.onrender.com/')
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    // eslint-disable-next-line
  }, []);


  return (
    <>
      <div className="SoicalmediaIcon">
        <div className="mainSoicalMediaICons">
          <div className="closeIcon" onClick={() => { changeComponent() }}><GrClose /></div>
          <div className="head">Share Link to Soical Media</div>
          <div className="container">
            <InstapaperShareButton url="https://tree-link.onrender.com/"  className='instagram' ><BsInstagram /> <span>Share On Instagram</span></InstapaperShareButton>
            <FacebookShareButton url="https://tree-link.onrender.com/" className='facebook' ><CiFacebook /> <span>Share On Facebook</span></FacebookShareButton>
            <WhatsappShareButton url="https://tree-link.onrender.com/" className='whatsapp' ><ImWhatsapp /> <span>Share On Whatsapp</span></WhatsappShareButton>
            <EmailShareButton url="https://tree-link.onrender.com/" className='mail' ><IoMailOutline /><span>Share On EmailBox</span></EmailShareButton>
          </div>
          <div className="or">OR</div>
          <div className="copyclip"><input type="text" value={link} onChange={({ target: { value } }) => setLink(value)} disabled /> <CopyToClipboard text={link}><button className='button'>Copy</button></CopyToClipboard></div>
        </div>
      </div>
    </>
  )
}

export default ShareSoicalMedia