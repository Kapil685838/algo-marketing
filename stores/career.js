import { defineStore } from 'pinia';

export const useCareerStore = defineStore('career', {
    state: () => ({
        locations: ["Bengaluru", "Mumbai", "Delhi"],
        openPositions: [],
        jobs: [
            {
                designation: "Copywriter",
                experience: "1-3 years",
                type: "Full Time",
                field: "Content",
                locations: ["Bengaluru", "Mumbai"],

            },
            {
                designation: "Senior Brand Solutions Manager",
                experience: "3-5 years",
                type: "Full Time",
                field: "Marketing",
                locations: ["Bengaluru"]
            },
            {
                designation: "Motion Graphics Artist",
                experience: "0-1 year",
                type: "Full Time",
                field: "Design",
                locations: ["Delhi"]
            }
        ]
    }),
    getters: {
        getAvailableLocations: (state) => state.locations,
        getAvailableJobs: (state) => state.jobs,
        getOpenPositions: (state) => state.openPositions
    },
    actions: {
        getJobs(location) {
            this.openPositions = this.jobs.filter((job) => {
                return job.locations.includes(location)
            });
        },
    }
})