import React from "react";

import { Centered } from "meteor/empirica:core";
export default class RoomArrangements extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, treatment } = this.props;
    return (
      <Centered>
        <div className="instructions">
          <h1 className={"bp3-heading"}> What is a neighbor?</h1>
          <p>
           
          </p>

          <div className="image">
            {/*<img src="/experiment/instruction-room-arrangements.svg" />*/}
          <img src="/experiment/superhard-arrangement.png" />
          </div>

          <p>
            {" "}
            <strong>
             A "neighbor" is defined as rooms with consecutive numbers (E.g., 1...2...3...4...).
            </strong> </p>
            <p>For example: Room 102 is a neighbor of Room 101 and Room 103, but not Room 104,
             Room 101 is only a neighbor of Room 102, not Room 103.
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
