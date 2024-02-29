import { CardWrapperProps } from "./types/CardWrapperProps";
import { ModalWrapperProps } from "./types/ModalWrapperProps";

const ModalWrapper: React.FC<ModalWrapperProps> = (props) => {
  const displayClassname = props.isOpen ? "flex" : "hidden";

  return (
    <>
      <div
        className={`fixed h-screen w-full bg-black bg-opacity-75 ${displayClassname} justify-center items-center z-1000 cursor-default`}
      >
        <div className="w-[550px] bg-white opacity-100 px-8 lg:px-16 lg:rounded-xl"></div>
      </div>
      {props.children}
    </>
  );
};

export default ModalWrapper;
