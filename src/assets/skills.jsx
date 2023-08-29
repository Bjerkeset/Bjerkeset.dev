import React from "react";
import "../App.css";

const cards = [
  {
    title: "Ux/Ul Design",
    img: "../assets/images/icon-figma.png",
    text: "As a UX/UI designer, I combine creativity with a deep understanding of user needs, creating intuitive and appealing interfaces that enhance user interaction and satisfaction",
    id: 1,
  },
  {
    title: "Javascript and React",
    img: "../assets/images/icon-js.png",
    text: "Expert in JavaScript and React, I build efficient, user-friendly, and robust web applications, adhering to best coding practices.",
    id: 2,
  },
  {
    title: "Ai Tooling",
    img: "../assets/images/ai.png",
    text: "I use AI tools to leverage my working capacity and solve problems, always staying abreast of technological advancements to produce meaningful solutions.",
    id: 3,
  },
  {
    title: "CSS and Tailwind",
    img: "../assets/images/tailwind.png",
    text: "I create responsive, aesthetically pleasing web designs, focusing on superior UX/UI.",
    id: 4,
  },
  {
    title: "Blockchain",
    img: "../assets/images/blockchain.png",
    text: "With a strong grasp of blockchain technology, I am exploring innovative ways to leverage this decentralized system for improved security and transparency",
    id: 5,
  },
];

function Skills() {
  return (
    <div className="">
      <div className="bg-gradient-divider h-0.5"></div>
      <section
        id="about"
        className="flex flex-col gap-8 md:flex-row justify-center xl:p-[10vw] pt-16  place-items-center bg-gradient-introSection "
      >
        <div className="md:sticky top-0 ml-8 flex justify-center mb-auto ">
          <div className="flex flex-col gap-8 w-2/3">
            <div>
              <h2 className="text-3xl underline text-gray-200 font-extrabold">
                ABOUT ME
              </h2>
            </div>
            <div>
              <p className="text-gray-300 xl:text-xl font-semibold">
                In a world that constantly evolves, so do I. With a passion for
                technology and an ever-expanding toolkit, I am dedicated to
                building innovative solutions that push boundaries. Below is an
                overview of my proficiency in various areas, from front-end
                development with JavaScript and React, mastering AI tooling,
                creating engaging designs with CSS and Tailwind, to exploring
                the future of transactions with Blockchain. Each skill reflects
                my dedication to learning and growing, forming a foundation on
                which I build my work. Join me in exploring the depth of my
                expertise.
              </p>
            </div>
            <fieldset className="space-y-1 sm:w-60 text-gray-300">
              <div className="">
                <div className="border-b mb-4 text-center">
                  <h2 className="text-2xl ">Techical sills</h2>
                </div>
                <p className="">UX Design</p>
                <div
                  className="h-2 rounded-full my-2"
                  style={{
                    background:
                      "linear-gradient(to right, #5eeb5b 50%, grey 65%)",
                  }}
                ></div>
                <p className="mt-4">HTML</p>
                <div
                  className="h-2 rounded-full my-2"
                  style={{
                    background:
                      "linear-gradient(to right,  #5eeb5b 75%, grey 90%)",
                  }}
                ></div>
                <p className="mt-4">CSS</p>
                <div
                  className="h-2 rounded-full my-2"
                  style={{
                    background:
                      "linear-gradient(to right,  #5eeb5b 75%, grey 90%)",
                  }}
                ></div>
                <p className="mt-4">Vanilla JS</p>
                <div
                  className="h-2 rounded-full my-2"
                  style={{
                    background:
                      "linear-gradient(to right,  #5eeb5b 50%, grey 60%)",
                  }}
                ></div>
                <p className="mt-4 ">React</p>
                <div
                  className="h-2 rounded-full my-2 skillbar-class"
                  style={{
                    background:
                      "linear-gradient(to right, #5eeb5b 30%, grey 40%)",
                  }}
                ></div>

                {/* <div aria-hidden="true" className="flex justify-between px-1">
                  <span>I</span>
                  <span>II</span>
                  <span>III</span>
                  <span>IV</span>
                  <span>V</span>
                </div> */}
              </div>
            </fieldset>
          </div>
        </div>
        <div className="flex flex-col ">
          {cards.map((card) => {
            return <Card {...card} key={card.id} />;
          })}
        </div>
      </section>
    </div>
  );
}

function Card(props) {
  const { img, title, text, id } = props;

  return (
    <>
      <div className="md:w-1/2 max-w-xl min-w-[35vw] mr-8 flex bg-background-main bg-opacity-20 flex-col p-8">
        <div className="flex">
          <img className="w-24 mr-auto" src={img} alt={title} />{" "}
          <div className="ml-auto text-outline"> {id} </div>
        </div>
        <div>
          <h2 className="text-3xl"> {title} </h2>
        </div>
        <div>{text}</div>
      </div>
      <div className="bg-gradient-divider h-0.5 max-w-xl min-w-[35vw]"></div>
    </>
  );
}

export default Skills;
