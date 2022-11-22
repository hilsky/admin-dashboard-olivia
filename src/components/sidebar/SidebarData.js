import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as ImIcons from 'react-icons/im';
import * as TbIcons from 'react-icons/tb';

export const SidebarData = [
    {
        title: 'Users',
        path: '/',
        icon: <FaIcons.FaUserAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Hotel',
        path: '/hotel',
        icon: <FaIcons.FaHotel/>,
        cName: 'nav-text'
    },
    {
        title: 'Wisata',
        path: '/wisata',
        icon: <FaIcons.FaMapMarkedAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Pemandu',
        path: '/pemandu',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Kuliner',
        path: '/kuliner',
        icon: <TbIcons.TbToolsKitchen2 />,
        cName: 'nav-text'
    },
];