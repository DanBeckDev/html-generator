import React from 'react';
import NestedMenu from './nestedMenu/NestedMenu';
import Modal from './Modal';

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
                <div className='fl w-20 pa2 relative vh-100'>
                    <div className='fixed w-20 pa2'>
                        <NestedMenu onTemplateChange={this.onTemplateChange}/>
                    </div>      
                </div>
                <div className='fl w-80 pa2'>
                    <main>
                        <article className=''>
                            {(this.state.header !== '') && this.state.header}
                        </article>
                        <article className='mv5'>
                            {
                                (this.state.main !== '') 
                                    ? this.state.main
                                    : <Modal />
                            }
                        </article> 
                        <article className='mv5'>
                            {(this.state.footer !== '') && this.state.footer}
                        </article> 
                    </main>
                </div>
            </>
        );
    }
    
}