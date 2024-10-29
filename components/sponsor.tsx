import React from "react";
import EightVC from "@/components/8vc";
import Image from "next/image";

const Sponsor: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-[#f8f4f4] pt-8 pb-20">
      <p className="text-black/50 text-lg tracking-[-0.015em] text-center">
        Trusted by industry leading teams
      </p>
      <div className="flex items-center justify-center gap-20 mt-16 opacity-40">
        <EightVC />
        <Image
          src="https://www.aviato.co/soma-capital.png"
          alt="soma"
          width={90}
          height={36}
        />
        <Image
          src="https://www.aviato.co/nea.png"
          alt="nea"
          width={90}
          height={36}
        />
        <Image
          src="https://www.aviato.co/uber.png"
          alt="uber"
          width={90}
          height={37}
        />
        <Image
          src="https://www.aviato.co/merrill-lynch.png"
          alt="merrill"
          width={90}
          height={36}
        />
      </div>
    </div>
  );
}

export default Sponsor;
