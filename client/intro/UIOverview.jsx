import React from "react";

import { Centered } from "meteor/empirica:core";
export default class UIOverview extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, treatment } = this.props;
    const imagePath =
      treatment.playerCount > 1
        ? "experiment/groupUIExample.svg"
        : "experiment/indUIExample.svg";

    console.log("imagePath", imagePath);

    return (
      <Centered>
        <div className="instructions">
          <h1 className={"bp3-heading"}> Game Interface</h1>
          <p>
            We are almost there! please take a second to familiarize yourself
            with the game User Interface shown here:
          </p>

          <div className="image">
            <img src={imagePath} style={{ border: "2px solid" }} />
          </div>

          <p>
            The game ends when either time runs out, or All team members click the green "satisfied" button independently.
          </p>

          <p>
            Now you know where everything goes and are ready to take the short quiz! 
          </p>

          <button
            type="button"
            className="bp3-button bp3-intent-nope bp3-icon-double-chevron-left"
            onClick={onPrev}
            disabled={!hasPrev}
          >
            Previous
          </button>
          <button
            type="button"
            className="bp3-button bp3-intent-primary"
            onClick={onNext}
            disabled={!hasNext}
          >
            Next
            <span className="bp3-icon-standard bp3-icon-double-chevron-right bp3-align-right" />
          </button>
        </div>
      </Centered>
    );
  }
}
