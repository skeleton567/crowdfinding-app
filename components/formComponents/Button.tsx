import { ButtonProps } from "../../types/ButtonProps";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className="bg-green-500 text-white py-3 px-5 rounded-3xl hover:bg-green-900"
      onClick={props.modalHandler}
    >
      {props.text}
    </button>
  );
};

export default Button;
