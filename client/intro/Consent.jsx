import React from "react";

import { Centered, ConsentButton } from "meteor/empirica:core";
import BrowserDetection from "react-browser-detection";

export default class Consent extends React.Component {
  static renderConsent() {
    console.log("this is not firefox");
    return (
      <Centered>
        <div className="consent bp3-ui-text">
          <h2 className="bp3-heading"> Consent Form </h2>
       
          <h5 className="bp3-heading">BACKGROUND</h5>
          <p>
            You are being asked to take part in a research study.
            Take time to decide whether you want to volunteer to take part in this study.
            The purpose of this study is to investigate group problem-solving in different working conditions. 
          </p>
          <h5 className="bp3-heading">STUDY PROCEDURE</h5>
          <p>You will be asked to solve a problem-solving task.
           In this study, we will collect basic demographics such as age, race/ethnicity, gender, these questions are however optional and all data is completely anonymous. </p>

          <h5 className="bp3-heading">RISKS</h5>
          <p>
           There is a risk of loss of confidentiality; however, all identifying information will be stored separately from data. 
          </p>

          <h5 className="bp3-heading">BENEFITS</h5>
          <p>
          There are no direct benefits for taking part in this study.
          However, through this research, we will hopefully improve society by gaining a greater understanding of how groups solve problems. 
          </p>

          <h5 className="bp3-heading">VOLUNTARY PARTICIPATION </h5>
          <p>
          Participation is voluntary. 
          Refusal to participate will involve no penalty or loss of benefits to which you are otherwise entitled.
          You may discontinue participation at any time without any penalty or loss to benefits. 
          </p>

          <h5 className="bp3-heading">COSTS AND COMPENSATION TO PARTICIPANTS </h5>
          <p>
          There are no costs to you for participating in this research.
          If you are a university student participating as part of Out of Class Participation (OOCP) via the SONA platform, you will receive 1 course credit for completing this study.
          If you are an online worker from platforms such as MTurk or Prolific, you will be paid commensurate with the time required to participate. 
          </p>

          <h5 className="bp3-heading">What if I decide to Not Participate after I give consent? </h5>
          <p>
           If at any time you decide you do not want to participate, simply close the browser and discontinue the survey. 
          </p>

          <h5 className="bp3-heading">PERSON TO CONTACT </h5>
          <p>
        If you have questions about this study, you can contact Tyler Talbot at tyler.talbot@eccles.utah.edu.
        Institutional Review Board: Contact the Institutional Review Board (IRB) if you have questions regarding your rights as a research participant.
        The University of Utah IRB may be reached by phone at (801) 581-3655 or by e-mail at irb@hsc.utah.edu. 
        You may also contact the Research Participant Advocate (RPA) by phone at (801) 581-3803 or by email at participant.advocate@hsc.utah.edu. 
        Research Participant Advocate: You may also contact the Research Participant Advocate (RPA) by phone at (801) 581-3803 or by email at participant.advocate@hsc.utah.edu. 
          </p>

          <p>
        By participating in this study, you are giving your consent to participate in this research.
        Thank you for your willingness to participate!
          </p>

          <ConsentButton text="I AGREE" />
        </div>
      </Centered>
    );
  }

  renderNoFirefox = () => {
    console.log("this is fire fox");
    return (
      <div className="consent">
        <h1 className="bp3-heading" style={{ textAlign: "center", color: "red" }}>
          DO NOT USE FIREFOX!!
        </h1>
        <p style={{ textAlign: "center" }}>
          Please, don't use firefox! It breaks our game and ruins the experience
          for your potential teammates!
        </p>
      </div>
    );
  };

  render() {
    const browserHandler = {
      default: browser =>
        browser === "firefox" ? this.renderNoFirefox() : Consent.renderConsent()
    };

    return (
      <Centered>
        <BrowserDetection>{browserHandler}</BrowserDetection>
      </Centered>
    );
  }
}
