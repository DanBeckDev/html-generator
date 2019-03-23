import React, { useState } from 'react';
import Menu from './menu/Menu';
import Header from './header/Header';
import Footer from './footer/Footer';

export default function Home() {
    const [headerState, setHeaderState] = useState(0);
    const [footerState, setFooterState] = useState(0);
    const [bodyState, setBodyState] = useState([]);
    return (
        <div>
            <Menu 
                setHeaderState={setHeaderState} 
                headerState={headerState}
                setFooterState={setFooterState}
                footerState={footerState}
                setBodyState={setBodyState}
                bodyState={bodyState}
            />
            <div className='fl w-80 pa2'>
                <Header headerState={headerState}/>
                <main>
                    {
                        bodyState.map((Body) =>
                            <div key={Body.id} >{Body.content}</div>
                        )
                    }
                </main>
                <Footer footerState={footerState} />
            </div>
        </div>
    );
}