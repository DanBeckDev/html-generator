import React from 'react';

function HeaderOne () {
    return(
        <header>
            <nav id='nav1' className="flex justify-between bb bg-black">
                <a className="link white-70 hover-white no-underline flex items-center pa3" href="#0">
                    <svg
                        className="dib h1 w1"
                        data-icon="grid"
                        viewBox="0 0 32 32"
                        style={{'fill':'currentcolor'}}>
                        <title>Super Normal Icon Mark</title>
                        <path d="M2 2 L10 2 L10 10 L2 10z M12 2 L20 2 L20 10 L12 10z M22 2 L30 2 L30 10 L22 10z M2 12 L10 12 L10 20 L2 20z M12 12 L20 12 L20 20 L12 20z M22 12 L30 12 L30 20 L22 20z M2 22 L10 22 L10 30 L2 30z M12 22 L20 22 L20 30 L12 30z M22 22 L30 22 L30 30 L22 30z">
                        </path>
                    </svg>
                </a>
                <div className="flex-grow pa3 flex items-center">
                    <a className="f6 link dib white dim mr3 mr4-ns" href="#0">About</a>
                    <a className="f6 link dib white dim mr3 mr4-ns" href="#0">Sign In</a>
                    <a className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="#0">Sign Up</a>
                </div>
            </nav>
        </header>
    );
}

function HeaderTwo () {
    return(
        <header>
            <nav className="pa3 pa4-ns">
                <a className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" href="#0" title="Home">Site Name</a>
                <div className="tc pb3">
                    <a className="link dim gray f6 f5-ns dib mr3" href="#0" title="Home">Home</a>
                    <a className="link dim gray f6 f5-ns dib mr3" href="#0" title="About">About</a>
                    <a className="link dim gray f6 f5-ns dib mr3" href="#0" title="Store">Store</a>
                    <a className="link dim gray f6 f5-ns dib" href="#0" title="Contact">Contact</a>
                </div>
            </nav>
        </header>
    );
}

function HeaderThree () {
    return(
        <header>
            <nav className="db dt-l w-100 border-box pa3 ph5-l">
                <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#0" title="Home">
                    <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name"/>
                </a>
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                    <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#0" title="Home">Home</a>
                    <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#0" title="How it Works">How it Works</a>
                    <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#0" title="Blog">Blog</a>
                    <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#0" title="Press">Press</a>
                    <a className="link dim dark-gray f6 f5-l dib" href="#0" title="Contact">Contact</a>
                </div>
            </nav>
        </header>
    );
}

function HeaderFour () {
    return(
        <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
            <nav className="f6 fw6 ttu tracked">
                <a className="link dim white dib mr3" href="#0" title="Home">Home</a>
                <a className="link dim white dib mr3" href="#0" title="About">About</a>
                <a className="link dim white dib mr3" href="#0" title="Store">Store</a>
                <a className="link dim white dib" href="#0" title="Contact">Contact</a>
            </nav>
        </header>
    );
}

function HeaderFive () {
    return(
        <header className="bg-white black-80 tc pv4 avenir">
            <a href="#0" className="bg-black-80 ba b--black dib pa3 w2 h2 br-100">
                <svg className="white" data-icon="skull" viewBox="0 0 32 32" style={{'fill':'currentcolor'}}><title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
            </a>
            <h1 className="mt2 mb0 baskerville i fw1 f1">Title</h1>
            <h2 className="mt2 mb0 f6 fw4 ttu tracked">Your amazing subtitle</h2>
            <nav className="bt bb tc mw7 center mt4">
                <a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/">Home</a>
                <a className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" href="/portfolio">Portfolio</a>
                <a className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" href="/shop">Shop</a>
                <a className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" href="/about">About</a>
                <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/contact">Contact</a>
            </nav>
        </header>
    );
}

export { HeaderOne, HeaderTwo, HeaderThree, HeaderFour, HeaderFive }