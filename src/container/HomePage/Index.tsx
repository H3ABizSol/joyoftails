import React, { useState } from "react";
import "./index.scss";
import { IoShareOutline, IoMailOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { CiFacebook } from "react-icons/ci";
import logo from "../../assets/logo.jpg";
import img from "../../assets/img.jpg";
import pedigree from "../../assets/pedigree.jpg";
import gooddog from "../../assets/gooddog.jpg";
import meo from "../../assets/meo.jpg";
import moochie from "../../assets/moochie.jpg";
import virbac from "../../assets/virbac.jpg";
import orange from "../../assets/orange.jpg";
import farmina from "../../assets/farmina.webp";
import royalcanin from "../../assets/royalcanin.jpg";
import signature from "../../assets/signature.jpg";
import drools from "../../assets/drools.jpg";
import dogsandcats from "../../assets/dogsandcats.jpg";
import dogtreat from "../../assets/dogtreat.jpg";
import tailsofjoy from "../../assets/logo.jpg";
import dogsee from "../../assets/dogsee.jpg";
import jerhigh from "../../assets/jerhigh.jpg";
import doyfallsballs from "../../assets/doffyballs.jpg";
import petlover from "../../assets/petlover.png";
import catfest from "../../assets/catfest.jpg";
import bark from "../../assets/bark.jpg";
import waggy from "../../assets/waggyzone.jpg";
import bowler from "../../assets/bowlers.webp";
import dogstoys from "../../assets/dogstoys.jpg";
import birds from "../../assets/birds.jpg";
import benny from "../../assets/benny.jpg";
import barkbutler from "../../assets/barkbutler.webp";
import fofo from "../../assets/fofo.jpg";
import truelove from "../../assets/truelove.jpg";
import whoof from "../../assets/whoof.webp";
import vitapool from "../../assets/vitapool.jpg";
import happywings from "../../assets/happywings.webp";
import optimum from "../../assets/optimum.jpg";
import toya from "../../assets/toya.webp";
import shampo from "../../assets/shampo.jpg";
import mybeau from "../../assets/mybeau.jpg";
import skyec from "../../assets/skyec.jpg";
import wiggles from "../../assets/wiggles.webp";
import petshine from "../../assets/petshine.jpg";
import orangeshampo from "../../assets/orangeshampo.jpg";
import thewouf from "../../assets/thewouf.jpg";
import smarty from "../../assets/smarty.jpg";
import sofa from "../../assets/sofa.jpg";
import bowls from "../../assets/bowls.jpg";
import cages from "../../assets/cages.jpg";
import cosmatic from "../../assets/cosmatic.png";
import grooming from "../../assets/grooming.jpg";
import kity from "../../assets/smartypet.png";
import collar from "../../assets/collar.jpg";
import snack from "../../assets/snacks.jpg";
import toys from "../../assets/toys.avif";
import winter from "../../assets/winnter.jpg";
import forcan from "../../assets/forcan.webp";
import holypaws from "../../assets/hollypaw.jpg";
import ohmydog from "../../assets/ohmydog.jpg";

import ShareSoicalMedia from "./ShareSoicalMedia";
import Subscribe from "./Subscribe";

const HomePage = () => {
  const [navbar, setNavbar] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  const changeComponent = () => {
    setToggle(!toggle);
    if (!toggle) {
      document.body.classList.add("bg-salmon");
    } else {
      document.body.classList.remove("bg-salmon");
    }
  };

  const changeSub = () => {
    setToggle2(!toggle2);
  };

  const data = [
    {
      img: dogsandcats,
      title: "Dog & Cat Food",
      subData: [
        {
          imgsub: pedigree,
          titlesub: "Pedigree",
          url: "https://drive.google.com/file/d/1p3A8LmozO9xsQW-it3fSx5SkH4XxO-Jr/view?usp=sharing",
        },
        {
          imgsub: drools,
          titlesub: "drools",
          url: "https://drive.google.com/file/d/1SWeawpwWPtM2O2KTB0bJ4tLWo-CQk8cm/view?usp=sharing",
        },
        {
          imgsub: signature,
          titlesub: "Signature",
          url: "https://drive.google.com/file/d/13p3esPUz5nNcec_BjQegC70SvqMpwYcW/view?usp=sharing",
        },
        {
          imgsub: gooddog,
          titlesub: "Good Dog",
          url: "https://drive.google.com/file/d/1hI8ADK-VXgrbJWlCJvRvhAZdQHGw6Wfj/view?usp=sharing",
        },
        {
          imgsub: meo,
          titlesub: "MEO & smartheart",
          url: "https://drive.google.com/file/d/1ckTsw8XZ7lgrmhPBXCuLOBjALxKzOG7f/view?usp=sharing",
        },
        {
          imgsub: royalcanin,
          titlesub: "Royal Canin",
          url: "https://drive.google.com/file/d/1Ve-8IdsVa6bf5dhIthrCzi_iabn0dfzN/view?usp=sharing",
        },
        {
          imgsub: farmina,
          titlesub: "Farmina",
          url: "https://drive.google.com/file/d/1gGuUau82l2XvuMH3DtmEPpDlL458kYpo/view?usp=sharing",
        },
        {
          imgsub: moochie,
          titlesub: "Moochie",
          url: "https://drive.google.com/file/d/1NRhG4U50S2S9n_oeAFT8dXy6ue1QWCsu/view?usp=sharing",
        },
        {
          imgsub: virbac,
          titlesub: "Virbac",
          url: "https://drive.google.com/file/d/1MQW73RrjqAxc8oGR9d9i08be5RUkjf_a/view?usp=sharing",
        },
        {
          imgsub: orange,
          titlesub: "Orange",
          url: "https://drive.google.com/file/d/1MTTyArbAtIzuZexkGONWGyAoRA1vTIFK/view?usp=sharing",
        },
      ],
    },
    {
      img: dogtreat,
      title: "Treat",
      subData: [
        {
          imgsub: tailsofjoy,
          titlesub: "Tails Of Joy",
          url: "https://drive.google.com/file/d/1jWdN0rasueKCyVVOuMfeWckgU0GkDA-Q/view?usp=sharing",
        },
        {
          imgsub: jerhigh,
          titlesub: "Jerhigh",
          url: "https://drive.google.com/file/d/1xl84lbK3eNnRRAT4zp317d6FgW6v9ZMn/view?usp=sharing",
        },
        {
          imgsub: dogsee,
          titlesub: "Dogsee",
          url: "https://drive.google.com/file/d/1JOgruKbOZfUlRwplqSonrcKgLtiYMP2P/view?usp=sharing",
        },
        {
          imgsub: doyfallsballs,
          titlesub: "Doofyballs",
          url: "https://drive.google.com/file/d/1SpcQ-63yOuQj0cf8MkWB1aCTt0JM-BVw/view?usp=sharing",
        },
        {
          imgsub: petlover,
          titlesub: "Pet Lover",
          url: "https://drive.google.com/file/d/1idmDidbXC5jDaFh4aUTaqcKSgWMtBPfB/view?usp=sharing",
        },
        {
          imgsub: catfest,
          titlesub: "Cat fest",
          url: "https://drive.google.com/file/d/10LxrgqSQGBp6GeRMy8OBstCVsKFkQyG1/view?usp=sharing",
        },
        {
          imgsub: bark,
          titlesub: "Bark out loud",
          url: "https://drive.google.com/file/d/1SwAlhxckyAZnsCmUi37A2Qd5P0TTc3cW/view?usp=sharing",
        },
        {
          imgsub: bowler,
          titlesub: "Bowler's",
          url: "https://drive.google.com/file/d/1JgW8ccOLRcGPsaq6WllP0PTBWEri6GL_/view?usp=sharing",
        },
        {
          imgsub: waggy,
          titlesub: "Waggy zone ice-creams",
          url: "https://drive.google.com/file/d/1ZuHGcVy-aOfnA6i8dSrp7x3uMuY25Gq3/view?usp=sharing",
        },
      ],
    },
    {
      img: dogstoys,
      title: "Toy's & Accessories",
      subData: [
        {
          imgsub: benny,
          titlesub: "Benny's",
          url: "https://drive.google.com/file/d/1mh8Z548h5v7jJOOKZrtY8JyWsXQyNND7/view?usp=sharing",
        },
        {
          imgsub: barkbutler,
          titlesub: "BarkButler",
          url: "https://drive.google.com/file/d/1YThg8lUNixalj1ErQizyEyrsULEBHWEu/view?usp=sharing",
        },
        {
          imgsub: fofo,
          titlesub: "Fofos",
          url: "https://drive.google.com/file/d/14GQ9OL_dfF7KV-xooNNqbXUfY72ahNsU/view?usp=sharing",
        },
        {
          imgsub: truelove,
          titlesub: "True Love",
          url: "https://drive.google.com/file/d/1H6JrArb9JmgWgAvB1XcVAozOiwlfmOzr/view?usp=sharing",
        },
        {
          imgsub: whoof,
          titlesub: "Whoof Whoof",
          url: "https://drive.google.com/file/d/1TdJ9r1fTSOge0dBWxIuQ7yd_WSZo9ruu/view?usp=sharing",
        },
      ],
    },
    {
      img: birds,
      title: "Animal & Bird",
      subData: [
        {
          imgsub: vitapool,
          titlesub: "Vitapol",
          url: "https://drive.google.com/file/d/1yeqkypbLzJyoych0MB7i7lVAgBKLSLrf/view?usp=sharing",
        },
        {
          imgsub: happywings,
          titlesub: "Happy Wings",
          url: "https://drive.google.com/file/d/1xNjZDLdLSI0FKKAriSdMUSpBMgGmLpP-/view?usp=sharing",
        },
        {
          imgsub: optimum,
          titlesub: "Optimum",
          url: "https://drive.google.com/file/d/1dN1ZP58T5o0PFVDuZ-bxsOL9ubChwAIG/view?usp=sharing",
        },
        {
          imgsub: toya,
          titlesub: "Toya",
          url: "https://drive.google.com/file/d/1Tlcbs8LzTUke8pToi2gIcBj5ss2DY5nX/view?usp=sharing",
        },
      ],
    },
    {
      img: shampo,
      title: "Supplements & Shampoo",
      subData: [
        {
          imgsub: mybeau,
          titlesub: "My Beau",
          url: "https://drive.google.com/file/d/1CigcQ4wsfs7swOc96GHYwWDUFBOFmD4h/view?usp=sharing",
        },
        {
          imgsub: skyec,
          titlesub: "Skyec",
          url: "https://drive.google.com/file/d/16plBvvdlkuMwWjGyJ3WU-2GkRjj9Zvr9/view?usp=sharing",
        },
        {
          imgsub: wiggles,
          titlesub: "Wiggles",
          url: "https://drive.google.com/file/d/1WZHkAxHtACM7B_G_yHpDp2_uW2Gjb7Ws/view?usp=sharing",
        },
        {
          imgsub: petshine,
          titlesub: "Pet Shine",
          url: "https://drive.google.com/file/d/1yQfPxROLTKz-ySVsVUPq66oE52ek9a8w/view?usp=sharing",
        },
        {
          imgsub: orangeshampo,
          titlesub: "Orange Shampoo",
          url: "https://drive.google.com/file/d/1jhmPpIbvWbQvgxrv2Wd8jY6Xp36IRYEf/view?usp=sharing",
        },
        {
          imgsub: thewouf,
          titlesub: "The Wouf",
          url: "https://drive.google.com/file/d/1q2xyL2XnvLLCf24K3o9RhQMBUbxxYLl6/view?usp=sharing",
        },
      ],
    },
    {
      img: smarty,
      title: "Smarty Pet Dog",
      subData: [
        {
          imgsub: kity,
          titlesub: "Accessories Catalogue",
          url: "https://drive.google.com/file/d/1hwuLmLuokFxRvhr-afy5PH1xNm_Mm8gz/view?usp=sharing",
        },
        {
          imgsub: sofa,
          titlesub: "Beddings & Sofas Catalogue",
          url: "https://drive.google.com/file/d/1yFlO9Nyp0_EJfu1vy8s4b5eaChDujGNA/view?usp=sharing",
        },
        {
          imgsub: bowls,
          titlesub: "Bowls & Feeders Catalogue",
          url: "https://drive.google.com/file/d/1XWaXQLbJO9ctqgRwkS0F4965Y96Elw-V/view?usp=sharing",
        },
        {
          imgsub: cages,
          titlesub: "Cages & Carriers Catalogue",
          url: "https://drive.google.com/file/d/1TSYIX2t3Gu_RC6r8iIAipjiQ3UTMH_cd/view?usp=sharing",
        },
        {
          imgsub: cosmatic,
          titlesub: "Cosmetics & Sanitation Catalogue",
          url: "https://drive.google.com/file/d/1jbD0-iRJr2osgdD3l2hVwVXrQu35kGOy/view?usp=sharing",
        },
        {
          imgsub: grooming,
          titlesub: "Grooming Catalogue",
          url: "https://drive.google.com/file/d/1_wdoW2HKmXupMKTSUVI6FHjzLnD8Rw4L/view?usp=sharing",
        },
        {
          imgsub: img,
          titlesub: "Kitty Catalogue",
          url: "https://drive.google.com/file/d/1q2uXADqvGHhr5QT2lDcLu3kgGO5_Zwz2/view?usp=sharing",
        },
        {
          imgsub: collar,
          titlesub: "Leash, Collar, Harness & Chains Catalogue",
          url: "https://drive.google.com/file/d/1gU1RV7xewcRx7o9PxU3gj0QtBlMNadL_/view?usp=sharing",
        },
        {
          imgsub: snack,
          titlesub: "Snacks & Treats Catalogue",
          url: "https://drive.google.com/file/d/1CBiHE5Kmxjv6SC7zmpW4TZ2r8MbCSO1X/view?usp=sharing",
        },
        {
          imgsub: toys,
          titlesub: "Toys Catalogue",
          url: "https://drive.google.com/file/d/1qiEggXvkRd6K0iWAmb4967tpuWdGvO3P/view?usp=sharing",
        },
        {
          imgsub: winter,
          titlesub: "Winter Articles",
          url: "https://drive.google.com/file/d/1ELP1AxsqO8oGMIOKqsvxDJWl2V91KFsX/view?usp=sharing",
        },
        {
          imgsub: forcan,
          titlesub: "Forcans Catalogue",
          url: "https://drive.google.com/file/d/14ebCn0SGS-4heewSTK97te3z8WlVCVqg/view?usp=sharing",
        },
        {
          imgsub: holypaws,
          titlesub: "Holy Paws Catalogue",
          url: "https://drive.google.com/file/d/1PyR6TD2fMTKC2huIcwGpRKF0qrD0gNDn/view?usp=sharing",
        },
        {
          imgsub: ohmydog,
          titlesub: "Oh My Dog Catalogue",
          url: "https://drive.google.com/file/d/1mTU1hPQG_p0RVlcKEiyAaipP___d5Cha/view?usp=sharing",
        },
      ],
    },
  ];

  return (
    <>
      <div className="homepage">
        <section className="navbar">
          <div className={!navbar ? "share" : "shareBg"}>
            <div
              className="shareIcon"
              onClick={() => {
                changeComponent();
              }}
            >
              <IoShareOutline />
            </div>
            <a
              className="subscirbe"
              href="tel:+111111111111"
              target="_blank"
              rel="noreferrer"
            >
              <FiPhoneCall />
              <a href="tel:+111111111111" target="_blank" rel="noreferrer">
                Free Call{" "}
              </a>
            </a>
          </div>
          <div className="Logo">
            <img src={logo} alt="logo" />
            <h3>Tails of Joy</h3>
            <h4>Catalogue-2023</h4>
          </div>
        </section>
        <section className="catalog">
          <div className="mainCatalog">
            {React.Children.toArray(
              data.map((elem: { img: string; title: string; subData: any }) => {
                return (
                  <ChangeDivSection
                    data={data}
                    changeComponent={changeComponent}
                    elem={elem}
                  />
                );
              })
            )}
          </div>
        </section>
        <section className="social">
          <div className="mainSocial">
            <div className="icons">
              <a href="instagram.com/accounts/onetap/?next=%2F">
                <BsInstagram />
              </a>
              <a href="instagram.com/accounts/onetap/?next=%2F">
                <CiFacebook />
              </a>
              <a href="instagram.com/accounts/onetap/?next=%2F">
                <ImWhatsapp />
              </a>
              <a href="instagram.com/accounts/onetap/?next=%2F">
                <IoMailOutline />
              </a>
            </div>
          </div>
        </section>
      </div>
      {toggle ? <ShareSoicalMedia changeComponent={changeComponent} /> : ""}
      {toggle2 ? <Subscribe changeSub={changeSub} /> : ""}
    </>
  );
};

export default HomePage;

const ChangeDivSection = ({ elem, changeComponent }: any) => {
  const [change, setChange] = useState(false);
  const openDiv = () => {
    setChange(!change);
  };
  return (
    <>
      <div className="point">
        <div
          className="uppercase"
          onClick={() => {
            openDiv();
          }}
        >
          <img src={elem.img} alt="" className="images" />
          <div className="content">{elem.title}</div>
          <div
            className="shares"
            onClick={() => {
              changeComponent();
            }}
          >
            <IoShareOutline />
          </div>
        </div>
        {change ? (
          <div className="downcase">
            {React.Children.toArray(
              elem.subData.map(
                (ele: { imgsub: string; titlesub: string; url: string }) => {
                  return (
                    <a
                      href={ele.url}
                      className="points"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={ele.imgsub}
                        alt=""
                        height={60}
                        style={{ backgroundColor: "black" }}
                      />
                      <div className="title">{ele.titlesub}</div>
                    </a>
                  );
                }
              )
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
