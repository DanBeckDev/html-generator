import React from 'react';
import ListItems from './ListItems';

export default function List({name, section, items, setState, state, array}) {
    return(
        <article className="pa3">
            <h1 className="f4 bold center mw6">{name}</h1>
            <ListItems section={section} items={items} state={state} setState={setState} array={array} />
        </article>
    );
}