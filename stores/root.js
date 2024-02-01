import { defineStore } from "pinia";

export const useRootStore = defineStore('root', {
    state: () => ({
        nav: {
            brandLogo: '',
            links: [
                {
                    id: 1,
                    img: '',
                    to: '/about-us'
                    label: 'About us'
                },
                {
                    id: 2,
                    img: '',
                    to: '/contact-us'
                    label: 'Contact us'
                }
            ]
        },
    }),
    getters: {
        getBrandLogo: (state) => state.nav.brand,
        getNavLinks: (state) => state.nav.links
    }
});