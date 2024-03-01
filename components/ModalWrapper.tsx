import BackModal from "./BackModal";
import { ModalWrapperProps } from "../types/ModalWrapperProps";
import Image from "next/image";
import Button from "./formComponents/Button";

const ModalWrapper: React.FC<ModalWrapperProps> = (props) => {
  const displayClassname: string = props.isOpen ? "flex" : "hidden";
  const modalWidth: string = props.isChoiceVisible ? "w-[750px]" : "w-[550px]";

  return (
    <>
      <div
        className={`fixed h-screen w-full bg-black bg-opacity-75 ${displayClassname} justify-center items-center z-50 cursor-default`}
      >
        <div
          className={`${modalWidth} bg-white opacity-100 px-10 py-5 lg:rounded-xl`}
        >
          {props.isChoiceVisible && (
            <BackModal
              modalHandler={props.modalHandler}
              submitHandler={props.submitHandler}
              register={props.register}
            />
          )}
          {props.isThankYouVisible && (
            <>
              <div className="flex justify-center">
                <Image
                  src="/images/icon-check.svg"
                  alt="x"
                  width={100}
                  height={100}
                  className="hover:fill-neutral-900 cursor-pointer"
                />
              </div>
              <h2 className="font-bold text-2xl mt-16 text-center">
                Thanks for your support
              </h2>
              <p className="text-gray-500 mt-5">
                Your pledge brings us one step closer to sharing Mastercraft
                Bamboo Monitor Riser worldwide. You will get an email once our
                campaign is completed.
              </p>
              <div className="flex mt-5 justify-center">
                <Button text="Got it!" modalHandler={props.closeModalHandler} />
              </div>
            </>
          )}
        </div>
      </div>
      {props.children}
    </>
  );
};

export default ModalWrapper;
