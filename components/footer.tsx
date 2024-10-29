import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#023e34] text-white py-16">
      <div className="grid md:grid-cols-2 gap-y-10 pl-16">
        <div className="flex flex-col md:items-start justify-start items-center">
          <p className="text-white tracking-[-0.015em] leading-6 mt-3">
            Get the latest Aviato company updates
          </p>
        </div>
        <div className="flex items-start justify-evenly text-center md:text-left flex-col gap-y-4 w-32">
          <p className="text-white font-medium tracking-[-0.015em] leading-6">Company</p>
          <ul className="flex flex-col md:gap-y-2 gap-y-4 w-full">
            <li>Careers</li>
            <li>Contact</li>
            <li>X/Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
