import packages from '../../../json/packages.json';

export default defineEventHandler((event) => {
    const pkg = getRouterParam(event, "pkg");

    const data: any = packages[pkg]

    return data;
})