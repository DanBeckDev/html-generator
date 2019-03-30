import React from 'react';

const HeaderMenu = ({ menuData, onClick }) => (
    <>
        {menuData.menuArray.header.children.map((menuResult, key) => (
            <MenuButton title={menuResult.title} id={menuResult.id} key={key} onClick={onClick}/>
        ))} 
    </>
)

const DefaultMenu = ({ menuData, onClick}) => (
    <>
        {
            
            Object.keys(menuData.menuArray).map((title, key) =>(
                <MenuButton title={title.toUpperCase()} id={title} key={key} onClick={onClick} />
        ))}
    </>
)


const MenuButton = ({title, id, onClick}) => (
    <a
        href="#0" 
        className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box w-100 mv2"
        onClick={() => onClick(id)}
    >
        <span className="pr1">{title}</span>
        <svg className="w1" data-icon="chevronRight" viewBox="0 0 32 32" style={{"fill":"currentcolor"}} >
            <title>chevronRight icon</title>
            <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
        </svg>
    </a>
)
// header this.button(menuResult.title, menuResult.id, key)
const menuData = {
    menuArray: {
        header: {
            title: 'Header',
            id: 'header',
            children: [
                {
                    title: 'Design #1',
                    id: 'd1'
                },
                {
                    title: 'Design #2',
                    id: 'd2'
                },
                {
                    title: 'Design #3',
                    id: 'd3'
                },
                {
                    title: 'Design #4',
                    id: 'd4'
                },
                {
                    title: 'Design #5',
                    id: 'd5'
                },
                {
                    title: 'Back',
                    id:''
                }
            ]
        },
        body: {
            title: 'Body',
            id: 'body',
            children: [
                {
                    title: 'Movies'
                },
                {
                    title: 'Albums'
                },
                {
                    title: 'Posters'
                }
            ]
        },
        footer: {
            title: 'Footer',
            id: 'footer',
            children: [
                {
                    title: 'Design #1'
                },
                {
                    title: 'Design #2'
                },
                {
                    title: 'Design #3'
                },
                {
                    title: 'Design #4'
                },
                {
                    title: 'Design #5'
                },
                {
                    title: 'Design #6'
                },
                {
                    title: 'Design #7'
                },
                {
                    title: 'Design #8'
                }
            ]
        },
        custom: {
            title: 'Custom',
            id: 'custom'
        },
        settings: {
            title: 'Settings',
            id: 'settings'
        }, 
        export: {
            title: 'Export',
            id: 'export'
        }
    }
}

export default class NestedMenu extends React.Component{
    constructor () {
        super()
        this.state = {
            menuState: ''
        }
    }

    onClick = (menuState) => {
        this.setState({
            menuState
        });
    }

    render () {
        const { menuState } = this.state;
        const { onClick } = this;
        switch(menuState){
            case 'header':
                return <HeaderMenu menuData={menuData} onClick={onClick}/>
            default:
                return(
                    <DefaultMenu menuData={menuData} onClick={onClick} />
                )

        }
    }
}