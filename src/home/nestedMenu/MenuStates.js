import React from 'react';
import { NavigationButton, TemplateButton } from './MenuButton';

function DefaultMenu ({ menuData, onClick }) {
    return(
        <>
            {Object.keys(menuData).map((title, key) =>(
                    <NavigationButton title={title.toUpperCase()} id={title} key={key} onClick={onClick} />
            ))}
        </>
    )
}

function ChildMenu ({ menuData, onClick, onTemplateChange }){
    return(
        <>
            {menuData.map((menuResult, key) => (
                (typeof menuResult.children != "undefined" || typeof menuResult.data != "undefined")
                    ? <TemplateButton key={key} title={menuResult.title} parent={menuResult.parent} data={ menuResult.data} onTemplateChange={onTemplateChange}/>
                    : <NavigationButton key={key} title={menuResult.title} id={menuResult.id} onClick={onClick}/>
                
            ))} 
        </>
    )
}

export { DefaultMenu, ChildMenu };