import { defineStore } from "pinia";

export const useRootStore = defineStore('root', () => {
    state: {
        nav: {
            brandLogo: ''
        },
        navLinks: [
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
    getters: {

    },
    actions: {

    }
})