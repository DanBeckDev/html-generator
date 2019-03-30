import React from 'react';
import { HeaderOne, HeaderTwo, HeaderThree, HeaderFour, HeaderFive } from '../collections/Header'  
import { Movies, Albums, Posters } from '../collections/Body'

export const menuData = {
    menuArray: {
        header: {
            title: "Header",
            id: "header",
            children: [
                {
                    title: "Design #1",
                    parent: "header",
                    data: <HeaderOne />
                },
                {
                    title: "Design #2",
                    parent: "header",
                    data: <HeaderTwo />
                },
                {   title: "Design #3",
                    parent: "header",
                    data: <HeaderThree />
                },
                {
                    title: "Design #4",
                    parent: "header",
                    data: <HeaderFour />
                },
                {
                    title: "Design #5",
                    parent: "header",
                    data: <HeaderFive />
                },
                {
                    title: "Back",
                    parent: "header",
                    id: ''
                }
            ]
        },
        main: {
            title: "Main",
            id: "main",
            children: [
                {
                    title: "Movies",
                    parent: "main",
                    data: <Movies />
                },
                {
                    title: "Albums",
                    parent: "main",
                    data: <Albums />
                },
                {
                    title: "Posters",
                    parent: "main",
                    data: <Posters />
                },
                {
                    title: "Back",
                    parent: "body",
                    id: ""
                }
            ]
        },
        footer: {
            title: "Footer",
            id: "footer",
            children: [
                {
                    title: "Design #1"
                },
                {
                    title: "Design #2"
                },
                {
                    title: "Design #3"
                },
                {
                    title: "Design #4"
                },
                {
                    title: "Design #5"
                },
                {
                    title: "Design #6"
                },
                {
                    title: "Design #7"
                },
                {
                    title: "Design #8"
                },
                {
                    title: "Back",
                    id: ""
                }
            ]
        },
        custom: {
            title: "Custom",
            id: "custom"
        },
        settings: {
            title: "Settings",
            id: "settings"
        }, 
        export: {
            title: "Export",
            id: "export"
        }
    }
}

export default menuData;