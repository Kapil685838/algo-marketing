import { defineStore } from "pinia";

export const useRootStore = defineStore('root', {
    state: () => ({
        brand: 'Algo Marketing',
        brandLogo: '',
        nav: {
            links: [
                {
                    id: 1,
                    img: '',
                    to: '/about-us',
                    label: 'About us'
                },
                {
                    id: 2,
                    img: '',
                    to: '/contact-us',
                    label: 'Contact us'
                }
            ]
        },
    }),
});