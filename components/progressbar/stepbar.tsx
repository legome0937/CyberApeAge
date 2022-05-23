import { NextPage } from "next/types";
import "react-step-progress-bar/styles.css";

import { ProgressBar, Step } from "react-step-progress-bar";

const steps = [
  {
    status: "Intializing"
  },
  {
    status: "Sync"
  },
  {
    status: "Compile"
  },
  {
    status: "Copy Build"
  },
  {
    status: "Test"
  },
  {
    status: "Test"
  },
  {
    status: "Test"
  },
  {
    status: "Test"
  },
  {
    status: "Test"
  },
  {
    status: "Post"
  }
];
const Stepbar: NextPage = () => {

  const transfer = {
    status: "Compile" // change transfer status to progress bar
  };

  const getStepPosition = (transferStatus: any) => {
    return steps.findIndex(({ status }) => status === transferStatus);
  };

  return (
    <div style={{ margin: 45 }}>
      <ProgressBar
        width={1000}
        height={7}
        percent={
          100 *
          ((getStepPosition(transfer.status) + 1) / (steps.length - 1)) -
          1
        }
        filledBackground="linear-gradient(to right, white, white)"
      >
        {steps.map((step, index, arr) => {
          return (
            <Step key={index}
              // position={100 * (index / arr.length)}
              transition="scale"
              children={({ accomplished }) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    width: 15,
                    height: 15,
                    color: "black",
                    backgroundColor: accomplished ? "white" : "gray"
                  }}
                >
                  <br />
                  <br />
                  <br />
                  {step.status}
                </div>

              )}
            />
          );
        })}
      </ProgressBar>
      <div className="blur-item">
      </div>

    </div>




  )
}


export default Stepbar