import React from "react";

import './AppendocFooter.css'

const AppendocFooter = () => {
    return (
        <footer className={'appendoc-footer-container'}>
            <div className={'appendoc-footer-wrapper'}>
                <span><a href={'#'}>appendoc.wiki</a></span>
                <span><a href={'#'}>Terms of service</a></span>
            </div>
        </footer>
    )
};

export default AppendocFooter;