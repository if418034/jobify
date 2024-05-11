import React from 'react';
import {FaWpforms, ImProfile, IoBarChartSharp, MdAdminPanelSettings, MdQueryStats} from "react-icons/all.js";

const links = [
    {
        text: 'add job',
        path: '.',
        icon: <FaWpforms/>
    },
    {
        text: 'all-jobs',
        path: 'all-jobs',
        icon: <MdQueryStats/>
    },
    {
        text: 'stats',
        path: 'stats',
        icon: <IoBarChartSharp/>
    },
    {
        text: 'profile',
        path: 'profile',
        icon: <ImProfile/>
    },
    {
        text: 'admin',
        path: 'admin',
        icon: <MdAdminPanelSettings/>
    },
]

export default links;
