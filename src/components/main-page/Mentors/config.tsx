type CardConfigType = {
  image: string;
  name: string;
  company?: string;
  role: string[];
};

type MentorsDataType = { group: string; data: CardConfigType[] }[];

export const mentorsData: MentorsDataType = [
  {
    group: "jury",
    data: [
      {
        name: "Natalia Sikora-Zimna",
        company: "Nobl9",
        role: ["jury"],
        image: "/images/people/natalia_sikora_zimna.jpg",
      },
      {
        name: "Piotr Ptak",
        company: "Nobl9",
        role: ["jury", "mentor"],
        image: "/images/people/piotr_ptak.jpg",
      },
      {
        name: "Michał Kuligowski",
        company: "Sollers Consulting",
        role: ["jury"],
        image: "/images/people/michal_kuligowski.jpg",
      },
      {
        name: "Tomasz Sobczyk",
        company: "Wunderman Thompson Technology",
        role: ["jury"],
        image: "/images/people/tomasz_sobczyk.jpg",
      },
      {
        name: "Kacper Nadstoga",
        company: "Organizator",
        role: ["jury"],
        image: "/images/people/kacper_nadstoga.jpg",
      },
      {
        name: "Marcin Sylka",
        company: "Organizator",
        role: ["jury"],
        image: "/images/people/marcin_sylka.jpg",
      },
    ],
  },
  {
    group: "speakers",

    data: [
      {
        name: "Dawid Chróścielski",
        company: "AjTiTi",
        role: ["speaker"],
        image: "/images/people/dawid_chroscielski.jpg",
      },
      {
        name: "Jan Śmiełowski",
        company: "All For One",
        role: ["speaker", "mentor"],
        image: "/images/people/jan_smielowski.jpg",
      },
      {
        name: "Mikołaj Szymczak",
        company: "All For One",
        role: ["speaker", "mentor"],
        image: "/images/people/mikolaj_szymczak.jpg",
      },
      {
        name: "Joanna Zakrocka",
        company: "Inetum",
        role: ["speaker"],
        image: "/images/people/joanna_zakrocka.jpg",
      },
      {
        name: "Łukasz Dobek",
        company: "Nobl9",
        role: ["speaker"],
        image: "/images/people/lukasz_dobek.jpg",
      },
      {
        name: "Robert Banaszak",
        company: "Talkie.ai",
        role: ["speaker", "mentor"],
        image: "/images/people/robert_banaszak.jpg",
      },
      {
        name: "Piotr Jabłoński",
        company: "WithSecure",
        role: ["speaker", "mentor"],
        image: "/images/people/piotr_jablonski.jpg",
      },
      {
        name: "Kacper Chomicz",
        company: "Wunderman Thompson Technology",
        role: ["speaker"],
        image: "/images/people/kacper_chomicz.jpg",
      },
    ],
  },
  {
    group: "mentors",
    data: [
      {
        name: "Jacek Tomaszewski",
        company: "AppUnite",
        role: ["mentor"],
        image: "/images/people/jacek_tomaszewski.jpg",
      },
      {
        name: "Szymon Hrabia",
        company: "AppUnite",
        role: ["mentor"],
        image: "/images/people/szymon_hrabia.jpg",
      },
      {
        name: "Dawid Dziedzic",
        company: "Miquido",
        role: ["mentor"],
        image: "/images/people/dawid_dziedzic.jpg",
      },
      {
        name: "Kasia Zemka",
        company: "Nobl9",
        role: ["mentor"],
        image: "/images/people/kasia_zemka.jpg",
      },
      {
        name: "Krzysztof Skitek",
        company: "Nobl9",
        role: ["mentor"],
        image: "/images/people/krzysztof_skitek.jpg",
      },
      {
        name: "Marcin Ławniczak",
        company: "Nordcloud",
        role: ["mentor"],
        image: "/images/people/marcin_lawniczak.jpg",
      },
      {
        name: "Rafał Rudol",
        company: "Snowflake",
        role: ["mentor"],
        image: "/images/people/rafal_rudol.jpg",
      },
      {
        name: "Tomasz Gil",
        company: "Rvvup",
        role: ["mentor"],
        image: "/images/people/tomasz_gil.jpg",
      },
      {
        name: "Marta Rudol-Sitkowska",
        company: "Wunderman Thompson Technology",
        role: ["mentor"],
        image: "/images/people/marta_rudol_sitkowska.jpg",
      },
    ],
  },
];
