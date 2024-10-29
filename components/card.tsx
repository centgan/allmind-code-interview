import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="relative flex bg-[#f6f6f6] rounded-3xl h-[420px] sm:h-[520px] overflow-hidden">
      <h2 className="absolute top-16 left-1/2 transform -translate-x-1/2 text-black text-2xl tracking-[-0.02em] sm:text-3xl z-10">
        {title}
      </h2>
      <div className="absolute left-1/2 transform -translate-x-1/2 top-24 mt-16">
        <Image src={content} height={400} width={400} alt="a" />
      </div>
    </div>
  );
}

export default Card;
