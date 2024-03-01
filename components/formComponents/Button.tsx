import { ButtonProps } from "../../types/ButtonProps";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={`py-3 px-5 rounded-3xl hover:bg-green-900 text-white   ${
        props.disabled ? "bg-gray-500" : "bg-green-500"
      } `}
      onClick={props.modalHandler}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

export default Button;
