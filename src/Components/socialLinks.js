import React from "react";
import {
  IoIosGlobe,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
} from "react-icons/io";

export const socialLinks = {
  twitter: {
    title: "Twitter",
    subtitle: "@lago_allan",
    component: <IoLogoTwitter className="clickable-image" />,
    href: "https://twitter.com/lago_allan",
  },
  website: {
    title: "Website",
    subtitle: "allan-lago.herokuapp.com",
    component: <IoIosGlobe className="clickable-image" />,
    href: "https://allan-lago.herokuapp.com/",
  },
  github: {
    title: "GitHub",
    subtitle: "/alago1",
    component: <IoLogoGithub className="clickable-image" />,
    href: "https://github.com/alago1",
  },
  linkedin: {
    title: "LinkedIn",
    subtitle: "in/allan-lago-a6b5131a8",
    component: <IoLogoLinkedin className="clickable-image" />,
    href: "https://www.linkedin.com/in/allan-lago-a6b5131a8/",
  },
};
