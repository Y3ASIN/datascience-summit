// import React, { ReactNode } from "react";

// interface Props {
//   children: ReactNode;
// }

// const CardContainer: React.FC<Props> = ({ children }) => {
//   return (
//     <section className="flex items-center justify-center rounded-md bg-gray-100 px-4 py-8 sm:px-8 sm:py-16">
//       <div className="scrollbar-hide flex max-w-full min-h-84 space-x-4 overflow-x-auto overflow-y-auto rounded-lg p-4">
//         {children}
//       </div>
//     </section>
//   );
// };

// export default CardContainer;
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CardContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="mx-auto max-w-7xl overflow-x-auto rounded-md bg-slate-300 px-4 py-8 sm:px-8 sm:py-16">
      <div className="flex space-x-4 px-4">
        {React.Children.map(children, (child) => (
          <div className="w-[320px] flex-none">{child}</div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
