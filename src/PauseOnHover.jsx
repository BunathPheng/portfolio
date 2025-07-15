import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import java   from "./image/Javaicon.png";
import SkillCom from "./SkillCom";
import React1 from "./image/React.png";
import Git  from "./image/Git.png";
import  Html  from "./image/Html.png";
import Css  from "./image/Css.png";
import Js  from "./image/Js.png";
import Tailwindcss  from "./image/Tailwind.png";
import Bootstrap from "./image/Bootstrap.png";
import Figma  from "./image/Figma.png";
import Docker  from "./image/Docker.png";
import Postgres  from "./image/Postgres.png";
function PauseOnHover() {
  var settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows : false,
    swipeToSlide : true,
    centerMode: true, 
    centerPadding: "80px"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <SkillCom image={React1} title={"React Js"} />
        </div>
        <div>
        <SkillCom  image={Git} title={"Git"}/>
        </div>
        <div>
        <SkillCom image={Html} title={"Html"}/>
        </div>
        <div>
        <SkillCom image={Css} title={"Css"} />
        </div>
        <div>
        <SkillCom image={Js} title={"JavaScript"}/>
        </div>
        <div>
        <SkillCom image={Tailwindcss} title={"Tailwind Css"}/>
        </div>
        <div>
        <SkillCom image={Bootstrap} title={"Bootstrap"}/>
        </div>
        <div>
        <SkillCom image={Figma} title={"Figma"}/>
        </div>
        <div>
        <SkillCom image={Docker} title={"Docker"}/>
        </div>
        <div>
        <SkillCom image={Postgres} title={"Postgres"}/>
        </div>
      </Slider>
    </div>
  );
}

export default PauseOnHover;
