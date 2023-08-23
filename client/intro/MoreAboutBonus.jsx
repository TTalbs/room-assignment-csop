import React from "react";

import {Centered} from "meteor/empirica:core";

export default class MoreAboutBonus extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, treatment } = this.props;
    const social = treatment.playerCount > 1;
    return (
      <Centered>
        <div className="instructions">
          <h1 className={"bp3-heading"}> How is the game scored?</h1>

          <p>
            In each task, we use "score" to evaluate the quality of the room
            assignment plan that {social ? "your team" : "you"} came up with.{" "}
            <strong style={{ color: "red" }}>
              {" "}
              Your score starts counting only when you have a complete
              assignment
            </strong>{" "}
            (that is, each student has been assigned to a room).
          </p>

          <p>The score of your assignment is calculated as:</p>

          <div style={{ textAlign: "center" }}>
            <p>
              <strong style={{ color: "blue" }}>
                S = The sum of students' ratings of their assigned rooms - 100 *
                the number of violated constraints
              </strong>
            </p>
          </div>

          <p>
            That means,{" "}
            <strong>
              for each constraint you violate, you get 100 points deducted.
            </strong>
          </p>

          {social ? (
            <p>
              <strong>
               IMPORTANT: MAXIMUM SCORE FOR THIS GAME IS: 996!
              </strong>.
            </p>
          ) : null}

          {social ? (
            <div style={{ textAlign: "center" }}>
         
            </div>
          ) : null}


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
