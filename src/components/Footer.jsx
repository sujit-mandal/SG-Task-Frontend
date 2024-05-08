import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#1E1E1E]">
      <div className="max-w-screen-xl mx-auto text-white grid grid-cols-4 gap-10 py-10">
        <div>
          <h5 className="font-bold text-xl">Study UX</h5>
          <ul className="space-y-3 mt-3 text-lg">
            <li className="cursor-pointer">How to choose your destination?</li>
            <li className="cursor-pointer">Study abroad intakes</li>
            <li className="cursor-pointer">Guide for parents</li>
            <li className="cursor-pointer">THE World University Rankings</li>
            <li className="cursor-pointer">QS World University Rankings</li>
            <li className="cursor-pointer">SG Events</li>
            <li className="cursor-pointer">Institution answers</li>
            <li className="cursor-pointer">Student Essentials</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-xl">Useful Links</h5>
          <ul className="space-y-3 mt-3 text-lg">
            <li className="cursor-pointer">SG Blog</li>
            <li className="cursor-pointer">Engineering courses</li>
            <li className="cursor-pointer">Health and medicine</li>
            <li className="cursor-pointer">Information technology</li>
            <li className="cursor-pointer">Management courses</li>
            <li className="cursor-pointer">Find Scholarships</li>
            <li className="cursor-pointer">Student Reviews</li>
            <li className="cursor-pointer">Ask SG</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-xl">IELTS</h5>
          <ul className="space-y-3 mt-3 text-lg">
            <li className="cursor-pointer">What is IELTS?</li>
            <li className="cursor-pointer">Prepare for IELTS?</li>
            <li className="cursor-pointer">Computer-delivered IELTS</li>
            <li className="cursor-pointer">Book my IELTS test</li>
            <li className="cursor-pointer">IELTS for UKVI</li>
            <li className="cursor-pointer">IELTS test dates</li>
            <li className="cursor-pointer">About SG IELTS</li>
            <li className="cursor-pointer">SG in the news</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-xl">About SG</h5>
          <ul className="space-y-3 mt-3 text-lg">
            <li className="cursor-pointer">Request an appointment</li>
            <li className="cursor-pointer">Contact us</li>
            <li className="cursor-pointer">About SG Corporate</li>
            <li className="cursor-pointer">Customer Grievances</li>
            <li className="cursor-pointer">Corporate responsibility</li>
          </ul>
        </div>
      </div>

      <div className="bg-black text-white">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between py-5">
          <p className="font-light">Copyright © 2024 SG Education</p>
          <ul className="flex items-center gap-3 font-light">
            <li className="cursor-pointer">Disclaimer</li>
            <li className="border-l-[1px] border-white pl-3 cursor-pointer">
              Privacy Policy
            </li>
            <li className="border-l-[1px] border-white pl-3 cursor-pointer">
              Terms Of Use
            </li>
            <li className="border-l-[1px] border-white pl-3 cursor-pointer">
              Investors
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <FaFacebookF className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
            <CiInstagram className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
