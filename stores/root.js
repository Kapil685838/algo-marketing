import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  state: () => ({
    brand: "Algo Marketing",
    brandLogo: "",
    socialLinks: [
        {
            id: 1,
            img: '/images/instagram.png',
            to: 'https://www.instagram.com/socialpanga/',
        },
        {
            id: 2,
            img: '/images/twitter-icon.png',
            to: 'https://twitter.com/socialpanga',
        },
        {
            id: 3,
            img: '/images/facebook-icon.png',
            to: 'https://www.facebook.com/socialpanga',
        },
        {
            id: 4,
            img: '/images/linkedIn-icon.png',
            to: 'https://www.linkedin.com/company/socialpanga/',
        },
    ],
    nav: {
      links: [
        {
          id: 1,
          img: "/images/about-icon.svg",
          to: "/about-us",
          label: "About us",
        },
        {
          id: 2,
          img: "/images/services-icon.svg",
          to: "/services",
          label: "Services",
        },
        {
          id: 3,
          img: "/images/projects-icon.svg",
          to: "/our-work",
          label: "Our Work",
        },
        {
          id: 4,
          img: "/images/awards-icon.svg",
          to: "/awards",
          label: "Awards",
        },
        {
          id: 5,
          img: "/images/clients-icon.svg",
          to: "/clients",
          label: "Clients",
        },
        {
          id: 6,
          img: "/images/team-icon.svg",
          to: "/our-team",
          label: "Our Team",
        },
        {
          id: 7,
          img: "/images/career-icon.svg",
          to: "/careers",
          label: "Careers",
        },
        {
          id: 8,
          img: "/images/contact-icon.svg",
          to: "/contact-us",
          label: "Contact us",
        },
      ],
    },
    footer: {
      img: "/images/footer-img.png",
      description: "Congratulations for traveling from start to the end of this page! We’ll add 10,000 steps to your fitness tracker! 🙂",
      links1: [
        {
          id: 1,
          to: "/about-us",
          label: "About us",
        },
        {
          id: 2,
          to: "/services",
          label: "Services",
        },
        {
          id: 3,
          to: "/our-work",
          label: "Our Work",
        },
        {
          id: 4,
          to: "/awards",
          label: "Awards",
        },
        {
          id: 5,
          to: "/clients",
          label: "Clients",
        },
      ],
      links2: [
        {
          id: 6,
          to: "/our-team",
          label: "Our Team",
        },
        {
          id: 7,
          to: "/careers",
          label: "Careers",
        },
        {
          id: 8,
          to: "/contact-us",
          label: "Contact us",
        },
        {
          id: 9,
          to: "/privacy-policy",
          label: "Privacy Policy",
        },
      ],
      endDescription:
        "Social Panga is an integrated social media and digital marketing agency in Bangalore," +
        " Mumbai, Delhi, and Dubai. With a team of over 325+ Mafias, we are an award winning full" +
        "stack digital marketing agency in India offering creative and innovative solutions for " +
        "brands looking to grow their businesses online. If you are reading this, then you’re on" +
        "the right site to onboard one of the best creative marketing agency in India.",
    },
  }),
});
