import React from "react";
import arrowIcon from "../assets/icons/arrowIcon.svg";
import visa from "../assets/icons/visa.svg";
import mastercard from "../assets/icons/mastercard.svg";
import paypal from "../assets/icons/paypal.svg";
import dropdownBlack from "../assets/icons/dropdownBlack.svg";
import instagramBlack from "../assets/icons/instagramBlack.svg";
import facebookBlack from "../assets/icons/facebookBlack.svg";
import telegramBlack from "../assets/icons/telegramBlack.svg";

const Footer = ({ showNewsletter = true }) => {
  return (
    <div className="font-Lato bg-[#D1E2EB] w-full">
      <div className="max-w-[1440px] mx-auto pt-[132px] pb-20 px-5 relative">
        {showNewsletter && (
          <section
            className="bg-[#7296AB] w-[571px] h-[187px] rounded-lg flex flex-col 
      items-center justify-center gap-[23px] text-center absolute left-1/2 
      -translate-x-1/2 top-0 -mt-[90px] px-3 py-2"
          >
            <h2 className="text-[32px] font-bold text-white leading-none">
              Luminae <span className="text-[#D1E2EB]">Store</span>
            </h2>

            <p className="text-white">
              Register your email not to miss the last minutes off + Free
              delivery
            </p>

            <div className="relative w-[268px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full h-9 rounded px-3 pr-12 outline-none border border-white/40 
        placeholder:text-[#9D9D9D] placeholder:text-sm bg-white"
              />
              <img
                src={arrowIcon}
                alt="send"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer"
              />
            </div>
          </section>
        )}

        <footer className="flex mx-auto justify-between w-[889px]">
          <ul className="flex flex-col gap-[15px]">
            <li className="mb-2.5 text-sm font-bold text-[#262626]">Company</li>
            <li className="text-[#555] text-sm cursor-pointer">About Us</li>
            <li className="text-[#555] text-sm cursor-pointer">Our Store</li>
            <li className="text-[#555] text-sm cursor-pointer">Contact us</li>
          </ul>

          <ul className="flex flex-col gap-[15px]">
            <li className="mb-2.5 text-sm font-bold text-[#262626]">
              Career Opportunities
            </li>
            <li className="text-[#555] text-sm cursor-pointer">
              Selling Programs
            </li>
            <li className="text-[#555] text-sm cursor-pointer">Advertise</li>
            <li className="text-[#555] text-sm cursor-pointer">Cooperation</li>
          </ul>

          <ul className="flex flex-col gap-[15px]">
            <li className="mb-2.5 text-sm font-bold text-[#262626]">
              How to Buy
            </li>
            <li className="text-[#555] text-sm cursor-pointer">
              Making Payments
            </li>
            <li className="text-[#555] text-sm cursor-pointer">
              Delivery Options
            </li>
            <li className="text-[#555] text-sm cursor-pointer">
              Buyer Protection
            </li>
            <li className="text-[#555] text-sm cursor-pointer">
              New User Guide
            </li>
          </ul>

          <ul className="flex flex-col gap-[15px]">
            <li className="mb-2.5 text-sm font-bold text-[#262626]">Help</li>
            <li className="text-[#555] text-sm cursor-pointer">Contacts Us</li>
            <li className="text-[#555] text-sm cursor-pointer">FAQ</li>
            <li className="text-[#555] text-sm cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </footer>
      </div>

      <section className="bg-white  h-[173px] w-full py-6 px-5">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center border-b border-amber-400 pb-3">
          <div className="flex">
            <img
              src={visa}
              alt="visa"
              className="opacity-30 mix-blend-luminosity"
            />
            <img
              src={mastercard}
              alt="mastercard"
              className="opacity-30 mix-blend-luminosity"
            />
            <img
              src={paypal}
              alt="paypal"
              className="opacity-30 mix-blend-luminosity"
            />
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-sm text-[#262626]">English</span>
            <img src={dropdownBlack} alt="dropdown" className="w-2.5 h-2.5" />
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto flex justify-between pt-[35px] pb-[47px] items-center">
          <p className="text-sm text-[#262626]">
            165-179 Forster Road City of Monash, Melbourne, Australia
          </p>
          <p className="text-[#9D9D9D] text-sm">
            ©2023 Copyright in reserved for lumine shop
          </p>
          <div className="flex gap-[26px]">
            <img
              src={instagramBlack}
              alt="instagramBlack"
              className="w-6 h-6  cursor-pointer"
            />
            <img
              src={facebookBlack}
              alt="facebookBlack"
              className="w-6 h-6  cursor-pointer"
            />
            <img
              src={telegramBlack}
              alt="telegramBlack"
              className="w-6 h-6  cursor-pointer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
