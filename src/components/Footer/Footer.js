import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex flex-col justify-around h-full">
      <div className="flex justify-between items-center">
        <div className="flex">
          <img
            src="https://iras-proxy-assets.s3.ap-south-1.amazonaws.com/5fe2ed83aedcb2f0a43ad819/logo/1-5-2021--4-42-10-am-logo.jpg"
            alt="ClubCouncilLogo"
            className="w-20 bg-black rounded-full"
          />
          {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJwFN7MZ4YmxE2NbnsMKaXG-I0VgtMyFdpwc8Cr5PLa0EwC7dZiaktR0kGfzKktfiexg&usqp=CAU"
            alt="ClubCouncilLogo"
            className="w-20 bg-black rounded-full"
          /> */}
        </div>
        <div className="flex w-3/12 justify-around text-2xl">
          <MdOutlineEmail />
          <FaDiscord />
          <FaTwitter />
          <FaFacebook />
          <FaInstagram />
        </div>
      </div>
      <div className="flex justify-between flex-shrink-0">
        <div className="flex items-center">
          <MdCopyright />
          <p className="font-semibold text-gray-600 pl-1">
            2022-2026,MREC
          </p>
        </div>
        <p className="font-semibold text-gray-600 text-sm tracking-tight">
          {/* Developed & Maintained with ❤️ by Team KAVACH */}
        </p>
        <div className="flex items-center justify-between text-gray-800 font-semibold w-1/5 text-sm">
          <p>Changelog</p>
          <p>•</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
