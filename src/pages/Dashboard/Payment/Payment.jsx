import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from "../../../Shared/SectionTitle";

//TODO: add publishable key
const stripePromise = loadStripe("");
const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading={"Payment"}
        subHeading={"Please Pay to eat"}
      ></SectionTitle>

      <div></div>
    </div>
  );
};

export default Payment;
