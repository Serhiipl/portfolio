// import React from "react";

// export default function SectionHeader(pros:string) {
//   return (
//     <h2 className="text-3xl font-medium capitalize text-zinc-800 mb-8">
//       About me
//     </h2>
//   );
// }
import React, { Children } from "react";

type Props = {
  children: React.ReactNode;
};

export default function SectionHeader({ children }: Props) {
  return (
    <h2 className="text-3xl font-medium capitalize text-zinc-800 mb-8">
      {children}
    </h2>
  );
}
