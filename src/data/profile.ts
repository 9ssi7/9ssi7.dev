type Item = {
  icon: string;
  url?: string;
  appName: string;
  param: string;
};

const ProfileItems: Item[] = [
  {
    icon: "bx-buildings",
    appName: "Work",
    param: "MonoPayments",
    url: "https://monopayments.com",
  },
  {
    icon: "bx-map",
    appName: "Location",
    param: "cities_istanbul_turkey",
  },
  {
    icon: "bxl-gmail text-[#D14836]",
    url: "mailto:contact@9ssi7.dev",
    appName: "Mail",
    param: "contact@9ssi7.dev",
  },
  {
    icon: "bxl-github",
    url: "https://github.com/9ssi7",
    appName: "GitHub",
    param: "/ 9ssi7",
  },
  {
    icon: "bxl-linkedin text-blue-600 dark:text-blue-500",
    url: "https://www.linkedin.com/in/9ssi7/",
    appName: "LinkedIn",
    param: "/ 9ssi7",
  },
  {
    icon: "bxl-twitter text-blue-400 dark:text-blue-500",
    url: "https://twitter.com/9ssi7",
    appName: "Twitter",
    param: "/ 9ssi7",
  },
  {
    icon: "bxl-instagram text-[#E1306C]",
    url: "https://www.instagram.com/9ssi7/",
    appName: "Instagram",
    param: "/ 9ssi7",
  },
  {
    icon: "bxl-youtube text-[#FF0000] dark:text-[#FF0000]",
    url: "https://www.youtube.com/@9ssi7",
    appName: "YouTube",
    param: "/ @9ssi7",
  },
];

export default ProfileItems;
