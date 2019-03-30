import React from 'react';
import NestedMenu from './nestedMenu/NestedMenu';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <NestedMenu />
                {/* <div className='fl w-80 pa2'>
                    <main>
                       
                    </main>
                </div> */}
            </div>
        );
    }
    
}