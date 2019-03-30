import React from 'react';
import Button from '../menu/button/Button';

const GenerateHeaderMenu = ({ menuData }) => (
    <>
        {menuData.menuArray.header.children.map((menuResult, key) => (
            <div key={key}>{menuResult.title}</div>
        ))} 
    </>
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

    button = (title, id, key) => {
        const { onClick } = this;
        console.log("called")
        return(
            <a
                key={key} 
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
        );
    }

    generateDefaultMenu = () => {
        const { onClick } = this;
        const { menuArray } = this.state
        const test = Object.keys(menuArray).forEach(title =>
        <Button title={title.toUpperCase()} id={title} key={1} onClick={onClick} />
        )
        return(
            <div>
                {test}
            </div>
        )
    }
    
    render () {
        const { menuState } = this.state;
        const { generateHeaderMenu } = this;
        switch(menuState){
            case 'header':
                return generateHeaderMenu();
            default:
                return(
                    <div>
                        <GenerateHeaderMenu menuData={menuData}/>
                    </div>
                )

        }
    }
}