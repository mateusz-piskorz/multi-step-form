export {};
// import { FC } from "react";
// import { FormWrapper } from "../../../layouts/FormWrapper";
// import { styled, css } from "styled-components";
// import { SummaryItem } from "./SummaryItem";
// import { plans } from "../SelectPlan/data";
// import { addons } from "../AddOns/data";
// import { AddOnType, PaymentPeriod, SelectedPlan } from "../../../types";

// type SummaryData = {
//   selectedPlan: SelectedPlan;
//   paymentPeriod: PaymentPeriod;
//   onlineService: boolean;
//   largerStorage: boolean;
//   customizableProfile: boolean;
//   backToPlanSelection: () => void;
// };

// export const Summary: FC<SummaryData> = ({
//   customizableProfile,
//   largerStorage,
//   onlineService,
//   paymentPeriod,
//   selectedPlan,
//   backToPlanSelection,
// }) => {
//   // const addonsArr = Object.entries({
//   //   onlineService,
//   //   largerStorage,
//   //   customizableProfile,
//   // })
//   //   .map((e) => {
//   //     const addonName = e[0] as AddOnType;
//   //     const addonValue = e[1];
//   //     const addonCost =
//   //       addons[addonName].cost[
//   //         paymentPeriod === "monthly" ? "monthly" : "yearly"
//   //       ];
//   //     if (addonValue) {
//   //       return {
//   //         addonName,
//   //         paymentPeriod,
//   //         addonCost,
//   //       };
//   //     }
//   //   })
//   //   .filter((item) => item) as {
//   //   addonName: "customizableProfile" | "largerStorage" | "onlineService";
//   //   paymentPeriod: PaymentPeriod;
//   //   addonCost: 2 | 1 | 10 | 20;
//   // }[];

//   // const planCost =
//   //   plans[selectedPlan].cost[
//   //     paymentPeriod === "monthly" ? "monthly" : "yearly"
//   //   ];

//   // const costsArr = [planCost, ...addonsArr.map((e) => e.addonCost)];
//   // const totalCost = costsArr.reduce(
//   //   (accumulator, currentValue) => accumulator + currentValue,
//   //   0
//   // );

//   return (
//     <FormWrapper
//       title="Finishing up"
//       description="Double-check everything looks OK before confirming."
//     >
//       <h1>hi</h1>
//       {/* <Wrapper>
//         <SummaryItem
//           cost={planCost}
//           itemCase="heading"
//           period={paymentPeriod}
//           selectedPlan={selectedPlan}
//           backToPlanSelection={backToPlanSelection}
//         />
//         <hr />
//         {addonsArr.map((addon) => {
//           if (addon) {
//             return (
//               <SummaryItem
//                 key={addon.addonName}
//                 cost={addon.addonCost}
//                 period={addon.paymentPeriod}
//                 itemCase="service"
//                 displayedService={addon.addonName}
//               />
//             );
//           }
//         })}
//       </Wrapper>
//       <SummaryItem cost={totalCost} itemCase="total" period={paymentPeriod} /> */}
//     </FormWrapper>
//   );
// };

// const Wrapper = styled.div(({ theme }) => {
//   return css`
//     background-color: ${theme.magnolia};
//     border-radius: 7px;
//     padding: 20px;
//     display: flex;
//     flex-direction: column;
//     gap: 15px;
//     > hr {
//       height: 1px;
//       background-color: ${theme.lightGray};
//       border: none;
//     }

//     @media screen and (min-width: 768px) {
//       gap: 25px;
//     }
//   `;
// });
