import packages from '../../json/packages.json';

export default defineEventHandler((event) => {
    return packages["local-seo-packages"];
})