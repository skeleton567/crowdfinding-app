import { CalculationProps } from "../types/CalculationProps";

const Calculations: React.FC<CalculationProps> = (props) => {
  return (
    <div className="bg-white w-[900px] rounded-lg text-center mt-10 px-7 py-10">
      <div className="grid grid-cols-3 ">
        <div className="border-r-2">
          <h3 className="font-bold text-3xl">$89,914</h3>
          <p className="text-gray-400">of $100 000 backed</p>
        </div>
        <div className="border-r-2">
          <h3 className="font-bold text-3xl">5,007</h3>
          <p className="text-gray-400">total backers</p>
        </div>
        <div>
          <h3 className="font-bold text-3xl">56</h3>
          <p className="text-gray-400">days left</p>
        </div>
      </div>
      <div className="w-full h-8 bg-gray-200 rounded-full mt-10">
        <div
          className={`h-full text-center text-white bg-blue-500 rounded-full ${props.barClass}`}
        ></div>
      </div>
    </div>
  );
};

export default Calculations;
