import { NavLinksInterface } from '../interfaces/pages-interfaces';

export const DEFAULT_NAVIGATION_LINKS: NavLinksInterface[] = [
    {
        name: 'Home',
        url: '/',
        index: 0,
        userPrivate: false
    },
    {
        name: 'Login',
        url: '/login',
        index: 1,
        userPrivate: false
    },
    {
        name: 'Profile',
        url: '/profile',
        index: 2,
        userPrivate: true
    }
];
