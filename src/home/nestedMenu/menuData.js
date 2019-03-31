import React from 'react';
import { HeaderOne, HeaderTwo, HeaderThree, HeaderFour, HeaderFive } from '../collections/Header'  
import { Movies, Albums, Posters } from '../collections/Body'
import { FooterOne, FooterTwo, FooterThree, FooterFour, FooterFive, FooterSix, FooterSeven, FooterEight } from '../collections/Footer'

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
                    title: "Design #1",
                    parent: "footer",
                    data: <FooterOne />
                },
                {
                    title: "Design #2",
                    parent: "footer",
                    data: <FooterTwo />
                },
                {
                    title: "Design #3",
                    parent: "footer",
                    data: <FooterThree />
                },
                {
                    title: "Design #4",
                    parent: "footer",
                    data: <FooterFour />
                },
                {
                    title: "Design #5",
                    parent: "footer",
                    data: <FooterFive />
                },
                {
                    title: "Design #6",
                    parent: "footer",
                    data: <FooterSix />
                },
                {
                    title: "Design #7",
                    parent: "footer",
                    data: <FooterSeven />
                },
                {
                    title: "Design #8",
                    parent: "footer",
                    data: <FooterEight />
                },
                {
                    title: "Back",
                    parent: "body",
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