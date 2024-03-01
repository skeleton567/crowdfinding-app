import Button from "./formComponents/Button";
import { CardProps } from "../types/CardProps";

const ModalCard: React.FC<CardProps> = (props) => {
  return (
    <div
      className={`border-gray-100 border-2 w-full mt-5 rounded-md ${
        !props.amount && props.title != "Pledge with no Reward"
          ? "opacity-50 pointer-events-none"
          : ""
      }`}
    >
      <div className="flex justify-between items-center m-5">
        <div className="flex gap-x-4">
          <div>
            <input
              type="radio"
              id={props.radio}
              className="mr-2"
              value={props.radio}
              onClick={props.showInputHandler}
              {...props.register("pledge", { required: true })}
            />
            <label
              className="font-bold hover:text-green-600 cursor-pointer"
              htmlFor={props.radio}
            >
              {props.title}
            </label>
          </div>
          <p className="font-bold size-5 w-[200px] text-green-400">
            {props.pledge}
          </p>
        </div>
        {props.title != "Pledge with no Reward" && (
          <h5 className="mt-3 flex items-center gap-2">
            <span className="text-2xl font-bold">{props.amount}</span>
            <span className="text-gray-500">left</span>
          </h5>
        )}
      </div>
      <p className="text-gray-500 m-5 mt-3 ">{props.desc}</p>
      {props.radioValue == props.radio && (
        <div className="p-5 border-gray-100 border-t-2 mt-2 flex justify-between items-center">
          <p className="text-gray-500">Enter your pledge</p>
          <div className="flex items-center gap-x-3">
            <div className="border-green-500 rounded-3xl border w-28 flex gap-x-2 p-3">
              <p className="text-gray-500">$ </p>
              <input
                type="text"
                className="w-10 outline-none"
                {...props.register("money", {
                  required: true,
                  min: 1,
                  pattern: /^[0-9]+$/,
                })}
              />
            </div>
            <Button text="Continue" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalCard;
