import {defineStore} from 'pinia';

export const useCareerStore = defineStore('career', {
    state: () => ({
        locations: ["Bengaluru", "Mumbai", "Delhi"]
    }),
    getters: {
        availableLocations: (state) => state.locations
    },
    actions: {

    }
})