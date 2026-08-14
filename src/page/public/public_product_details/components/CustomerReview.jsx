import PrimaryButton from "../../../../components/ui/PrimaryButton";

const CustomerReview = () => {
  const handleWriteReview = () => {
    alert("Write a review functionality would go here!");
  };

  return (
    <div className="flex items-center justify-center p-5">
      <div className="px-10 py-14 text-center max-w-4xl w-full">
        <h1 className="text-[28px] font-semibold uppercase mb-7 text-white">
          CUSTOMER REVIEW
        </h1>
        <p className="text-base text-white font-normal mb-6">
          No reviews yet, write one now?
        </p>
        <PrimaryButton onClick={handleWriteReview}>
          Write a Review
        </PrimaryButton>
      </div>
    </div>
  );
};

export default CustomerReview;
