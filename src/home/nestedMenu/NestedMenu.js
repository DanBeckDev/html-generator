import React from 'react';
import menuData from './menuData.json';
import { HeaderMenu, DefaultMenu } from './MenuStates';

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