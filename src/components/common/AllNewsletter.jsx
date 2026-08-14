// import { useState } from "react";
// import PrimaryButton from "../ui/PrimaryButton";
// import InputField from "../ui/InputField";
// import SectionTitle from "../ui/SectionTitle";

// const NewsletterSection = () => {
//   const [agreed, setAgreed] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (agreed) {
//       setIsSubmitted(true);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto text-white">
//       <SectionTitle>Join Our Newsletter</SectionTitle>

//       <div className="flex flex-col items-center justify-center">
//         {!isSubmitted ? (
//           /* UI */
//           <form
//             onSubmit={handleSubmit}
//             className="w-full max-w-[380px] flex flex-col gap-3"
//           >
//             <InputField type="text" placeholder="Enter your name" required />
//             <InputField type="email" placeholder="Enter your email" required />

//             <div className="flex items-center gap-3 mt-1">
//               <InputField
//                 type="checkbox"
//                 checked={agreed}
//                 onChange={(e) => setAgreed(e.target.checked)}
//               />

//               <label
//                 htmlFor="privacy-check"
//                 className="text-base font-normal leading-tight text-white cursor-pointer"
//               >
//                 I have read, understood and agree to the Privacy Policy
//               </label>
//             </div>

//             <div className="text-center text-base font-normal leading-tight text-white mt-4">
//               <span>View the </span>
//               <a href="#" className="text-white underline underline-offset-4">
//                 Privacy Policy
//               </a>
//             </div>

//             <div className="flex justify-center mt-2">
//               <PrimaryButton type="submit">SUBMIT</PrimaryButton>
//             </div>
//           </form>
//         ) : (
//           <div className="max-w-2xl bg-[#003d1c] py-6 px-4 text-center border border-white/20">
//             <h2 className="text-white text-xl md:text-2xl font-normal tracking-wide">
//               Thank you for subscribing!
//             </h2>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NewsletterSection;

import { useState } from "react";
import PrimaryButton from "../ui/PrimaryButton";
import InputField from "../ui/InputField";
import SectionTitle from "../ui/SectionTitle";

const AllNewsletter = ({
  showSuccessMessage = true,
  button: ButtonComponent,
  buttonText = "SUBMIT",
}) => {
  const [agreed, setAgreed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreed) {
      console.log("Form Submitted Successfully");

      if (showSuccessMessage) {
        setIsSubmitted(true);
      } else {
        // alert("Subscription successful!");
        setAgreed(false);
        e.target.reset();
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto text-white">
      <SectionTitle>Join Our Newsletter</SectionTitle>

      <div className="flex flex-col items-center justify-center">
        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[380px] flex flex-col gap-3"
          >
            <InputField type="text" placeholder="Enter your name" required />
            <InputField type="email" placeholder="Enter your email" required />

            <div className="flex items-center gap-3 mt-1">
              <InputField
                type="checkbox"
                id="privacy-check"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                required
              />

              <label
                htmlFor="privacy-check"
                className="text-base font-normal leading-tight text-white cursor-pointer"
              >
                I have read, understood and agree to the Privacy Policy
              </label>
            </div>

            <div className="text-center text-base font-normal leading-tight text-white mt-4">
              <span>View the </span>
              <a href="#" className="text-white underline underline-offset-4">
                Privacy Policy
              </a>
            </div>

            <div className="flex justify-center mt-2">
              {ButtonComponent ? (
                <ButtonComponent type="submit">{buttonText}</ButtonComponent>
              ) : (
                <PrimaryButton type="submit">SUBMIT</PrimaryButton>
              )}
            </div>
          </form>
        ) : (
          <div className="max-w-2xl bg-[#003d1c] py-6 px-4 text-center border border-white/20">
            <h2 className="text-white text-xl md:text-2xl font-normal tracking-wide">
              Thank you for subscribing!
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllNewsletter;
