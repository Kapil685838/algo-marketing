import { defineStore } from "pinia";

export const useRootStore = defineStore('root', {
    state: () => ({
        nav: {
            brandLogo: '',
            links: [
                {
                    img: '',
                    label: 'About us'
                },
                {
                    img: '',
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