import BackModal from "@/components/ModalWrapper";
import Calculations from "@/components/Calculations";
import Card from "@/components/Card";
import CardWrapper from "@/components/CardWrapper";
import Title from "@/components/Title";
import { useState } from "react";
import ModalWrapper from "@/components/ModalWrapper";

export default function Home() {
  let num: number = Math.round((89914 / 100000) * 100);
  let percentage: string = `${num}%`;
  let className: string = `w-[${percentage}]`;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <ModalWrapper isOpen={isModalOpen}>
      <main className="bg-[url('/images/image-hero-desktop.jpg')] w-full bg-no-repeat bg-contain m-0 z-0">
        <nav className="flex justify-between items-center p-10 h-10 text-white">
          <div>
            <h1 className="font-bold">CROWDFUND</h1>
          </div>
          <ul className="flex justify-center items-center gap-x-3">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Discover</li>
            <li className="cursor-pointer">Get Started</li>
          </ul>
        </nav>
        <div className="h-full w-full flex items-center flex-col mt-80">
          <Title modalHandler={modalHandler} />
          <Calculations barClass={className} />
          <CardWrapper>
            <Card
              title={"Bamboo Stand"}
              amount={101}
              desc={
                "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backermember list."
              }
              pledge={"Pledge $25 or more"}
            />
            <Card
              title={"Black Edition Stand"}
              amount={64}
              desc={
                "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
              }
              pledge={"Pledge $75 or more"}
            />
            <Card
              title={"Mahogany Special Edition"}
              amount={1}
              desc={
                "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
              }
              pledge={"Pledge $200 or more"}
            />
          </CardWrapper>
        </div>
      </main>
    </ModalWrapper>
  );
}
