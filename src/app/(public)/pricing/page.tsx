import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Pricing`,
  description: "This is the pricing page.",
};

const Pricing = () => {
  return (
    <>
      <div>
        <h1>Pricing</h1>
        <p>This is the pricing page.</p>
        <p>It is a static page.</p>
      </div>
    </>
  );
};

export default Pricing;
