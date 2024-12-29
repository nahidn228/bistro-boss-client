/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center my-6 w-1/3 mx-auto">
      <p className="text-[#D99904] text-base">{subHeading}</p>
      <div className="divider"></div>
      <p className="text-4xl ">{heading}</p>
      <div className="divider"></div>
    </div>
  );
};

export default SectionTitle;
