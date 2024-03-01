import { CardWrapperProps } from "../types/CardWrapperProps";

const CardWrapper: React.FC<CardWrapperProps> = (props) => {
  return (
    <div className="bg-white w-[900px] rounded-lg mt-10 px-7 py-10 mb-16">
      <h2 className="font-bold text-lg w-full ">About this project</h2>
      <p className="text-gray-500 mt-5">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="text-gray-500 mt-5">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      {props.children}
    </div>
  );
};

export default CardWrapper;
