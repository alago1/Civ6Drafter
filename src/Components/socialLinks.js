import React from "react";
import { TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineGlobal, AiOutlineGithub } from "react-icons/ai";

export const socialLinks = {
  twitter: {
    title: "Twitter",
    subtitle: "@lago_allan",
    component: <TiSocialTwitter className="clickable-image" />,
    href: "https://twitter.com/lago_allan",
  },
  website: {
    title: "Website",
    subtitle: "allan-lago.herokuapp.com",
    component: <AiOutlineGlobal className="clickable-image" />,
    href: "https://allan-lago.herokuapp.com/",
  },
  github: {
    title: "GitHub",
    subtitle: "/alago1",
    component: <AiOutlineGithub className="clickable-image" />,
    href: "https://github.com/alago1",
  },
  linkedin: {
    title: "LinkedIn",
    subtitle: "in/allan-lago-a6b5131a8",
    component: <TiSocialLinkedin className="clickable-image" />,
    href: "https://www.linkedin.com/in/allan-lago-a6b5131a8/",
  },
};
