import { type AstroComponent } from "@lucide/astro";
import { Github, Invision } from "simple-icons-astro";

type Item = {
  icon: AstroComponent;
  url: string;
  appName: string;
  param: string;
};

const ProfileItems: Item[] = [
  {
    icon: Github,
    url: "https://github.com/9ssi7",
    appName: "GitHub",
    param: "/ 9ssi7",
  },
  {
    icon: Invision,
    url: "https://www.linkedin.com/in/9ssi7/",
    appName: "LinkedIn",
    param: "/ 9ssi7",
  },
];

export default ProfileItems;
