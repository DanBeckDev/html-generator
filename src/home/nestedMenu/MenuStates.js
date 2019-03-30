import React from 'react';
import MenuButton from './MenuButton';

function HeaderMenu ({ menuData, onClick }){
    return(
        <>
            {menuData.menuArray.header.children.map((menuResult, key) => (
                <MenuButton title={menuResult.title} id={menuResult.id} key={key} onClick={onClick}/>
            ))} 
        </>
    )
}

function DefaultMenu ({ menuData, onClick}) {
    return(
        <>
            {Object.keys(menuData.menuArray).map((title, key) =>(
                    <MenuButton title={title.toUpperCase()} id={title} key={key} onClick={onClick} />
            ))}
        </>
    )
}

export { HeaderMenu, DefaultMenu };