import Calculations from "@/components/Calculations";
import Title from "@/components/Title";

export default function Home() {
  let num: number = Math.round((89914 / 100000) * 100);
  let percentage: string = `${num}%`;
  let className: string = `w-[${percentage}]`;

  return (
    <main className="bg-[url('/images/image-hero-desktop.jpg')] h-[90vh] w-full bg-no-repeat bg-contain">
      <nav className="flex justify-between items-center px-10 mt-10 h-10 text-white">
        <div>
          <h1 className="font-bold">CROWDFUND</h1>
        </div>
        <ul className="flex justify-center items-center gap-x-3">
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
      </nav>
      <div className="h-full w-full flex items-center flex-col mt-96">
        <Title />
        <Calculations barClass={className} />
      </div>
    </main>
  );
}
