import Image from "next/image";
import ModalCard from "./ModalCard";
import { BackModalProps } from "@/types/BackModalProps";
import { MouseEvent, useEffect, useRef, useState } from "react";

const BackModal: React.FC<BackModalProps> = (props) => {
  const [radioValue, setRadioValue] = useState("");

  const showInputHandler = (event: MouseEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value);
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
        minValue={0}
      />
      <ModalCard
        title={props.data.pledge_types[0].title}
        amount={props.data.pledge_types[0].left}
        desc={
          "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
        }
        pledge={"Pledge $25 or more"}
        radio={props.data.pledge_types[0].title}
        radioValue={radioValue}
        showInputHandler={showInputHandler}
        register={props.register}
        minValue={25}
      />
      <ModalCard
        title={props.data.pledge_types[1].title}
        amount={props.data.pledge_types[1].left}
        desc={
          "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
        }
        pledge={"Pledge $75 or more"}
        radio={props.data.pledge_types[1].title}
        radioValue={radioValue}
        showInputHandler={showInputHandler}
        register={props.register}
        minValue={75}
      />
      <ModalCard
        title={props.data.pledge_types[2].title}
        amount={props.data.pledge_types[2].left}
        desc={
          "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
        }
        pledge={"Pledge $200 or more"}
        radio={props.data.pledge_types[2].title}
        radioValue={radioValue}
        showInputHandler={showInputHandler}
        register={props.register}
        minValue={200}
      />
    </form>
  );
};

export default BackModal;
