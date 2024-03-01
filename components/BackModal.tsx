import Image from "next/image";
import ModalCard from "./ModalCard";
import { BackModalProps } from "@/types/BackModalProps";
import { MouseEvent, useState } from "react";

const BackModal: React.FC<BackModalProps> = (props) => {
  const [radioValue, setRadioVlue] = useState("");

  const showInputHandler = (event: MouseEvent<HTMLInputElement>) => {
    setRadioVlue(event.target.value);
  };

  return (
    <form onSubmit={props.submitHandler}>
      <div className="flex justify-end">
        <Image
          src="/images/icon-close-modal.svg"
          alt="x"
          width={20}
          height={20}
          className="hover:fill-neutral-900 cursor-pointer"
          onClick={props.modalHandler}
        />
      </div>
      <h1 className="font-bold text-2xl">Back this project</h1>
      <p className="text-gray-500 mt-5">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      <ModalCard
        title={"Pledge with no Reward"}
        desc={
          "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
        }
        radio="noReward"
        radioValue={radioValue}
        showInputHandler={showInputHandler}
        register={props.register}
      />
      <ModalCard
        title={"Bamboo Stand"}
        amount={100}
        desc={
          "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
        }
        pledge={"Pledge $25 or more"}
        radio="bamboo"
        radioValue={radioValue}
        showInputHandler={showInputHandler}
        register={props.register}
      />
      <ModalCard
        title={"Black Edition stand"}
        amount={64}
        desc={
          "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
        }
        pledge={"Pledge $75 or more"}
        radio="black"
        radioValue={radioValue}
        showInputHandler={showInputHandler}
        register={props.register}
      />
      <ModalCard
        title={"Mahogany Special Edition"}
        amount={1}
        desc={
          "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
        }
        pledge={"Pledge $200 or more"}
        radio="mahogany"
        radioValue={radioValue}
        showInputHandler={showInputHandler}
        register={props.register}
      />
    </form>
  );
};

export default BackModal;