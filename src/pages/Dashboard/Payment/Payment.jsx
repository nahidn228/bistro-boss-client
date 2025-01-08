import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Shared/SectionTitle";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

//TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PG_API_KEY);
const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading={"Payment"}
        subHeading={"Please Pay to eat"}
      ></SectionTitle>

      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
          
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
