import { defineStore } from "pinia";

export const useRootStore = defineStore('root', {
    state: () => ({
        brand: 'Algo Marketing',
        brandLogo: '',
        nav: {
            links: [
                {
                    id: 1,
                    img: '/images/about-icon.svg',
                    to: '/about-us',
                    label: 'About us'
                },
                {
                    id: 2,
                    img: '/images/services-icon.svg',
                    to: '/',
                    label: 'Services'
                },
                {
                    id: 3,
                    img: '/images/projects-icon.svg',
                    to: '/',
                    label: 'Our Work'
                },
                {
                    id: 4,
                    img: '/images/awards-icon.svg',
                    to: '/',
                    label: 'Awards'
                },
                {
                    id: 5,
                    img: '/images/clients-icon.svg',
                    to: '/',
                    label: 'Clients'
                },
                {
                    id: 6,
                    img: '/images/team-icon.svg',
                    to: '/',
                    label: 'Our Team'
                },
                {
                    id: 7,
                    img: '/images/career-icon.svg',
                    to: '/',
                    label: 'Careers'
                },
                {
                    id: 8,
                    img: '/images/contact-icon.svg',
                    to: '/contact-us',
                    label: 'Contact us'
                }
            ]
        },
        footer: {
            links: [
                {
                    id: 1,
                    label: 'About Us',
                    to: '/about-us'
                },
                {
                    id: 2,
                    label: 'About Us',
                    to: '/about-us'
                },{
                    id: 3,
                    label: 'About Us',
                    to: '/about-us'
                },
            ]
        }
    }),
});