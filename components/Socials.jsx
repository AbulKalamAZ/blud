import React from "react";
import Facebook from "./Icons/Facebook";
import Instagram from "./Icons/Instagram";
import Twitter from "./Icons/Twitter";
import IconWrap from "./Icons/IconWrap";
import Button from "./Button";
import Tiktok from "./Icons/Tiktok";

const Socials = () => {
  return (
    <div className="flex justify-center items-center gap-x-2">
      <IconWrap link="https://www.facebook.com/bludfestofficial/">
        <Facebook />
      </IconWrap>
      <IconWrap link="https://www.instagram.com/bludfest/">
        <Instagram />
      </IconWrap>
      <IconWrap link="https://twitter.com/blud_fest">
        <Twitter />
      </IconWrap>
      <IconWrap link="https://www.tiktok.com/@bludfest">
        <Tiktok />
      </IconWrap>
    </div>
  );
};

export default Socials;
