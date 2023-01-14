import React from "react";

import './NavLinks.css'

type NavigationLink = {
    title: string,
    href: string
}

type NavigationLinksProps = {
    links: Array<NavigationLink>
}

const NavigationLinks = (props: NavigationLinksProps) => {
    return (
        <nav>
            <ul className={'nav-links'}>
                {props.links.map((link: NavigationLink, index: number) => {
                    return (
                        <li key={index}>
                            <a href={link.href}>{link.title}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavigationLinks;