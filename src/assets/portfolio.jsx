import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const cards = [
  {
    title: "NOROFF YEAR 1 EXAM",
    img: "../assets/images/exam-image-2.png",
    site_url: "https://fed1-exam-project-bjerkeset.vercel.app/",
    github: "https://github.com/Bjerkeset/fed1-exam-project-Bjerkeset",

    Tag_js: true,
    Tag_tailwind: false,
    Tag_Client: false,
    Tag_cms: true,
    Tag_htmlCss: true,
    Tag_figma: true,
    Tag_blockchain: false,
    id: 1,
  },
  {
    title: "TICKETING SYSTEM",
    img: "../assets/images/ticketing-project-1.png",
    site_url: "https://gorgeous-paletas-3d837e.netlify.app/",
    github:
      "https://github.com/Bjerkeset/CA-Interaction-design-Bendik-Bjerkeset",
    Tag_js: true,
    Tag_tailwind: false,
    Tag_Client: false,
    Tag_cms: false,
    Tag_htmlCss: true,
    Tag_figma: false,
    Tag_blockchain: true,
    id: 2,
  },
  {
    title: "NOROFF SEMESTER 1 EXAM",
    img: "../assets/images/semester-project-1.png",
    site_url: "https://fanciful-paprenjak-811add.netlify.app/",
    github: "https://github.com/Bjerkeset/CSM-semester-project",
    Tag_js: true,
    Tag_tailwind: false,
    Tag_Client: false,
    Tag_cms: false,
    Tag_htmlCss: true,
    Tag_figma: true,
    Tag_blockchain: false,
    id: 2,
  },
];

function Portfolio() {
  return (
    <div className=" flex justify-center bg-gradient-introSection w-full ">
      <div className="bg-gradient-divider h-0.5"></div>

      <section
        id="portfolio"
        className="flex gap-y-16 py-16 flex-col max-w-screen-xl "
      >
        <div className=" mb-auto pt-16">
          <div className=" flex max-w-[90vw] m-auto flex-wrap gap-y-12 flex-col content-center justify-center lg:justify-between lg:flex-row">
            <div className="max-w-lg flex justify-">
              <h2 className="text-4xl xl:text-6xl font-bold">
                My Jurney So Far
              </h2>
            </div>
            <div className="max-w-lg flex justify-center">
              <p className=" text-gray-300 sm:text-xl font-thin">
                Take a moment to browse through my diverse array of projects.
                Each one stands as a testament to my proficiency in various
                technical domains, my problem-solving capabilities, and my
                dedication to providing effective and efficient solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-y-12 flex-col content-center justify-center lg:justify-between lg:flex-row ">
          {cards.map((card) => {
            return <Card {...card} key={card.id} />;
          })}
        </div>
      </section>
    </div>
  );
}

function Card(props) {
  const {
    img,
    title,
    text,
    id,
    site_url,
    github,
    Tag_js,
    Tag_tailwind,
    Tag_Client,
    Tag_cms,
    Tag_htmlCss,
    Tag_figma,
    Tag_blockchain,
  } = props;

  return (
    <>
      <div className="flex flex-col">
        <div className=" flex rounded-xl max-w-[500px] justify-between ">
          <div
            className="card-class h-80 min-w-[300px] rounded-xl w-[90vw] flex flex-col p-4 ml-auto mt-auto"
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            <div className="overlay-class">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus ullam quisquam earum, nesciunt mollitia, reprehenderit
                amet distinctio sequi, non enim ab. Numquam quam vitae officia.
              </p>
            </div>
            <div className="flex z-10 flex-col ml-auto mt-auto ">
              {site_url && (
                <a
                  href={site_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <button className="border border-transparent group-hover:border-gray-400 border-opacity-50 group-hover:border-opacity-100 group-hover:bg-opacity-80 py-4 px-4 rounded-full my-2 bg-gray-400 bg-opacity-50">
                    <FontAwesomeIcon icon={faLink} className="h-8" />
                  </button>
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <button className="border border-transparent group-hover:border-gray-400 border-opacity-50 group-hover:border-opacity-100 group-hover:bg-opacity-80 py-4 rounded-full bg-gray-400 bg-opacity-50">
                    <FontAwesomeIcon icon={faGithub} className="h-8" />
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
        <div>
          <ul className="flex flex-wrap py-2">
            {Tag_js && <li className="tag-item">JavaScript</li>}
            {Tag_tailwind && <li className="tag-item">Tailwind</li>}
            {Tag_Client && <li className="tag-item">Client</li>}
            {Tag_cms && <li className="tag-item">CMS</li>}
            {Tag_htmlCss && <li className="tag-item">HTML/CSS</li>}
            {Tag_figma && <li className="tag-item">Figma</li>}
            {Tag_blockchain && <li className="tag-item">Blockchain</li>}
          </ul>
          <div>
            <h2 className="text-3xl">{title}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
