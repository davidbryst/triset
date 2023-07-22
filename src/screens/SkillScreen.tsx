// import { SimpleGrid, Grid } from "@mantine/core";
import { FaUserTie, FaBook, FaAlignLeft, FaHeart } from "react-icons/fa";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { useRef } from "react";
import Carousel from "../components/CirculareProgress";
import CirculareProgress from "../components/CirculareProgress";
import LinearProgress from "../components/LineareProgress";
import {
  skillsDesigner,
  skillsDevMobile,
  skillsDevWeb,
} from "../utils/constant/skill";
import {
  skillLanguages,
  skillSoftwares,
  skillTools,
} from "../utils/constant/allSkill";
// import photo from "/photo.png";

const SkillScreen = () => {
  const [section1, section2, section3, section4, ele] = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const carouselHandler = (list: any[], index: number) => {
    return (
      "h-full flex flex-row" +
      " w-[" +
      list.length * 800 +
      "px] -translate-x-[" +
      index * 800 +
      "px]"
    );
  };
  const slideTo = (target: string) => {
    document.location.href = target;
  };
  const hover = () => {
    if (
      section1.current &&
      section2.current &&
      section3.current &&
      section4.current
    ) {
      section1.current.className = "nav";
      section2.current.className = "nav";
      section3.current.className = "nav";
      section4.current.className = "nav";
    }
  };
  const _hover = () => {
    if (
      section1.current &&
      section2.current &&
      section3.current &&
      section4.current
    ) {
      // section1.current.className = "nav nav-h";
      // section2.current.className = "nav nav-h";
      // section3.current.className = "nav nav-h";
      // section4.current.className = "nav nav-h";
    }
  };
  const passions = [
    ["/img/basket.jpg", "basket ball"],
    ["/img/game.jpg", "jeux video"],
    ["/img/hardware.jpg", "hardware"],
    ["/img/manga.jpg", "manga"],
    ["/img/muscu.jpg", "sport et musculation"],
  ];
  return (
    <div className="relative">
      <div className="fixed h-full left-16 transition-all ease-out duration-300 -translate-x-1/2 flex flex-col items-center justify-center">
        <div
          onMouseEnter={hover}
          onMouseLeave={_hover}
          className="bg-white shadow-sm border border-gray p-1 rounded-full flex flex-col items-center justify-center"
        >
          <div
            onMouseEnter={() => slideTo("#1")}
            className="p-1.5 border border-spacing-6 border-gray bg-trans rounded-full m-1"
          >
            <span className="nav nav-h" ref={section1}>
              <FaUserTie />
            </span>
          </div>
          <div className="h-10 w-0.5 rounded-full bg-gray m-1"></div>
          <div
            onMouseEnter={() => slideTo("#2")}
            className="p-1.5 border border-spacing-6 border-gray bg-trans rounded-full m-1"
          >
            <span className="nav nav-h" ref={section2}>
              <FaBook />
            </span>
          </div>
          <div className="h-10 w-0.5 rounded-full bg-gray m-1"></div>
          <div
            onMouseEnter={() => slideTo("#3")}
            className="p-1.5 border border-spacing-6 border-gray bg-trans rounded-full m-1"
          >
            <span className="nav nav-h" ref={section3}>
              <FaAlignLeft />
            </span>
          </div>
          <div className="h-10 w-0.5 rounded-full bg-gray m-1"></div>
          <div
            onMouseEnter={() => slideTo("#4")}
            className="p-1.5 border border-spacing-6 border-gray bg-trans rounded-full m-1"
          >
            <span className="nav nav-h" ref={section4}>
              <FaHeart />
            </span>
          </div>
        </div>
      </div>
      <div id="1" className=" bg-white h-screen p-0 m-0">
        <div className="h-[75%] flex">
          <div className=" flex-1 flex justify-center items-center">
            <div className="p-2 bg-amber-50 rounded-full">
              <div className="p-4 bg-amber-100 rounded-full">
                <div className="bg-slate-700 w-64 h-96 rounded-full"></div>
                {/* <div className="bg-[url('/photo.png')] w-64 h-96 rounded-full"></div> */}
              </div>
            </div>
          </div>
          <div className=" bg-amber-50 flex-1 flex flex-col justify-center items-center gap-5">
            <div>
              <span className="text-4xl font-semibold">DAVID</span> <br />
              {/* <span className="text-4xl">OUATTARA</span>     */}
              <span className="text-4xl font-semibold">ABRAHAM</span>
            </div>
            <div className="bg-slate-700 h-0.5 w-1/2"></div>
            <span className="text-sm text-slate-700">
              Je suis un développeur web adaptatif, créatif et qui apprend vite;
              avec de solides compétences.
            </span>
            <div className="mt-6">
              {/* <span className="h-1 p-0.5 m-2 rounded-full bg-slate-600"></span> */}
              <span>Apprend vite</span>
              <span className="h-1 p-0.5 m-2 rounded-full bg-slate-600"></span>
              <span>Autonome</span>
              <span className="h-1 p-0.5 m-2 rounded-full bg-slate-600"></span>
              <span>Adaptatif</span>
              <span className="h-1 p-0.5 m-2 rounded-full bg-slate-600"></span>
              <span>Polyvalent</span>
              <span className="h-1 p-0.5 m-2 rounded-full bg-slate-600"></span>
              <span>Créatif</span>
              {/* <span className="h-1 p-0.5 m-2 rounded-full bg-slate-600"></span> */}
            </div>
          </div>
        </div>
        <div className="h-[25%] flex justify-center items-center gap-10 bg-amber-50">
          {passions.map((p, index) => (
            <div className="p-1 bg-amber-50 rounded-xl">
              <div className=" p-1 bg-amber-100 rounded-xl">
                <div className="text-center border border-slate-700 rounded-xl bg-slate-700 text-white text-sm font-light">
                  <img
                    className="h-28 w-36 object-cover rounded-xl rounded-br-sm rounded-bl-sm"
                    src={p[0]}
                    alt={p[1]}
                  />
                  <span>{p[1]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        id="2"
        className="flex px-16 gap-3 bg-gradient-to-r from-amber-100 to-white justify-center h-screen items-center"
      >
        <div className=" h-max p-1 flex">
          <div className="w-full">
            {[...Array(4)].map((index, _) => (
              // <div className={(_%2==1)?"bg-slate-400 flex my-2 justify-end":"bg-slate-400 flex my-2"}>
              <div className={" flex my-6 items-center"}>
                <div
                  className={
                    "flex bg-white relative group border border-gray w-max p-2 rounded-2xl gap-2"
                  }
                >
                  <div className="p-2 text-slate-600">
                    <div>Lycée Classique D'Abidjan</div>

                    <div className="font-extrabold">Baccalauréat D</div>
                  </div>
                  <div className="bg-slate-700 text-white flex flex-col justify-center items-center p-2 px-4 rounded-xl text-[10px]">
                    <span>2018</span>
                    <div className="bg-white w-5/6 h-0.5"></div>
                    <span>2019</span>
                  </div>
                  <div className="absolute hidden group-hover:block -translate-y-1/4 z-10 left-[18rem] w-80 text-[12px] rounded-xl p-5 font-semibold text-slate-600 bg-white border border-gray shadow-md">
                    Le diplômé de cette licence peuvent exercer
                    comme:Développeur d’applications mobiles et web; Testeur
                    etintégrateurs de solutions web et multimédia;
                    Webdesigner;Community manager; Media Manager;
                    Développeurmultimédia; Webmarketeur; Webmaster
                  </div>
                </div>

                <div className={"bg-slate-500 ml-5 w-5 h-1 rounded-full"}></div>
              </div>
            ))}
          </div>
          <div className="p-0.5 rounded-full mx-5 bg-slate-500"></div>
          <div className="w-full mt-14">
            {[...Array(3)].map((index, _) => (
              // <div className={(_%2==1)?"bg-slate-400 flex my-2 justify-end":"bg-slate-400 flex my-2"}>
              <div className={" flex my-6 items-center flex-row-reverse"}>
                <div
                  className={
                    "flex bg-white relative group border border-gray w-max p-2 rounded-2xl gap-2 flex-row-reverse"
                  }
                >
                  <div className="p-2 text-slate-600">
                    <div>Lycée Classique D'Abidjan</div>

                    <div className="font-extrabold">Baccalauréat D</div>
                  </div>
                  <div className="bg-slate-700 text-white flex flex-col justify-center items-center p-2 px-4 rounded-xl text-[10px]">
                    <span>2018</span>
                    <div className="bg-white w-5/6 h-0.5"></div>
                    <span>2019</span>
                  </div>
                  <div className="absolute hidden group-hover:block -translate-y-1/4 z-10 -left-[21rem] w-80 text-[12px] rounded-xl p-5 font-semibold text-slate-600 bg-white border border-gray shadow-md">
                    Le diplômé de cette licence peuvent exercer
                    comme:Développeur d’applications mobiles et web; Testeur
                    etintégrateurs de solutions web et multimédia;
                    Webdesigner;Community manager; Media Manager;
                    Développeurmultimédia; Webmarketeur; Webmaster
                  </div>
                </div>

                <div className={"bg-slate-500 mr-5 w-5 h-1 rounded-full"}></div>
              </div>
            ))}
          </div>
        </div>
        <div className=" p-5 flex-wrap">
          {[...Array(4)].map((index, _) => (
            // <div className={(_%2==1)?"bg-slate-400 flex my-2 justify-end":"bg-slate-400 flex my-2"}>
            <div className={" flex my-6"}>
              <div
                className={
                  "flex bg-white relative group border border-gray w-max p-2 rounded-2xl gap-2"
                }
              >
                <div className="p-2 text-slate-600">
                  <div>Lycée Classique D'Abidjan</div>

                  <div className="font-extrabold">Baccalauréat D</div>
                </div>
                <div className="bg-slate-700 text-white flex flex-col justify-center items-center p-2 px-4 rounded-xl text-[10px]">
                  <span>2018</span>
                  <div className="bg-white w-5/6 h-0.5"></div>
                  <span>2019</span>
                </div>
                <div className="absolute hidden group-hover:block -translate-y-1/4 z-10 -left-[21rem] w-80 text-[12px] rounded-xl p-5 font-semibold text-slate-600 bg-white border border-gray shadow-md">
                  Le diplômé de cette licence peuvent exercer comme:Développeur
                  d’applications mobiles et web; Testeur etintégrateurs de
                  solutions web et multimédia; Webdesigner;Community manager;
                  Media Manager; Développeurmultimédia; Webmarketeur; Webmaster
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        id="3"
        className=" bg-gradient-to-r from-amber-100 to-slate-300 h-screen p-5 flex justify-end items-center"
      >
        <div className="flex h-full w-[95%]">
          <div className="flex-[1] gap-5 flex flex-col justify-center items-center"></div>
          <div className="flex-[1] gap-5 flex flex-col justify-center items-center">
            <div className="h-[85%] w-[85%] rounded-xl bg-slate-600 flex flex-wrap p-6">
              <div>
                <div className="font-bold text-slate-100 text-xl">Language</div>
                {skillLanguages.map((skill) => (
                  <span className="p-1 px-3 bg-trans border border-gray rounded-2xl m-2 inline-block">
                    {skill.name}
                    {/* <span className="text-xs text-slate-700 ml-1">80%</span> */}
                  </span>
                ))}
              </div>
              <div>
                <div className="font-bold text-slate-100 text-xl">
                  Technologie
                </div>
                {skillTools.map((skill) => (
                  <span className="p-1 px-3 bg-trans border border-gray rounded-2xl m-2 inline-block">
                    {skill.name}
                  </span>
                ))}
              </div>
              <div>
                <div className="font-bold text-slate-100 text-xl">Logiciel</div>
                {skillSoftwares.map((skill) => (
                  <span className="p-1 px-3 bg-trans border border-gray rounded-2xl m-2 inline-block">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="flex-[1] gap-5 flex flex-col justify-center items-center">
            <div className="h-10 w-52 rounded-xl bg-slate-600 flex justify-center items-center text-white font-semibold">
              {" "}
              Dev Mobile
            </div>
            <div className="h-[85%] w-[85%] rounded-xl bg-slate-600 flex flex-wrap p-3">
              {skillsDevMobile.map((skill) => (
                <LinearProgress
                  technoImg={skill.img}
                  technoName={skill.name}
                  percent={skill.percents}
                />
              ))}
            </div>
          </div>
          <div className="flex-[1] gap-5 flex flex-col justify-center items-center">
            <div className="h-10 w-52 rounded-xl bg-slate-600 flex justify-center items-center text-white font-semibold">
              {" "}
              Designer
            </div>
            <div className="h-[85%] w-[85%] rounded-xl bg-slate-600 flex flex-wrap p-3">
              {skillsDesigner.map((skill) => (
                <LinearProgress
                  technoImg={skill.img}
                  technoName={skill.name}
                  percent={skill.percents}
                />
              ))}
            </div>
          </div> */}
        </div>
      </div>
      <div
        id="4"
        className=" bg-gradient-to-r from-amber-100 to-slate-300 h-screen p-5 flex justify-center items-center"
      >
        <div className="flex flex-col w-[75%] h-[75%] rounded-2xl p-5 bg-white border border-gray">
          <div className="felx-[1]">
            {/* <div>Disponible pour un contrat</div>
            <div> */}
            <span className="p-1 px-3 bg-trans border border-gray rounded-2xl m-2">
              Freelance
            </span>
            <span className="p-1 px-3 bg-trans border border-gray rounded-2xl m-2">
              Consultant
            </span>
            <span className="p-1 px-3 bg-trans border border-gray rounded-2xl m-2">
              Employer
            </span>
            {/* </div> */}
          </div>
          {/* <div className="felx-[1]">
            <div>Ce sont mes domaines de prédilections</div>
            <div>
              <span className="p-1 px-3 bg-trans border border-gray rounded-2xl m-2">UX/UI Design</span>
              <span className="p-1 px-3 bg-trans border border-gray rounded-2xl m-2">Fullstack Web Developpement</span>
              <span className="p-1 px-3 bg-trans border border-gray rounded-2xl m-2"></span>
              <span className="p-1 px-3 bg-trans border border-gray rounded-2xl m-2"></span>
              <span className="p-1 px-3 bg-trans border border-gray rounded-2xl m-2"></span>
            </div>
          </div> */}
          <div className="felx-[1] border-b-0 p-5 border-slate-800">
            {" "}
            <span className="font-bold text-5xl text-slate-800">Contact</span>
          </div>
          <div className=" rounded-full bg-slate-800 p-1 mx-5"></div>
          <div className="felx-[1] w-[80%] flex gap-5 justify-center px-20 pt-5">
            <div className="m-2 font-semibold text-xl text-slate-800">
              Email
            </div>
            <div className="flex-[1]">
              {[
                "davidBryster21@icloud.com",
                "davidBryster21@gmail.com",
                "david22works@gmail.com",
              ].map((ele) => (
                <div className="flex gap-2 my-2">
                  {ele}{" "}
                  <span>
                    <BsBoxArrowInUpRight />
                  </span>
                </div>
              ))}
            </div>
            <div className="m-2 font-semibold text-xl text-slate-800">
              Reseaux
            </div>
            <div className="flex-[1]">
              {["Instagrame", "GitHub", "linkedin"].map((ele) => (
                <div className="flex gap-2 my-2">
                  {ele}{" "}
                  <span>
                    <BsBoxArrowInUpRight />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkillScreen;
