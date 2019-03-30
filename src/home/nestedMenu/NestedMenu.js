import React from 'react';
import menuData from './menuData';
import { DefaultMenu, ChildMenu } from './MenuStates';

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
        const { menuArray} = menuData;
        switch(menuState){
            case 'header':
                return <ChildMenu menuData={menuArray.header.children} onClick={onClick} onTemplateChange={this.props.onTemplateChange}/>
            case 'main':
                return <ChildMenu menuData={menuArray.main.children} onClick={onClick} onTemplateChange={this.props.onTemplateChange}/>
            case 'footer':
                return <ChildMenu menuData={menuArray.footer.children} onClick={onClick} onTemplateChange={this.props.onTemplateChange}/>
            default:
                return(
                    <DefaultMenu menuData={menuArray} onClick={onClick} />
                )
        }
    }
}