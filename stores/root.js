import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  state: () => ({
    brand: "Algo Marketing",
    brandLogo: "",
    socialLinks: [
      {
        id: 1,
        img: "/images/instagram.png",
        to: "https://www.instagram.com/socialpanga/",
      },
      {
        id: 2,
        img: "/images/twitter-icon.png",
        to: "https://twitter.com/socialpanga",
      },
      {
        id: 3,
        img: "/images/facebook-icon.png",
        to: "https://www.facebook.com/socialpanga",
      },
      {
        id: 4,
        img: "/images/linkedIn-icon.png",
        to: "https://www.linkedin.com/company/socialpanga/",
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
      description:
        "Congratulations for traveling from start to the end of this page! We’ll add 10,000 steps to your fitness tracker! 🙂",
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
    service: {
      title: "Our <br/> Servies",
      description:
        "We help businesses reach their full potential by creating a brand identity that is authentic and reflective of them. We understand that every brand comes with its own unique challenges, and hence requires expertise. We join hands with you as your growth partners and focus on delivering a power-packed panga each time!",
      card: [
        {
          id: 1,
          img: "/images/01-service-social-media-creative-srtategy.png",
          gif: "/images/01-service-gif-social-media-creative-srtategy.gif",
          label: "Creative & <br /> Digital Strategy",
          description:
            "We marinate strategies that best suit your business objectives by sprinkling the perfect salts of creativity and research.",
        },
        {
          id: 2,
          img: "/images/02-service-media-planning-buying.png",
          gif: "/images/02-service-gif-media-planning-buying.gif",
          label: "Media Planning <br/> & Buying",
          description:
            "We help you profitably define your marketing goals with our expertise in media planning and buying.",
        },
        {
          id: 3,
          img: "/images/03-service-analytics-seo.png",
          gif: "/images/03-service-gif-analytics-seo.gif",
          label: "Analytics & SEO",
          description:
            "The P in Panga stands for performance and our SEO and Analytics team delivers it with appropriate insights that have the ability to transform your business.",
        },
        {
          id: 4,
          img: "/images/04-service-branding-marketing-communications.png",
          gif: "/images/04-service-gif-branding-marketing-communications.gif",
          label: "Branding & Marketing <br /> Communication",
          description:
            "When we say we give your brand a VOICE we mean – V : Versatile, O : Omnipotent, I : Impressional, C : Captivating, E : Empowered way of branding and communicating your business.",
        },
        {
          id: 5,
          img: "/images/05-service-mobile-website-ui-ux.png",
          gif: "/images/05-service-gif-mobile-website-ui-ux.gif",
          label: "Mobile & Website <br/> UI/UX",
          description:
            "From the essential to the ornate, everything is taken care of completely, to offer a user-friendly interface and experience to your consumers.",
        },
        {
          id: 6,
          img: "/images/06-service-influencer-management.png",
          gif: "/images/06-service-gif-influencer-management.gif",
          label: "Influencer Management",
          description:
            "To make your idea come to life, we dive into a pool of talent and find the right influencer(s) for the task in hand.",
        },
        {
          id: 7,
          img: "/images/07-service-videio-production.png",
          gif: "/images/07-service-gif-videio-production.gif",
          label: "Video Production",
          description:
            "A perfect storyline is incomplete without the right set of shots taken from the perfect angles.",
        },
        {
          id: 8,
          img: "/images/08-service-consulting-services.png",
          gif: "/images/08-service-gif-consulting-services.gif",
          label: "Consulting Services",
          description:
            "We do a thorough research and integrate industry insights with internet trends to give you the best advice.",
        },
        {
          id: 9,
          img: "/images/09-service-technology.png",
          gif: "/images/09-service-gif-technology.gif",
          label: "Technology",
          description:
            "Only unrealistic aspect of us using technology is the experience we create for you outside our daily lives using the best of tech and tools.",
        },
      ],
    },
    ourwork: {
      title: "Our ^325+SharpShooters",
      description:
        "The Mafias love to talk about their conquests over a freshly brewed pitcher of beer. Client satisfaction is significant to them, as they strive for nothing short of creative excellence. Here are a few smart goals that were set and smashed successfully.",
      images: [
        {
          id: "1",
          img: "/images/ourWorkImg1.png",
        },
        {
          id: "2",
          img: "/images/ourWorkImg2.png",
        },
        {
          id: "3",
          img: "/images/ourWorkImg3.png",
        },
        {
          id: "4",
          img: "/images/ourWorkImg4.png",
        },
        {
          id: "5",
          img: "/images/ourWorkImg5.png",
        },
        {
          id: "6",
          img: "/images/ourWorkImg6.png",
        },
        {
          id: "7",
          img: "/images/ourWorkImg7.png",
        },
        {
          id: "8",
          img: "/images/ourWorkImg8.png",
        },
      ],
    },
    ourteam: {
      title: "Our Brand Raids",
      description:
        "The Mafias love to talk about their conquests over a freshly brewed pitcher of beer. Client satisfaction is significant to them, as they strive for nothing short of creative excellence. Here are a few smart goals that were set and smashed successfully.",
      card: {
        id: 1,
        img: "",
        gif: "",
        title: "",
        subTitle: "",
      },
    },
  }),
});
