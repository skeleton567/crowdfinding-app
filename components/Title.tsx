import Image from "next/image";
import React from "react";
import Button from "./formComponents/Button";
import { TitleProps } from "./types/TitleProps";

const Title: React.FC<TitleProps> = (props) => {
  return (
    <div className="bg-white h-[350px] w-[900px] rounded-lg text-center">
      <div className="w-full flex justify-center">
        <Image
          src="/images/icon-check.svg"
          alt="image"
          width={50}
          height={50}
          className="transform translate-y-[-50%]"
        />
      </div>
      <h2 className="font-bold text-3xl w-full mt-12 mb-4">
        Mastercraft Bamboo Monitor Riser
      </h2>
      <p className="text-gray-500 mb-5">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain
      </p>
      <div className="flex justify-between items-center p-10">
        <Button text={"Back this project"} modalHandler={props.modalHandler} />
        <div className="flex justify-center items-center bg-gray-100 pr-5 rounded-3xl">
          <div className="p-5 bg-red-500 rounded-full transform translate-x-[-20%]">
            <Image
              src="/images/icon-check.svg"
              alt="image"
              width={40}
              height={40}
            />
          </div>
          <p className="text-center text-green-800 font-bold pl-2">
            Bookmarked
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;
