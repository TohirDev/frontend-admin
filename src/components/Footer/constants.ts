type TFOOTER_NAV = {
  label: string;
  links: string[];
};

export const FOOTER_NAV: TFOOTER_NAV[] = [
  {
    label: "Information",
    links: [
      "About Us",
      "About Zip",
      "About Zip",
      "Search",
      "Terms",
      "Orders and Returns",
      "Contact Us",
      "Advanced Search",
      "Newsletter Subscription",
    ],
  },
  {
    label: "PC Parts",
    links: [
      "CPUS",
      "Add On Cards",
      "Hard Drives (Internal)",
      "Graphic Cards",
      "Keyboards / Mice",
      "Cases / Power Supplies / Cooling",
      "RAM (Memory)",
      "Software",
      "Speakers / Headsets",
      "Motherboards",
    ],
  },
  {
    label: "Desktop PCs",
    links: [
      "Custom PCs",
      "Servers",
      "MSI All-In-One PCs",
      "HP/Compaq PCs",
      "ASUS PCs",
      "Tecs PCs",
    ],
  },
  {
    label: "Laptops",
    links: [
      "Evryday Use Notebooks",
      "MSI Workstation Series",
      "MSI Prestige Series",
      "Tablets and Pads",
      "Netbooks",
      "Infinity Gaming Notebooks",
    ],
  },
  {
    label: "Address",
    links: [
      "Address: Street Adress City Address, 1234",
      "Phones: (00) 1234 5678",
      "We are open: Monday-Thursday: 9:00 AM - 5:30 PM",
      "Friday: 9:00 AM - 6:00 PM",
      "Saturday: 11:00 AM - 5:00 PM",
      "E-mail: shop@email.com",
    ],
  },
] as const;

console.log(FOOTER_NAV);
