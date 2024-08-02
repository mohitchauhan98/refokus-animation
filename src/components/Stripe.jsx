import { motion } from "framer-motion";

const Stripe = ({ val, direction }) => {
  return (
    <div
      initial={{ x: direction === "left" ? "0" : "-100%" }}
      animate={{ x: direction === "left" ? "-100%" : "0" }}
      transition={{ ease: "linear", duration: 10, repeat: Infinity }}
      className="w-[16.66%] px-10 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex justify-between items-center"
    >
      <img src={val.url} alt="logo" />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
};

export default Stripe;
