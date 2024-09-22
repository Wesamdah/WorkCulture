import React from "react";
import { useState, useEffect } from "react";
import "./aboutus.css";

export default function AboutUs() {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showText4, setShowText4] = useState(false);

  useEffect(() => {
    document.title = "Work Culture | About-Us";
  }, []);

  return (
    <div className="aboutus-wrapper">
      <div className="ethics">
        <div className="our-ethcis">
          <p>Our Ehics</p>
          <p className="wessam">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.ur vel bibendum lorem. Morbi convallis convallis
            diam sit amet lacinia. Aliquam in elementum tellus.ante pulvinar.
            Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
            Curabitur vel bibendum lorem. Morbi convallis convallis diam sit
            amet lacinia.
          </p>
        </div>
      </div>
      <div className="faq">
        <div className="faq-container">
          <p>FAQ</p>
          <div className="question">
            <div className="question-title">
              <p onClick={() => setShowText1(!showText1)}>How this work?</p>{" "}
              <span onClick={() => setShowText1(!showText1)}>
                {showText1 ? "-" : "+"}
              </span>
            </div>
            <div className={showText1 ? "show-answer" : "hide-answer"}>
              <p>
                Yet bed any for assistance indulgence unpleasing. Not thoughts
                all exercise blessing. Indulgence way everything joy alteration
                boisterous the attachment.
              </p>
            </div>
          </div>
          <div className="question">
            <div className="question-title">
              <p onClick={() => setShowText2(!showText2)}>
                Are there any additional fee?
              </p>{" "}
              <span onClick={() => setShowText2(!showText2)}>
                {showText2 ? "-" : "+"}
              </span>
            </div>
            <div className={showText2 ? "show-answer" : "hide-answer"}>
              <p>
                Yet bed any for assistance indulgence unpleasing. Not thoughts
                all exercise blessing. Indulgence way everything joy alteration
                boisterous the attachment.
              </p>
            </div>
          </div>
          <div className="question">
            <div className="question-title">
              <p onClick={() => setShowText3(!showText3)}>
                How can I get the app?
              </p>{" "}
              <span onClick={() => setShowText3(!showText3)}>
                {showText3 ? "-" : "+"}
              </span>
            </div>
            <div className={showText3 ? "show-answer" : "hide-answer"}>
              <p>
                Yet bed any for assistance indulgence unpleasing. Not thoughts
                all exercise blessing. Indulgence way everything joy alteration
                boisterous the attachment.
              </p>
            </div>
          </div>
          <div className="question">
            <div className="question-title">
              <p onClick={() => setShowText4(!showText4)}>
                What features do you offer and other not?
              </p>{" "}
              <span onClick={() => setShowText4(!showText4)}>
                {showText4 ? "-" : "+"}
              </span>
            </div>
            <div className={showText4 ? "show-answer" : "hide-answer"}>
              <p>
                Yet bed any for assistance indulgence unpleasing. Not thoughts
                all exercise blessing. Indulgence way everything joy alteration
                boisterous the attachment.
              </p>
            </div>
          </div>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            More FAQs{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
            >
              <path
                d="M0.155396 5.27618H10.1229M10.1229 5.27618L6.22255 0.957031M10.1229 5.27618L6.22255 10.1352"
                stroke="#FEFEFE"
                strokeWidth="2"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}
