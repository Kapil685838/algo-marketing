import { defineStore } from "pinia";

export const useClientsStore = defineStore("clients", {
    state: () => ({
        title: 'Our Clients',
        clients: [
            {
                id: 1,
                name: 'Trends',
                logo: '/images/clients/rtrends-logo.png',
            },
            {
                id: 2,
                name: 'Centro',
                logo: '/images/clients/rcentro-logo.png',
            },
            {
                id: 3,
                name: 'FreshMenu',
                logo: '/images/clients/fresh-menu-logo.png',
            },
            {
                id: 4,
                name: 'Naukri',
                logo: '/images/clients/naukri-logo.png',
            },
            {
                id: 6,
                name: '100+',
                logo: '/images/clients/SP-website-design-Logos-17.png',
            }
        ]
    }),
    getters: {
        getTitle: (state) => state.title,
        getClients: (state) => state.clients
    },
    actions: {

    }
})