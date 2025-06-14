import type { IconName } from "@/components/Icon.astro";

type Item = {
  icon: IconName;
  url: string;
  appName: string;
  param: string;
};

const ProfileItems: Item[] = [
  {
    icon: "github",
    url: "https://github.com/9ssi7",
    appName: "GitHub",
    param: "/ 9ssi7",
  },
  {
    icon: "linkedin",
    url: "https://www.linkedin.com/in/9ssi7/",
    appName: "LinkedIn",
    param: "/ 9ssi7",
  },
];

export default ProfileItems;
