import React from "react";

import { Section } from "@/constants/types";

type SummitProps = {
  sections: Section[];
};

const EventDetails: React.FC<SummitProps> = ({ sections }) => {
  return (
    <section className="space-y-8 p-6 font-poppins">
      {sections.map((section, index) => (
        <div key={index} className="rounded-lg bg-gray-100 p-6 shadow-lg">
          <h2 className="mb-2 text-2xl font-semibold">{section.title}</h2>
          <p className="mb-4">{section.description}</p>

          {section.points && (
            <ul className="mb-4 list-inside list-disc space-y-1">
              {section.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}

          {section.details && (
            <ul className="mb-4 list-inside list-disc space-y-1">
              {section.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          )}

          {section.fee && (
            <div className="mb-4">
              <h3 className="font-semibold">Fee:</h3>
              <ul className="space-y-1">
                {section.fee.map((feeItem, idx) => (
                  <li key={idx}>
                    <span>{feeItem.type}:</span> <span>{feeItem.cost}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {section.steps && (
            <div className="mb-4">
              <h3 className="font-semibold">Steps:</h3>
              <ol className="list-inside list-decimal space-y-1">
                {section.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          {section.prizes && (
            <div className="mb-4">
              <h3 className="font-semibold">Prizes:</h3>
              <ul className="space-y-1">
                {section.prizes.map((prize, idx) => (
                  <li key={idx}>
                    <span>{prize.position}:</span> <span>{prize.amount}</span>
                  </li>
                ))}
              </ul>
              <p>
                <strong>Total Prize Pool:</strong> {section.totalPrizePool}
              </p>
            </div>
          )}

          {section.benefits && (
            <p>
              <strong>Benefits:</strong> {section.benefits}
            </p>
          )}
        </div>
      ))}
    </section>
  );
};

export default EventDetails;

// Example Usage with Multiple Sections
// const sectionsData: Section[] = [
//   {
//     title: "Eligibility",
//     description: "Open to University, College, and School students.",
//     details: [
//       "Individual or team participation (max 2 members per team).",
//       "Posters must focus on AI in Education, covering topics like AI-enhanced learning, accessibility, and student engagement.",
//     ],
//   },
//   {
//     title: "Goals",
//     description: "Encouraging exploration of AI's role in education.",
//     points: [
//       "Promote innovative thinking in AI applications for real-world educational challenges.",
//       "Foster research and analytical skills in practical and ethical AI uses.",
//       "Enhance communication skills for presenting complex AI concepts.",
//       "Highlight the positive societal impact of AI in education.",
//     ],
//   },
//   {
//     title: "Registration",
//     description: "Details on how to register and participate.",
//     fee: [
//       { type: "Individual", cost: "500 BDT" },
//       { type: "Team (2 Members)", cost: "1,000 BDT" },
//     ],
//     steps: [
//       "Online Registration: Register here. Deadline: [Date]",
//       "Topic & Abstract Submission: Submit by [Date]",
//       "Poster Submission: Digital posters (PDF format) by [Deadline]",
//     ],
//     benefits:
//       "All participants receive a T-shirt, souvenirs, and certificates.",
//   },
//   {
//     title: "Awards",
//     description: "Prizes for top 3 posters based on judging criteria.",
//     prizes: [
//       { position: "1st Place", amount: "3,000 BDT" },
//       { position: "2nd Place", amount: "2,000 BDT" },
//       { position: "3rd Place", amount: "1,000 BDT" },
//     ],
//     totalPrizePool: "6,000 BDT",
//   },
// ];

// Rendering the component with multiple sections
{/* <DataScienceSummit sections={sectionsData} />; */}
