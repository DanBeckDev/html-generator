import React from 'react';

export default function Input({FieldName}) {
    return(
        <div className="measure">
            <label htmlFor="name" className="f6 b db mb2">{FieldName}</label>
            <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
        </div>
    );
}