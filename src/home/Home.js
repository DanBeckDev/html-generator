import React from 'react';
import NestedMenu from './nestedMenu/NestedMenu';

export default class Home extends React.Component {
    constructor () {
        super()
        this.state = {
            header: '',
            main: '',
            footer: ''
        }
    }

    onTemplateChange = (section, component) => {
        this.setState({
            [section]: component
        });
    }

    render() {
        return (
            <>  
                <div className='fl w-20 pa2'>
                    <NestedMenu onTemplateChange={this.onTemplateChange}/>
                </div>
                <div className='fl w-80 pa2'>
                    <main>
                        <article className=''>
                            {(this.state.header !== null) && this.state.header}
                        </article>
                        <article className='mv5'>
                            {(this.state.main !== null) && this.state.main}
                        </article> 
                        <article className='mv5'>
                            {(this.state.footer !== null) && this.state.footer}
                        </article> 
                    </main>
                </div>
            </>
        );
    }
    
}