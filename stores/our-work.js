import { defineStore } from "pinia";

export const useOurWorkStore = defineStore('our-work', {
    state: () => ({
        title: 'Our Brand <br> Raids',
        description: 'The Mafias love to talk about their conquests over a freshly brewed pitcher of beer. Client satisfaction is significant to them, as they strive for nothing short of creative excellence. Here are a few smart goals that were set and smashed successfully.',
        filters: [
            {
                id: 1,
                category: 'all',
            },
            {
                id: 2,
                category: 'branding',
            },
            {
                id: 3,
                category: 'case studies',
            },
            {
                id: 4,
                category: 'creative hub',
            },
            {
                id: 5,
                category: 'performance marketing',
            },
            {
                id: 6,
                category: 'production',
            },
            {
                id: 7,
                category: 'ui/ux',
            }
        ],
        filteredProjects: [],
        projects: [
            {
                id: 1,
                category: 'creative hub',
                image: '/images/ourWorkImg1.png'
            },
            {
                id: 2,
                category: 'branding',
                image: '/images/ourWorkImg2.png'
            },
            {
                id: 3,
                category: 'case studies',
                image: '/images/ourWorkImg3.png'
            },
            {
                id: 4,
                category: 'performance marketing',
                image: '/images/ourWorkImg4.png'
            },
            {
                id: 5,
                category: 'ui/ux',
                image: '/images/ourWorkImg5.png'
            },
            {
                id: 6,
                category: 'creative hub',
                image: '/images/ourWorkImg6.png'
            },
            {
                id: 7,
                category: 'production',
                image: '/images/ourWorkImg7.png'
            },
            {
                id: 8,
                category: 'ui/ux',
                image: '/images/ourWorkImg8.png'
            }
        ],
    }),
    getters: {
        getTitle: (state) => state.title,
        getDescription: (state) => state.description,
        getFilters: (state) => state.filters,
    },
    actions: {
        setFilteredProjects(category) {
            if(category === 'all') {
                this.filteredProjects = this.projects;
            } else {
                this.filteredProjects = this.projects.filter((item) => item.category === category)
            }
        }
    }
})