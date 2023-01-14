import React from "react";
import './LinkWithSvgLogo.css';

type LinkWithSvgLogoProps = {
    link: string,
    logoUrl: string
}

const LinkWithSvgLogo = (props: LinkWithSvgLogoProps) => {
    return (
        <a href={props.link}>
            <img src={props.logoUrl} alt={'logo'}/>
        </a>
    )
}

export default LinkWithSvgLogo;
