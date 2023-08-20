import type { FC } from "react";

interface CurrencyProps {
  value?: string | undefined;
}

const formatter = new Intl.NumberFormat("en-In", {
  style: "currency",
  currency: "INR",
});

const Currency: FC<CurrencyProps> = ({ value }) => {
  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
