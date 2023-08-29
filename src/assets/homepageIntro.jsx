import React from "react";
import "../App.css";

function IntroSection() {
  return (
    <div className="">
      <div className="bg-gradient-divider h-0.5"></div>
      <section className=" flex justify-center place-items-center bg-gradient-introSection h-[20vh]">
        <div>
          <h2 className="text-outline text-3xl md:text-3xl xl:text-6xl align-middle">
            LET'S WORK TOGETHER
          </h2>
        </div>
      </section>
    </div>
  );
}

export default IntroSection;
