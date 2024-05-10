export {};
// import { FC } from "react";
// import { FormWrapper } from "../../../layouts/FormWrapper";
// import { AddOnItem } from "./AddOnItem";
// import { styled } from "styled-components";
// import { PaymentPeriod, FormData } from "../../../types";
// import { addons } from "./data";
// import { UseFormRegister } from "react-hook-form";

// type AddOnsProps = {
//   paymentPeriod: PaymentPeriod;
//   register: UseFormRegister<FormData>;
// };

// export const AddOns: FC<AddOnsProps> = ({ register, paymentPeriod }) => {
//   return (
//     <FormWrapper
//       title="Pick add-ons"
//       description="Add-ons help enhance your gaming experience."
//     >
//       <AddOnsWrapper>
//         {addons.map((addOn) => {
//           return (
//             <AddOnItem
//               key={addOn.name}
//               addOn={addOn}
//               register={register}
//               paymentPeriod={paymentPeriod}
//             />
//           );
//         })}
//       </AddOnsWrapper>
//     </FormWrapper>
//   );
// };

// const AddOnsWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
// `;
