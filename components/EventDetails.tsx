import React from "react";

const EventDetails: React.FC = () => {
  return (
    <section>
      <div className="sm:grid-col-3 grid grid-cols-1 gap-5">
        <div>
          <h1>Data Hackathon</h1>
          <h3>Registration Process</h3>
          <p>Description of the event</p>
          <button>Registration link</button>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
