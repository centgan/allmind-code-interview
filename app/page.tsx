import Link from "next/link";
import Card from "@/components/card";
import Image from 'next/image';
import Aviato from "@/components/aviato";
import AviatoIcon from "@/components/aviatoIcon";
import Engineer from "@/images/engineers.png";
import DataPoints from "@/images/data-points.png";
import Emails from "@/images/emails.png";
import Integration from "@/images/integration.png";
import Maps from "@/images/maps.png";
import Schedule from "@/images/schedule.png";
import Face from "@/images/face.png";
import Couch from "@/images/couch.png";
import Headcount from "@/images/headcount.png";
import Traffic from "@/images/traffic.png";
import Back from "@/images/back.png";
import Sponsor from "@/components/sponsor";
import Footer from "@/components/footer";
import ImageChange from "@/components/imageChange";
import React from "react";

interface CardProps {
  title: string;
  content: string; // Adjust this type if you use different image formats
}

const Home: React.FC = () => {
  const cards: CardProps[] = [
    { title: "Find top engineers", content: Engineer },
    { title: "Get Exclusive data-points", content: DataPoints },
    { title: "Seamless integrations", content: Integration },
    { title: "Accurate employee vesting schedules", content: Schedule },
    { title: "Company emails and contacts", content: Emails },
    { title: "Competitor Maps", content: Maps },
  ];

  const people: string[] = [
    'https://www.aviato.co/api-cta-1.png',
    'https://www.aviato.co/api-cta-2.png',
    'https://www.aviato.co/api-cta-3.png',
    'https://www.aviato.co/api-cta-4.png'
  ];

  return (
    <div className="bg-white">
      {/* For when you first load in and see the green background */}
      <div className="h-[102vh] rounded-b-3xl bg-[#023e34]">
        <nav className="flex justify-between pt-3 mx-80">
          <Aviato />
          <div className="flex">
            <Link href="/">
              <button className="px-4 py-2 text-white rounded hover:bg-[#036b68]">
                Sign in
              </button>
            </Link>
            <Link href="/">
              <button className="px-4 py-2 bg-[#d0f424] text-[#023e34] rounded hover:bg-[#b0d800]">
                Book a demo
              </button>
            </Link>
          </div>
        </nav>
        <div className="flex flex-col items-center justify-center pt-24">
          <h1 className="text-white text-center pt-24
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-[64px]
                leading-[36px]
                sm:leading-[48px]
                md:leading-[60px]
                lg:leading-[64px]
                tracking-[-0.04em] max-w-xl break-words">
            The analytical layer for private markets
          </h1>
          <p className="text-white text-center mt-4
                leading-[24px]
                lg:px-8
                md:px-12
                tracking-[-0.015em]
                text-balance
                lg:text-pretty">
            Aviato turns data into deals by delivering high-quality people and company intelligence
            to your fingertips
          </p>
          <Link href="/">
            <button className="px-4 py-2 my-4 bg-[#d0f424] text-[#023e34] rounded hover:bg-[#b0d800]">
              Book a demo
            </button>
          </Link>
        </div>
        <div className="flex gap-6 mt-10">
          <div className="h-[400px] w-[275px]">
            <Image src={Face} alt="" width={275} height={200} />
          </div>
          <div className="h-[400px] w-[325px]">
            <Image src={Couch} alt="" width={325} height={200} />
          </div>
          <div className="h-[400px] w-[325px]">
            <Image src={Headcount} alt="" width={325} height={200} />
          </div>
          <div className="h-[350px] w-[175px]">
            <Image src={Traffic} alt="" width={175} height={200} />
          </div>
          <div className="h-[350px] w-[275px]">
            <Image src={Back} alt="" width={275} height={200} />
          </div>
        </div>
      </div>
      {/* This will be for everything under the initial screen when loaded in */}
      <Sponsor />

      <div className="mx-20">
        <div className="pl-10 pt-14">
          <p className="text-lg tracking-[-0.015em] text-black">What is Aviato?</p>
          <h1 className="mt-4 text-5xl max-w-2xl text-pretty text-black text-left tracking-[-0.04em] leading-[58px]">
            The most comprehensive view on private markets there is, made accessible to you
          </h1>
          {/* Will deal with this later; it is just switching between texts and images */}
          <ImageChange />
        </div>
        <div className="flex rounded-2xl bg-[#a00c8c] p-8 pr-0">
          <div>
            <h1 className="text-3xl tracking-[-0.02em] text-white">Work wherever you work with our API</h1>
            <p className="mt-2 text-balance text-lg leading-6 tracking-[-0.015em] text-white">
              Aviato connects seamlessly with top CRMs and tools. Powerful API enables an easy transition to data-driven choices, no process disruption.
            </p>
            <button
              className="px-4 py-2 mt-3 rounded-md font-medium bg-white text-black hover:bg-gray-200 transition-colors duration-300">
              Try it
            </button>
          </div>
          {people.map((item, image_num) => (
            <div key={image_num} className="overflow-hidden mx-4">
              <Image src={item} alt="" width={275} height={200} className="rounded-full" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center mx-28 mt-28">
        <div className="max-w-2xl mx-auto">
          <p className="text-lg tracking-[-0.015em] text-center text-black">What we do</p>
          <h1 className="text-black md:text-5xl text-3xl tracking-[-0.04em] text-center md:leading-[58px]">
            Powerful features and datasets for your analysis
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full mt-20">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center my-28">
        <div className="size-20 flex items-center justify-center bg-[#023e34] rounded-2xl">
          <AviatoIcon />
        </div>
        <h2 className="text-center
                       lg:text-[64px]
                       md:text-5xl
                       md:leading-[56px]
                       tracking-[-0.04em]
                       text-balance
                       lg:px-64
                       lg:leading-[76px]
                       text-4xl leading-[48px]
                       text-black">
          Get the clearest picture of what&#39;s next in private markets
        </h2>
        <Link href="/">
          <button
            className="px-9 h-[71px] rounded-full text-white flex items-center justify-center font-medium tracking-[-0.02em] cursor-pointer text-2xl bg-[#023e34] hover:bg-[#b0d800]">
            Book a demo
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
