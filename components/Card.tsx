import Button from "./formComponents/Button";
import { CardProps } from "../types/CardProps";

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="p-5 border-gray-100 border-2 w-full mt-5 rounded-md">
      <div className="flex justify-between w-full">
        <h3 className="font-bold size-8 w-full text-left text-lg">
          {props.title}
        </h3>
        <p className="font-bold size-5 w-full text-green-400 text-right">
          {props.pledge}
        </p>
      </div>
      <p className="text-gray-500 mt-5">{props.desc}</p>
      <div className="flex justify-between mt-5">
        <h5 className="mt-3">
          <span className="text-2xl font-bold">{props.amount} </span>
          <span className="text-gray-500">left</span>
        </h5>
        <Button text="Select Reward"></Button>
      </div>
    </div>
  );
};

export default Card;
