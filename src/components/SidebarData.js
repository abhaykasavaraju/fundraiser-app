import React from 'react';
import * as ImIcons from 'react-icons/im';
import * as MdIcons from 'react-icons/md';
import * as HiIcons from 'react-icons/hi';

export const SidebarData = [
    {
        title: 'Fund Raiser',
        path: '/fundraisers',
        icon: <HiIcons.HiOutlineCurrencyRupee />,
        cname: 'nav-text'
    },
    {
        title: 'Jobs',
        path: '/jobs',
        icon: <HiIcons.HiOutlineIdentification />,
        cname: 'nav-text'
    },
    {
        title: 'Events',
        path: '/events',
        icon: <MdIcons.MdEventNote />,
        cname: 'nav-text'
    },
    {
        title: 'News',
        path: '/news',
        icon: <ImIcons.ImNewspaper />,
        cname: 'nav-text'
    }

]