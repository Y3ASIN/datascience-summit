import React from "react";
import GradientButton from "./Button";

const Instruction: React.FC = () => {
  return (
    <section className="flex flex-col font-poppins sm:flex-row">
      <div className="flex w-full flex-col items-center justify-center px-6 py-2 sm:w-1/2 sm:border-none sm:py-4">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold sm:text-5xl">💰 50K</h1>
          <h1 className="text-md leading-6 sm:text-2xl sm:leading-9">
            Get Ready to Win Big: <br className="hidden sm:block" />
            <span className="font-bold text-purple-500">
              A Massive 50K Prize Pool
            </span>{" "}
            <br className="hidden sm:block" /> Up for Grabs!
          </h1>

          <GradientButton text="Register Now" />
        </div>
      </div>

      <hr className="my-2 block rounded-lg sm:hidden" />

      <div className="my-3 flex flex-col items-center justify-center">
        <div className="flex flex-col items-start">
          <h1 className="text-md font-semibold sm:text-3xl">Instructions</h1>
          <div>
            <ul className="list-disc text-xs sm:text-lg">
              <li>To register, go to the registration link.</li>
              <li>Select appropriate event from the menu.</li>
              {/* <li>
                Pay <span className="font-semibold">100</span> BDT for Technical
                Session or <span className="font-semibold">500</span> BDT for
                Idea Contest.
              </li> */}
              <li>You can pay through Nagad, bKash, or Rocket</li>
              <li>
                Complete the form and send us the{" "}
                <span className="font-semibold"> transaction ID</span>.
              </li>
              <li>You will get a confirmation email shortly.</li>
              <li>
                For any further query, please email{" "}
                <strong>arman.swe@diu.edu.bd</strong> or{" "}
                <strong>dsclub@diu.edu.bd</strong>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instruction;
