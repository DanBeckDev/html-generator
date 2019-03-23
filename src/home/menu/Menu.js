import React, { useState } from 'react';
import Button from './button/Button';
import Input from './input/Input';
import List from './list/List';

export default function Menu(props) {
    const [state, setState] = useState(null);
    const [sections, setSections] = useState([]);
    switch (state){ 
            
        case 'header': 
            const headerItems = ['Design #1', 'Design #2', 'Design #3', 'Design #4', 'Design #5'];
            const headerName = 'Layout';
            return(
                <div className='fl w-20 pa2 ba bg-near-white'>
                    <Button title={'Back'} state={''} setState={setState}/>
                    <Input FieldName={'Title'}/>
                    <List 
                        name={headerName}
                        section='header' 
                        items={headerItems} 
                        state={props.headerState} 
                        setState={props.setHeaderState}
                        array={false}
                    />
                </div>
            );

        case 'body': 
            console.log('item count: '+props.bodyState.count)
            return(
                <div className='fl w-20 pa2 ba bg-near-white'>
                    <Button title={'Back'} state={''} setState={setState}/>
                    <Button title={'Add Section'} state={'section'} setState={setState}/>
                    {
                        sections.map((Section) =>
                            <div key={Section.id} >{Section.content}</div>
                        )
                    }
                    
                </div>
            );
        case 'section':
            return(
                <div className='fl w-20 pa2 ba bg-near-white'>
                    <Button title={'Back'} state={'body'} setState={setState}/>
                    <Button title={'Collections'} state={'collections'} setState={setState}/>
                    
                </div>
            );
        case 'collections':
            const collectionItems = ['Movies', 'Albums', 'Posters'];
            const collectionName = 'Collections';
            return(
                <div className='fl w-20 pa2 ba bg-near-white'>
                    <Button title={'Back'} state={'section'} setState={setState}/>
                    <List 
                        name={collectionName} 
                        section='header' 
                        items={collectionItems} 
                        state={props.bodyState} 
                        setState={props.setBodyState}
                        array={true}
                    />
                    <Button title={'Save'} state={'section'} setState={setSections}/>
                </div>
            );
        case 'footer': 
            const footerItems = ['Design #1', 'Design #2', 'Design #3', 'Design #4', 'Design #5', 'Design #6', 'Design #7', 'Design #8'];
            const footerName = 'Layout';
            return(
                <div className='fl w-20 pa2 ba bg-near-white'>
                    <Button title={'Back'} state={''} setState={setState}/>
                    <Input FieldName={'Title'}/>
                    <List 
                        name={footerName} 
                        section='footer' 
                        items={footerItems} 
                        state={props.footerState} 
                        setState={props.setFooterState}
                        array={false}
                    />
                </div>
            );

        default:
        return(
            <div className='fl w-20 pa2 ba bg-near-white'>
                <Button title={'Header'} state={'header'} setState={setState}/>
                <Button title={'Body'} state={'body'} setState={setState}/>
                <Button title={'Footer'} state={'footer'} setState={setState}/>
            </div>
        );
    }
}