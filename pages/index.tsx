import BackModal from "@/components/ModalWrapper";
import Calculations from "@/components/Calculations";
import Card from "@/components/Card";
import CardWrapper from "@/components/CardWrapper";
import Title from "@/components/Title";
import { useState } from "react";
import ModalWrapper from "@/components/ModalWrapper";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "postcss";
import { GetServerSideProps } from "next";
import { PledgeType } from "@/types/PledgeType";
import axios from "axios";

const Home: React.FC<{ data: PledgeType }> = (props) => {
  const [pledge, setPledge] = useState(props.data);

  let num: number = Math.round((pledge.raised / pledge.total_amount) * 100);
  let className: string = `${num}%`;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChoiceVisible, setisChoiceVisible] = useState(false);
  const [isThankYouVisible, setisThankYouVisible] = useState(false);

  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
    setisChoiceVisible(!isChoiceVisible);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
    setisThankYouVisible(false);
  };

  const { register, handleSubmit } = useForm();

  const submitHandler: SubmitHandler<Input> = async (data: Input) => {
    const res = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL, data);
    setPledge(res.data);
    setisChoiceVisible(false);
    setisThankYouVisible(true);
  };

  return (
    <ModalWrapper
      isOpen={isModalOpen}
      modalHandler={modalHandler}
      isThankYouVisible={isThankYouVisible}
      isChoiceVisible={isChoiceVisible}
      submitHandler={handleSubmit(submitHandler)}
      closeModalHandler={closeModalHandler}
      register={register}
      data={pledge}
    >
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
          <Title modalHandler={modalHandler} bookmarked={pledge.bookmarked} />
          <Calculations barClass={className} data={pledge} />
          <CardWrapper>
            <Card
              title={pledge.pledge_types[0].title}
              amount={pledge.pledge_types[0].left}
              desc="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
              pledge="Pledge $25 or more"
            />
            <Card
              title={pledge.pledge_types[1].title}
              amount={pledge.pledge_types[1].left}
              desc="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
              pledge="Pledge $75 or more"
            />
            <Card
              title={pledge.pledge_types[2].title}
              amount={pledge.pledge_types[2].left}
              desc="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
              pledge="Pledge $200 or more"
            />
          </CardWrapper>
        </div>
      </main>
    </ModalWrapper>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL);

  return {
    props: {
      data: res.data,
    },
  };
};
