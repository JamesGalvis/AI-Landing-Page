import { BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

import { Logo } from "../common/logo";
import { NavMenu } from "../common/nav-menu";

export function Footer() {
  return (
    <footer className="py-5 border border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex-1 flex gap-2 items-center">
            <Logo className="size-6" />
            <span className="font-medium">AI Startup Landing Page</span>
          </div>
          <NavMenu className="flex-1 flex-col lg:flex-row items-start lg:items-center lg:justify-center gap-5 lg:gap-7" />
          <div className="flex-1 flex lg:justify-end gap-5 text-white/40">
            <BsTwitterX className="hover:text-white transition" />
            <RiInstagramFill className="hover:text-white transition" />
            <FaYoutube className="hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
}
