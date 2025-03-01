import React from "react";
import Stepper, { Step } from "../component/Stepper";
import Navbar from "../component/Navbar";

export default function About() {
  return (
    <div className="bg-black">
      <Navbar></Navbar>
      <Stepper
        initialStep={1}
        onStepChange={(step) => {
          console.log(step);
        }}
        onFinalStepCompleted={() => console.log("All steps completed!")}
        backButtonText="Previous"
        nextButtonText="Next"
        className="text-white w-full"
      >
        <Step>
          <h2>Welcome to the React Bits stepper!</h2>
          <p>Check out the next step!</p>
        </Step>
        <Step>
          <h2>Step 2</h2>

          <p>Custom step content!</p>
        </Step>
        <Step>
          <h2>How about an input?</h2>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name?"
          />
        </Step>
        <Step>
          <h2>Final Step</h2>
          <p>You made it!</p>
        </Step>
      </Stepper>
    </div>
  );
}
