import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'E-commerce',
        icon: 'shopping-cart-outline',
        link: '/admin/dashboard',
        home: true,
    },
    {
        title: 'Сотрудники',
        icon: 'person-done-outline',
        link: '/admin/employee',
    },
    {
        title: 'IoT Dashboard',
        icon: 'home-outline',
        link: '/admin/iot-dashboard',
    },
    {
        title: 'FEATURES',
        group: true,
    },
];
