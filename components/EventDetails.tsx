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

          {section.goals && (
            <div className="mb-4">
              <h3 className="font-semibold">Goals:</h3>
              <ul className="list-inside list-disc space-y-1">
                {section.goals.map((goal, idx) => (
                  <li key={idx}>{goal}</li>
                ))}
              </ul>
            </div>
          )}

          {section.eligibility && (
            <div className="mb-4">
              <h3 className="font-semibold">Eligibility:</h3>
              <ul className="list-inside list-disc space-y-1">
                {section.eligibility.map((criterion, idx) => (
                  <li key={idx}>{criterion}</li>
                ))}
              </ul>
            </div>
          )}

          {section.registration && (
            <div className="mb-4">
              <h3 className="text-base font-semibold sm:text-xl">
                Registration:
              </h3>
              <div className="mb-2">
                <h4 className="font-semibold">Fee:</h4>
                <ul className="list-inside list-disc space-y-1 text-base sm:text-xl">
                  {section.registration.fee.map((feeItem, idx) => (
                    <li key={idx}>
                      <span>{feeItem.type}:</span> <span>{feeItem.cost}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <h4 className="font-semibold">Steps:</h4>
                <ul className="list-inside list-disc space-y-1 text-base sm:text-xl">
                  {section.registration.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Benefits:</h4>
                <p>{section.registration.benefits}</p>
              </div>
            </div>
          )}

          {section.evaluationCriteria && (
            <div className="mb-4">
              <h3 className="font-semibold">Evaluation Criteria:</h3>
              <ul className="list-inside list-disc space-y-1">
                {section.evaluationCriteria.map((criterion, idx) => (
                  <li key={idx}>
                    <span>{criterion.criterion}:</span>{" "}
                    <span>{criterion.weight}</span>
                  </li>
                ))}
              </ul>
            </div>
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
