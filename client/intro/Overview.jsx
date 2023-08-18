import React from "react";

import { Centered } from "meteor/empirica:core";
import { Button } from "@blueprintjs/core";

export default class Overview extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, treatment } = this.props;
    const social = treatment.playerCount > 1;
    return (
      <Centered>
        <div className="instructions">
          <h1 className={"bp3-heading"}> Game Overview </h1>
          <p>
            In this game, you will be{" "}
            <strong>
             assigning a group of students into dorm rooms.
            </strong> </p>
             <p>Your goal is to find the room assignment plan that maximizes overall
            satisfaction for the group while respecting certain constraints
            (e.g., some students can not live together in one room).
          </p>

          <p>
            You have at most{" "}
            <strong>{Math.ceil(treatment.stageDuration / 60.0)} minutes</strong>{" "}
            to work on the game. 
          </p>

          {social ? (
            <div>
              <p>
                <strong>
                  You will play this game simultaneously with{" "}
                  {treatment.playerCount - 1} other participants in real-time
                </strong>
                . You and these 3 participants will be a team. 
                Your team will submit one single room assignment plan together.
                {/*We will evaluate the quality of your*/}
                {/*plan through score and thus all team members will receive the*/}
                {/*same score in each task.*/}
              </p>
          
            </div>
          ) : (
            <p>
              In each task, you will submit a single room assignment plan. We
              will evaluate the quality of your plan by scoring it.
              At the end of the game, you will have the opportunity to earn a
              bonus payment and the amount is dependent on your accumulated
              score in all {treatment.nRounds} tasks.{" "}
              <em style={{ color: "red" }}>
                If we detect that you are inactive during a task, you will not
                receive a bonus for that task.
              </em>
            </p>
          )}
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
            <span className="bp3-icon-standard bp3-icon-double-chevron-right bp3-align-right"/>
          </button>
        </div>
      </Centered>
    );
  }
}
